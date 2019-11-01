<?php

namespace App\Http\Server;

/**
* Class TcpServer
* @package App\Http\Services\Common
* @Author YiYuan-LIn
* @Date: 2019/10/29
*/
class TcpServer extends BaseServer
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

        $this->_serv = new \Swoole\Server($this->server_url, $this->server_port);
        $this->_serv->set($this->setting);

        //注册事件
        $this->_serv->on('start', array($this, 'start'));
        $this->_serv->on('WorkerStart', array($this, 'workerStart'));
        $this->_serv->on('WorkerStop', array($this, 'workerStop'));
        $this->_serv->on('Connect', array($this, 'connect'));
        $this->_serv->on('Receive', array($this, 'receive'));
        $this->_serv->on('Close', array($this, 'close'));
        $this->_serv->on('Shutdown', array($this, 'shutdown'));
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
     * OnStart
     *
     * @param \Swoole\Server $server
     */
    public function start(\Swoole\Server $server)
    {
        //array($this, 'TimeNoticeTick')
    }

    /**
     * OnWorkerStart
     *
     * @param \Swoole\Server $server
     * @param int $worker_id
     */
    public function workerStart(\Swoole\Server $server, $worker_id) {}

    public function workerStop(\Swoole\Server $server, $worker_id) {
        echo 'bye work';
    }

    /**
     * 连接回调
     *
     * @param \Swoole\Server $server 服务对象
     * @param integer $fd 连接对象
     */
    public  function connect(\Swoole\Server $server, $fd)
    {
        $this->_serv->send($fd, '建立连接成功');
    }

    /**\
     * 接收信息回调函数
     *
     * @param \Swoole\Server $server 服务对象
     * @param integer $fd 连接对象
     * @param integer $reactor_id 线程ID
     * @param string $data 接收到的数据
     */
    public  function receive(\Swoole\Server $server, $fd, $reactor_id, $data)
    {
        $server->send($fd, '当前服务器共有' . count($server->connections) . '个连接' . PHP_EOL);
    }

    /**
     * 关闭连接回调函数
     *
     * @param $server
     * @param $fd
     */
    public  function close(\Swoole\Server $server, $fd)
    {
        echo $fd . 'is'. 'connect';
    }

    /**
     * 定时通知
     *
     */
    public function timeNoticeTick()
    {
       foreach ($this->_serv->connections as $key) {
           $this->_serv->send($key,  '当前服务器共有：' . count($this->_serv->connections) . '个连接');
       }
    }

    public function shutdown()
    {
        echo 'good bye';
    }
}