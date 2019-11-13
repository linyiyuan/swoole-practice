<?php

namespace App\Http\Server\HttpServer\Events;


use App\Http\Server\HttpServer\InitServer;

/**
 * Http请求事件
 * Class RequestServer
 * @package App\Http\Server\HttpServer\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/12
 */
class RequestEvent extends InitServer
{
    /**
     * 服务对象
     * @var object
     */
    public $_serv = null;

    /**
     * Http请求事件
     *
     * @param \Swoole\Http\Request $request
     * @param \Swoole\Http\Response $response
     */
    public function request(\Swoole\Http\Request $request, \Swoole\Http\Response $response)
    {
        echo '<pre>';
        print_r($this->_serv);
        print_r($request);

        $response->end("<h1>Hello Swoole. #".rand(1000, 9999)."</h1>");
    }
}