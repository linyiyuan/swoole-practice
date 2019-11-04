<?php

namespace App\Http\Server\WebSocket;

use App\Http\Server\BaseServer;
use App\Http\Server\WebSocket\Events\InitEvent;
use App\Http\Server\WebSocket\Events\MessageEvent;

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
    private $_serv = null;

    /**
     * TcpServer constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->_serv = new \Swoole\WebSocket\Server($this->server_url, $this->server_port);

        //注册事件
        $this->registerEvents();

    }

    /**
     * 初始化服务
     *
     * @Author YiYuan-LIn
     * @Date: 2019/11/1
     */
    public function init()
    {
        //启动服务
        $this->_serv->start();
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

        //消息接收发送相关事件
        $this->_serv->on('Open', [MessageEvent::getInstance(), 'Open']);
        $this->_serv->on('Message', [MessageEvent::getInstance(), 'Message']);
    }
}