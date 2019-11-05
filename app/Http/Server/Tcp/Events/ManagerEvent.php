<?php

namespace App\Http\Server\Tcp\Events;

use App\Http\Server\Tcp\InitServer;

/**
 * Worker进程相关事件
 *
 * @package App\Http\Server\Tcp\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class ManagerEvent extends InitServer
{
    /**
     * 管理进程启动回调方法
     *
     * @param \Swoole\Server $server
     */
    public function managerStart(\Swoole\Server $server) {}

    /**
     * 管理进程结束回调方法
     *
     * @param \Swoole\Server $server
     */
    public function managerStop(\Swoole\Server $server) {}
}