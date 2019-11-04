<?php

namespace App\Http\Server\Tcp\Events;

use App\Http\Server\BaseServer;

/**
 * Task_worker进程相关事件
 *
 * @package App\Http\Server\Tcp\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class TaskWorkerEvent extends BaseServer
{
    /**
     * 服务对象
     * @var object
     */
    private $_serv = null;

    public function Task()
    {

    }

    public function finish()
    {

    }


}