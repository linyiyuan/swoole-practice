<?php

namespace App\Http\Coroutine\Example;

use App\Http\Coroutine\BaseCoroutine;

class GoChanDeferCoroutine extends BaseCoroutine
{
    /**
     * ShellExecCoroutine constructor.s
     */
    public function __construct()
    {

    }

    public function init()
    {
        //Swoole\Runtime::enableCoroutine()作用是将PHP提供的stream、sleep、pdo、mysqli、redis等功能从同步阻塞切换为协程的异步IO
        \Swoole\Runtime::enableCoroutine();

        //并发执行
        $this->go();
        $this->channel();

    }

    /**
     * 并发执行
     *
     * @return bool
     */
    public function go()
    {
        go(function() {
            sleep(5);

            file_put_contents('/data/swoole-practice/1.txt', '123');
        });

        echo '执行成功';

        return true;
    }

    public function channel()
    {
        //建立两个通道
        $chan = new \Chan(2);

        //协程1 用来接收信息
        go(function () use ($chan) {
            $result = [];
            for ($i = 0; $i < 2; $i++) {
                $result += $chan->pop();
            }

            var_dump($result);
        });

        # 协程2
        go(function () use ($chan) {
            $cli = new \Swoole\Coroutine\Http\Client('www.qq.com', 80);
            $cli->set(['timeout' => 10]);
            $cli->setHeaders([
                'Host' => "www.qq.com",
                "User-Agent" => 'Chrome/49.0.2587.3',
                'Accept' => 'text/html,application/xhtml+xml,application/xml',
                'Accept-Encoding' => 'gzip',
            ]);
            $ret = $cli->get('/');
            // $cli->body 响应内容过大，这里用 Http 状态码作为测试
            $chan->push(['www.qq.com' => $cli->statusCode]);
        });

        # 协程3
        go(function () use ($chan) {
            $cli = new \Swoole\Coroutine\Http\Client('www.163.com', 80);
            $cli->set(['timeout' => 10]);
            $cli->setHeaders([
                'Host' => "www.163.com",
                "User-Agent" => 'Chrome/49.0.2587.3',
                'Accept' => 'text/html,application/xhtml+xml,application/xml',
                'Accept-Encoding' => 'gzip',
            ]);
            $ret = $cli->get('/');
            // $cli->body 响应内容过大，这里用 Http 状态码作为测试
            $chan->push(['www.163.com' => $cli->statusCode]);
        });

        echo '正在执行';
    }

}