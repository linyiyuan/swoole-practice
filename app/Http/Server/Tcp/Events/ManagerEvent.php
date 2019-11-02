<?php

namespace App\Http\Server\Tcp\Events;

use App\Http\Server\BaseServer;
use Illuminate\Support\Facades\Redis;

/**
 * Worker进程相关事件
 *
 * @package App\Http\Server\Tcp\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class ManagerEvent extends BaseServer
{
    /**
     * 服务对象
     * @var object
     */
    private $_serv = null;

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