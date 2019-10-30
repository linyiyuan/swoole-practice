<?php

namespace App\Http\Services\Server;

use App\Http\Services\BaseService;

/**
 * Class TcpServer
 * @package App\Http\Services\Common
 * @Author YiYuan-LIn
 * @Date: 2019/10/29
 */
class AsyncServer extends BaseService
{
    /**
     * 连接地址
     * @var string
     */
    protected $server_url = '';

    /**0
     * 连接端口
     * @var int
     */
    protected $server_port = '';

    /**
     * TcpServer constructor.
     */
    public function __construct()
    {
        parent::__construct();

        $this->server_url = env('SERVER_URL', '127.0.0.1');
        $this->server_port = env('SERVER_PORT', 9501);
    }

    /**
     * @Author YiYuan-LIn
     * @Date: 2019/10/29
     * @enumeration:
     * @return mixed
     * @description Async异步任务
     */
    public function init()
    {
        try {
           $server = new \swoole_server($this->server_url, $this->server_port);

           //设置异步任务工作进程数量
            $server->set([
                'task_worker_num' => 4,
            ]);

            $server->on('receive', function($server, $fd, $from_id, $data) {
                //投递异步任务
                $task_id = $server->task($data);
                echo "Dispath AsyncTask: id=$task_id\n";
            });

            //处理异步任务
            $server->on('task', function($server, $task_id, $from_id, $data) {
                echo "New AsyncTask[id=$task_id]".PHP_EOL;
                //返回任务执行的结果
                $server->finish("$data -> OK");
            });

            //处理异步任务返回的执行结果
            $server->on('finish', function($server, $task_id, $data) {

                echo "AsyncTask[$task_id] Finish: $data".PHP_EOL;
            });

            $server->start();
        }catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}