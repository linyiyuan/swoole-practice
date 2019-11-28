<?php

namespace App\Http\Coroutine\Example;

use App\Http\Coroutine\BaseCoroutine;

class InitCoroutine extends BaseCoroutine
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
        //当使用co::sleep co::pdo 这种可以实现同样的效果，同样是切换成协程异步IO
        \Swoole\Runtime::enableCoroutine();
        \Swoole\Coroutine::set([
            'max_coroutine' => 1,
        ]);

        $coroutineId1 = go(function () {
            \Co::sleep(1);
            echo 'coroutine 1';
        });

        $coroutineId2 = go(function () {
            \Co::sleep(1);
            echo 'coroutine 2';
        });

        echo $coroutineId1;

    }






}