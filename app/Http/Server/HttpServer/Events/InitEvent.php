<?php

namespace App\Http\Server\HttpServer\Events;

use App\Http\Server\HttpServer\InitServer;

/**
 * 初始化事件 包含了服务的启动以及结束时间
 *
 * @package App\Http\Server\HttpServer\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class InitEvent extends InitServer
{
    /**
     * 主线程启动时回调方法
     *
     * @param \Swoole\Http\Server $server
     */
    public function start(\Swoole\Http\Server $server)
    {
        echo 'The HttpServer Server is Started' . PHP_EOL . 'Please visit '. $server->host . ':' . $server->port;
    }

    /**
     * 服务正常结束回调方法
     *
     * @param \Swoole\Http\Server $server
     */
    public function shutDown(\Swoole\Http\Server $server)
    {
        echo 'The WebSocket Server is Stop';
    }
}