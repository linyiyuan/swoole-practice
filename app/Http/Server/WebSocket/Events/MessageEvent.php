<?php

namespace App\Http\Server\WebSocket\Events;

use App\Http\Server\WebSocket\InitServer;

/**
 * 信息传送事件
 *
 * @package App\Http\Server\Tcp\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class MessageEvent extends InitServer
{
    /**
     * 客户端与WebSocket服务器建立连接时回调方法
     *
     * @param \Swoole\WebSocket\Server $server
     * @param \swoole\http\request $request
     */
    public function open(\Swoole\WebSocket\Server $server, \swoole\http\request $request)
    {
        $this->_serv = $server;
        $this->_serv->push($request->fd, '连接成功');
    }

    /**
     * 当服务器收到来自客户端的数据帧时会回调此方法
     *
     * @param \swoole\websocket\server $server
     * @param \swoole\websocket\frame $frame
     */
    public function message(\swoole\websocket\server $server, \swoole\websocket\frame $frame)
    {
        echo '<pre>';
        print_r($frame);

        $this->_serv->push($frame->fd, $frame->data);
    }

    /**
     * 客户端与服务器断开连接回调方法
     *
     * @param \Swoole\WebSocket\Server $server
     * @param int $fd
     */
    public function close(\Swoole\WebSocket\Server $server, int $fd)
    {
        echo $fd . '断开连接' . PHP_EOL;

    }
}