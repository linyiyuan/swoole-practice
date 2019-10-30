<?php

namespace App\Http\Services\Client;

use App\Http\Services\BaseService;

/**
 * Class TcpAsyncClient
 * @package App\Http\Services\Clien
 * @Author YiYuan-LIn
 * @Date: 2019/10/30
 */
class TcpAsyncClient extends BaseService
{
    /**
     * 连接地址
     * @var string
     */
    protected $client_url = '';

    /**0
     * 连接端口
     * @var int
     */
    protected $client_port = '';

    /**
     * TcpServer constructor.
     */
    public function __construct()
    {
        parent::__construct();

        $this->client_url = env('CLIENT_URL', '127.0.0.1');
        $this->client_port = env('CLIENT_PORT', 9501);
    }

    /**
     * @Author YiYuan-LIn
     * @Date: 2019/10/29
     * @enumeration:
     * @return mixed
     * @description TCP异步客户端
     */
    public function init()
    {
        try {
            $client = new \swoole_client(SWOOLE_SOCK_TCP, SWOOLE_SOCK_ASYNC);

            //注册连接成功回调
            $client->on('connect', function($cli) {
                $cli->send('Hello World!\n');
            });

            //注册数据接收回调
            $client->on('receive', function($cli, $data) {
                echo 'Receive: ' . $data . "\n";
            });

            //注册连接失败回调
            $client->on("error", function($cli){
                echo "Connect failed\n";
            });

            //注册连接关闭回调
            $client->on("close", function($cli){
                echo "Connection close\n";
            });

            //发起连接
            $client->connect($this->client_url, $this->client_port, 0.5);
        }catch (\Exception $e) {
            die($e->getMessage());
        }
    }
}