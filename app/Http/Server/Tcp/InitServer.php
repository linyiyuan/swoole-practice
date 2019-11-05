<?php

namespace App\Http\Server\Tcp;

use App\Http\Server\BaseServer;
use App\Http\Server\Tcp\Events\CommunicationEvent;
use App\Http\Server\Tcp\Events\InitEvent;
use App\Http\Server\Tcp\Events\TaskWorkerEvent;
use App\Http\Server\Tcp\Events\WorkerEvent;
use App\Http\Server\Tcp\Events\ManagerEvent;

/**
 * Class TcpServer
 * @package App\Http\Services\Common
 * @Author YiYuan-LIn
 * @Date: 2019/10/29
 */
class InitServer extends BaseServer
{
    /**
     * 服务对象
     * @var object
     */
    public $_serv = null;

    /**
     * Server端口
     * @var string
     */
    protected  $server_url = '';

    /**
     * Server端口
     * @var int
     */
    protected  $server_port = '';

    /**
     * admin server 端口
     * @var int
     */
    protected  $server_admin_port = '';

    /**
     * 初始化配置项
     * @var array
     */
    protected  $setting = '';

    /**
     * 服务初始化
     *
     * @return void
     */
    public function init()
    {
        $this->server_url = env('SERVER_URL', '127.0.0.1');
        $this->server_port = env('SERVER_PORT', 9501);
        $this->server_admin_port = env('SERVER_ADMIN_PORT', 9502);

        //注册服务
        if ($this->_serv == null)  $this->_serv = new \Swoole\Server($this->server_url, $this->server_port);

        //这里增加一个UDP端口用来作为内网管理
        $this->_serv->listen($this->server_url, $this->server_admin_port, SWOOLE_SOCK_UDP);

        $this->setOption();
        $this->registerEvents();
        $this->_serv->start();
    }


    /**
     * 设置选项
     *
     * return void
     */
    public function setOption()
    {
        $this->setting  = [
            'worker_num' => 1,
            'reactor_num' => 2,
            'max_request' => 3,
            'task_worker_num' => 2,
        ];

        $this->_serv->set($this->setting);
    }

    /**
     * 注册相关事件
     *
     * @return void
     */
    public function registerEvents()
    {
        //启动相关事件
        $this->_serv->on('start', [InitEvent::getInstance(), 'Start']);
        $this->_serv->on('Shutdown', [InitEvent::getInstance(), 'Shutdown']);

        //连接相关事件
        $this->_serv->on('Connect', [CommunicationEvent::getInstance(), 'Connect']);
        $this->_serv->on('Receive', [CommunicationEvent::getInstance(), 'Receive']);
        $this->_serv->on('Packet', [CommunicationEvent::getInstance(), 'Packet']);
        $this->_serv->on('Close', [CommunicationEvent::getInstance(), 'Close']);

        //Worker进程相关事件
        $this->_serv->on('WorkerStart', [WorkerEvent::getInstance(), 'WorkerStart']);
        $this->_serv->on('WorkerStop', [WorkerEvent::getInstance(), 'WorkerStop']);
        $this->_serv->on('WorkerExit', [WorkerEvent::getInstance(), 'WorkerExit']);

        //Manager相关事件
        $this->_serv->on('ManagerStart', [ManagerEvent::getInstance(), 'ManagerStart']);
        $this->_serv->on('ManagerStop', [ManagerEvent::getInstance(), 'ManagerStop']);

        //task_worker异步进程相关事件
        $this->_serv->on('Task',  [TaskWorkerEvent::getInstance(), 'Task']);
        $this->_serv->on('Finish',  [TaskWorkerEvent::getInstance(), 'Finish']);
    }
}