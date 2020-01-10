<?php

namespace App\Http\Coroutine\Example;

use App\Http\Coroutine\BaseCoroutine;

class ChannelCoroutine extends BaseCoroutine
{
    /**
     * ShellExecCoroutine constructor.s
     */
    public function __construct()
    {

    }

    public function init()
    {
        \Swoole\Runtime::enableCoroutine();

        $chan = new \Swoole\Coroutine\Channel(1);

        go(function() use ($chan) {
            for ($i = 1; $i < 100000; $i++) {
                sleep(1);
                $chan->push([
                    'rand' => rand(1000, 9999),
                    'index' => $i
                ]);
                if ($i == 1000) $chan->close();
                echo $i . PHP_EOL;
            }
        });


        go(function() use($chan) {
            while(1) {
                $data = $chan->pop();
                var_dump($data);
                var_dump($chan->length());
                var_dump($chan->isEmpty());
            }
        });

    }
}