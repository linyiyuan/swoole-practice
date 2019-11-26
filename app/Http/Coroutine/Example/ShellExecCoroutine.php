<?php

namespace App\Http\Coroutine\Example;

use App\Http\Coroutine\BaseCoroutine;

class ShellExecCoroutine extends BaseCoroutine
{
    /**
     * ShellExecCoroutine constructor.s
     */
    public function __construct()
    {

    }

    public function init()
    {
        $c = 10;
        while($c--) {
            go(function () {
                //这里使用 sleep 5 来模拟一个很长的命令
                \Co::exec("sleep 5");
            });
        }
    }
}