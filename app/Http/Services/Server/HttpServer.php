<?php

namespace App\Http\Services\Server;

use App\Http\Services\BaseService;

/**
 * Class TcpServer
 * @package App\Http\Services\Common
 * @Author YiYuan-LIn
 * @Date: 2019/10/29
 */
class HttpServer extends BaseService
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
            $server = new \Swoole\Http\Server($this->server_url, $this->server_port);

            $server->on('request', function ($request, $response) {
                //解决谷歌浏览器请求两次的问题
                if ($request->server['path_info'] == '/favicon.ico' || $request->server['request_uri'] == '/favicon.ico') {
                    return $response->end();
                }

                //打印信息
                var_dump($request->server['request_uri']);
                echo PHP_EOL;
                var_dump($request->get);
                echo PHP_EOL;
                var_dump($request->post);

                //返回头部
                $response->header("Content-Type", "text/html; charset=utf-8");
                //结束请求触发
                $response->end("<h1>Hello Swoole. #".rand(1000, 9999)."</h1>");
            });

            $server->start();
        }catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}