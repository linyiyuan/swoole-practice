<?php

namespace App\Http\Services\Server;

use App\Http\Services\BaseService;

/**
 * Class TcpServer
 * @package App\Http\Services\Common
 * @Author YiYuan-LIn
 * @Date: 2019/10/29
 */
class TcpServer extends BaseService
{
    /**
     * 连接地址
     * @var string
     */
    protected $server_url = '';

    /**
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
     * @description TCP连接
     */
    public function init()
    {
        try {
            $server = new \Swoole\Server($this->server_url, $this->server_port);

            //监听Server对象
            $server->on('Connect', function($server, $fd){
                echo 'Client is connect';

            });

            $server->on('Receive', function($server, $fd, $from_id, $data){
                $server->send($fd, 'Server: '. $data . $fd);
            });

            $server->on('Close', function($Server, $fd){
                echo 'Connect is Close';
            });

            $server->start();
        }catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}