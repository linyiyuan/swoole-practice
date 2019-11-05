<?php

namespace App\Http\Server\Tcp\Events;

use App\Http\Server\Tcp\InitServer;
use Illuminate\Support\Facades\Redis;

/**
 * Worker进程相关事件
 *
 * @package App\Http\Server\Tcp\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class WorkerEvent extends InitServer
{
    /**
     * 主线程启动时回调方法
     *
     * @param \Swoole\Server $server
     * @param int $worker_id 运行进程ID
     */
    public function WorkerStart(\Swoole\Server $server, int $worker_id)
    {
        $this->_serv = $server;
        //TODO 程序全局期作用域对象，这部分内存会在写时分离（COW），在Worker进程内对这些对象进行写操作时，会自动从共享内存中分离，变为进程全局对象。

        //初始化Redis服务 可以通过WorkerId分别在两个进程中去初始化Redis服务 所以每个Worker进程都有属于自己的一个Redis连接，可以区分库
        //if ($worker_id == 0)   $this->_serv->redis = Redis::connection('redis_db_1th');
        //if ($worker_id == 1)   $this->_serv->redis = Redis::connection('redis_db_2nd');
        $this->_serv->redis = Redis::connection('default');
    }


    /**
     * 主线程结束时回调方法
     *
     * @param \Swoole\Server $server
     * @param int $worker_id 运行进程ID
     */
    public function WorkerStop(\Swoole\Server $server, int $worker_id)
    {
        $this->_serv = $server;
    }

    /**
     * 异步重启Worker进程
     *
     * @param \Swoole\Server $server
     * @param int $worker_id 运行进程ID
     */
    public function WorkerExit(\Swoole\Server $server, int $worker_id) {}
}