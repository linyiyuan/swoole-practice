<?php

namespace App\Http\Services\Server;

use App\Http\Services\BaseService;

/**
 * Class TcpServer
 * @package App\Http\Services\Common
 * @Author YiYuan-LIn
 * @Date: 2019/10/29
 */
class UdpServer extends BaseService
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
     * @description Udp连接
     */
    public function init()
    {
        try {
            $clientInfo['address'] = $this->server_url;
            $clientInfo['port'] = $this->server_port;

            $server = new \swoole_server($this->server_url, $this->server_port, SWOOLE_PROCESS, SWOOLE_SOCK_UDP);

            //监听数据接收事件
            $server->on('Packet', function ($server, $data, $clientInfo) {
                $server->sendto($clientInfo['address'], $clientInfo['port'], "Server ".$data);
                var_dump($clientInfo);
            });

            //启动服务器
            $server->start();

        }catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}