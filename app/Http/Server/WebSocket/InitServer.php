<?php

namespace App\Http\Server\WebSocket;

use App\Http\Server\BaseServer;
use App\Http\Server\WebSocket\Events\InitEvent;
use App\Http\Server\WebSocket\Events\MessageEvent;
use App\Http\Server\WebSocket\Events\WorkerEvents;

/**
 * Class InitServer
 * @package App\Http\Server\WebSocket
 * @Author YiYuan-LIn
 * @Date: 2019/11/4
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
        if ($this->_serv == null)  $this->_serv = new \Swoole\WebSocket\Server($this->server_url, $this->server_port);

        $this->registerEvents();
        $this->_serv->start();
    }
    /**
     *
     * 注册相关事件
     *
     * @return void
     */
    public function registerEvents()
    {
        //启动相关事件
        $this->_serv->on('start', [InitEvent::getInstance(), 'Start']);
        $this->_serv->on('Shutdown', [InitEvent::getInstance(), 'Shutdown']);

        //消息接收发送相关事件
        $this->_serv->on('Open', [MessageEvent::getInstance(), 'Open']);
        $this->_serv->on('Message', [MessageEvent::getInstance(), 'Message']);
        $this->_serv->on('Close', [MessageEvent::getInstance(), 'Close']);

        WorkerEvents::getInstance()->_serv = $this->_serv;
        $this->_serv->on('Request', [WorkerEvents::getInstance(), 'Request']);
    }
}