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
class WorkerEvents extends InitServer
{
    public function request(\Swoole\Http\Request $request, \Swoole\Http\Response $response)
    {
        foreach ($this->_serv->connections as $fd) {
            // 需要先判断是否是正确的websocket连接，否则有可能会push失败
            if ($this->_serv->isEstablished($fd)) {
                $this->_serv->push($fd, $request->get['message']);
            }
        }
    }

}