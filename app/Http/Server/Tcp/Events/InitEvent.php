<?php

namespace App\Http\Server\Tcp\Events;

use App\Http\Server\Tcp\InitServer;

/**
 * 初始化事件 包含了服务的启动以及结束时间
 *
 * @package App\Http\Server\Tcp\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class InitEvent extends InitServer
{
    /**
     * 主线程启动时回调方法
     *
     * @param \Swoole\Server $server
     */
    public function start(\Swoole\Server $server)
    {
        $this->_serv = $server;

        echo 'The Tcp Server is Started';
    }


    /**
     * 服务正常结束回调方法
     *
     * @param \Swoole\Server $server
     */
    public function shutDown(\Swoole\Server $server)
    {
        $this->_serv = $server;

        echo 'The Tcp Server is Stop';
    }
}