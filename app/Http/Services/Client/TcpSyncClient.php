<?php

namespace App\Http\Services\Client;

use App\Http\Services\BaseService;

/**
 * Class TcpSyncClient
 * @package App\Http\Services\Clien
 * @Author YiYuan-LIn
 * @Date: 2019/10/30
 */
class TcpSyncClient extends BaseService
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
     * @description TCP同步客户端
     */
    public function init()
    {
        try {
            $client = new \swoole_client(SWOOLE_SOCK_TCP);

            //建立与TCP服务器的链接
            if (!$client->connect($this->client_url, $this->client_port, 0.5)) die('connect faild');

            if (!$client->send('Hello World!')) die('send message faild');

            $recvData = $client->recv();
            if (!$recvData) die('recv message faild');

            echo $recvData;

            $client->close();
        }catch (\Exception $e) {
            die($e->getMessage());
        }
    }
}