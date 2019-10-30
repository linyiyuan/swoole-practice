<?php

namespace App\Http\Services\Server;

use App\Http\Services\BaseService;

/**
 * Class TcpServer
 * @package App\Http\Services\Common
 * @Author YiYuan-LIn
 * @Date: 2019/10/29
 */
class TimerServer extends BaseService
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
     * @description 定时器
     */
    public function init()
    {
        try {
            //每隔2000ms触发一次
            $timer_tick_id = \swoole_timer_tick(2000, function ($timer_id) {
                                    echo microtime() . "\n";
                                });

            //10000s后执行此函数
            \swoole_timer_after(10000, function () use ($timer_tick_id) {
                //清除定时器
                \swoole_timer_clear($timer_tick_id);
            });
        }catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}