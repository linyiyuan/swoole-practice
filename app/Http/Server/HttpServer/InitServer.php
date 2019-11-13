<?php

namespace App\Http\Server\HttpServer;

use App\Http\Server\BaseServer;
use App\Http\Server\HttpServer\Events\InitEvent;
use App\Http\Server\HttpServer\Events\RequestEvent;
use App\Http\Server\HttpServer\Events\ResponseEvent;

/**
 * Class HttpServer
 * @package App\Http\Server\HttpServer
 * @Author YiYuan-LIn
 * @Date: 2019/11/12
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
        if ($this->_serv == null)  $this->_serv = new \Swoole\Http\Server($this->server_url, $this->server_port);

//        $this->setOption();
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

        //请求相关事件
        RequestEvent::getInstance()->_serv = $this->_serv;
        $this->_serv->on('Request', [RequestEvent::getInstance(), 'Request']);

//        //Worker进程相关事件
////        $this->_serv->on('WorkerStart', [WorkerEvent::getInstance(), 'WorkerStart']);
////        $this->_serv->on('WorkerStop', [WorkerEvent::getInstance(), 'WorkerStop']);
////        $this->_serv->on('WorkerExit', [WorkerEvent::getInstance(), 'WorkerExit']);
////
////        //Manager相关事件
////        $this->_serv->on('ManagerStart', [ManagerEvent::getInstance(), 'ManagerStart']);
////        $this->_serv->on('ManagerStop', [ManagerEvent::getInstance(), 'ManagerStop']);
////
////        //task_worker异步进程相关事件
////        $this->_serv->on('Task',  [TaskWorkerEvent::getInstance(), 'Task']);
////        $this->_serv->on('Finish',  [TaskWorkerEvent::getInstance(), 'Finish']);
    }
}