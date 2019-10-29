<?php

namespace App\Http\Services\Server;

use App\Http\Services\BaseService;

/**
 * Class TcpServer
 * @package App\Http\Services\Common
 * @Author YiYuan-LIn
 * @Date: 2019/10/29
 */
class WebSocketServer extends BaseService
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
     * @description Udp连接
     */
    public function init()
    {
        try {
            $ws = new \swoole_websocket_server($this->server_url, $this->server_port);

            //监听webSocket连接事件
            $ws->on('open', function($ws, $request){
                var_dump($request->fd, $request->server, $request->get);
                $ws->push($request->fd, 'Hello Welcome!');
            });

            $ws->on('message', function($ws, $frame) {
                echo 'Message: {$frame->data}\n';
                $ws->push($frame->fd, "Server: $frame->data");
            });

            //监听WebSocket连接关闭事件
            $ws->on('close', function ($ws, $fd) {
                echo "client-{$fd} is closed\n";
            });

            $ws->start();
        }catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}