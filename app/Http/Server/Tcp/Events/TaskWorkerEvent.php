<?php

namespace App\Http\Server\Tcp\Events;

use App\Http\Server\Tcp\InitServer;
use App\Mail\NotificationClient;
use Illuminate\Support\Facades\Mail;

/**
 * Task_worker进程相关事件
 *
 * @package App\Http\Server\Tcp\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class TaskWorkerEvent extends InitServer
{
    /**
     * Task异步任务队列回调方法
     *
     * @param \Swoole\Server $server
     * @param int $task_id
     * @param int $src_worker_id
     * @param $data
     */
    public function Task(\Swoole\Server $server, int $task_id, int $src_worker_id, $data)
    {
        $this->_serv = $server;
        $remote_ip = $data['remote_ip'];
        $fd = $data['fd'];

        //邮件通知测试
        Mail::to('linyiyuann@gmail.com')->send(new NotificationClient($remote_ip));

        $sendRes['fd'] = $fd;
        $sendRes['result'] = '发送邮件成功';
        $this->_serv->finish(json_encode($sendRes));
    }

    /**
     * task_worker 完成通知回调方法
     *
     * @param \Swoole\Server $server
     * @param int $task_id
     * @param string $data
     */
    public function finish(\Swoole\Server $server, int $task_id, string $data)
    {
        $this->_serv = $server;

        $data = json_decode($data, true);
        $fd = $data['fd'];
        $result = $data['result'];

        $this->_serv->send($fd, $result);
    }
}