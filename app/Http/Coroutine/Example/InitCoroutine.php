<?php

namespace App\Http\Coroutine\Example;

use App\Http\Coroutine\BaseCoroutine;

/**
 * 协程初始化
 * Class InitCoroutine
 * @package App\Http\Coroutine\Example
 * @Author YiYuan-LIn
 * @Date: 2019/12/2
 */
class InitCoroutine extends BaseCoroutine
{
    /**
     * ShellExecCoroutine constructor.s
     */
    public function __construct()
    {

    }

    /**
     * 协程初始化
     *
     * @return mixed
     */
    public function init()
    {
        try {
            //Swoole\Runtime::enableCoroutine()作用是将PHP提供的stream、sleep、pdo、mysqli、redis等功能从同步阻塞切换为协程的异步IO
            //当使用co::sleep co::pdo 这种可以实现同样的效果，同样是切换成协程异步IO
            \Swoole\Runtime::enableCoroutine();

            //设置配置项
            self::setOption();

            $this->create();
            $this->defer();
            $this->exists();
            $this->yieldResume();
            $this->info();

        }catch (\Exception $e) {
            return $this->errorExp($e);
        }
    }

    /**
     * 设置coroutine 配置项
     */
    protected static function setOption()
    {
        \Swoole\Coroutine::set([
            'max_coroutine' => 10, //设置最大协程数，超过限制后底层将无法创建新的协程。
            'stack_size' => '2049', //设置单个协程初始栈的内存尺寸，默认为2M
            'log_level' => SWOOLE_LOG_TRACE, //日志等级
            'trace_flags' => SWOOLE_TRACE_ALL, //跟踪标签
            'socket_connect_timeout' => 1, //建立socket连接超时时间, 默认为1(秒)
            'socket_timeout' => -1, //socket读写操作超时时间, 默认为-1, 即永不超时
            'dns_cache_expire' => 60, //设置swoole dns缓存失效时间,单位秒,默认60秒
            'dns_cache_capacity' => 1000, //设置swoole dns缓存容量,默认1000
        ]);
    }

    /**
     * 创建协程
     */
    public function create()
    {
        echo 'create coroutine example :' . PHP_EOL;
        go(function ()  {
            echo 'Create a coroutine first' . PHP_EOL;

            go(function () {
                echo 'Create a coroutine second' . PHP_EOL;

                go(function() {
                    echo 'Create a coroutine third' . PHP_EOL;
                });

            });
        });

        echo PHP_EOL;
    }

    /**
     * 释放协程
     */
    public function defer()
    {
        echo 'coroutine defer example :' . PHP_EOL;

        go(function ()  {
            echo 'start a coroutine' . PHP_EOL;

            defer(function () {
                echo 'stop a coroutine 1' . PHP_EOL;
            });

            defer(function () {
                echo 'stop a coroutine 2' . PHP_EOL;
            });

            defer(function () {
                echo 'stop a coroutine 3' . PHP_EOL;
            });
        });

        echo PHP_EOL;
    }

    /**
     * 检测协程是否存在
     */
    public function exists()
    {
        echo 'coroutine exists example :' . PHP_EOL;

        go(function () {
            go(function () {
                go(function() {
                    sleep(0.1);
                    var_dump(\Co::exists(\Co::getPcid()));
                });

                go(function() {
                    sleep(0.3);
                    var_dump(\Co::exists(\Co::getPcid()));
                });

                sleep(0.2);
                var_dump(\Co::exists(\Co::getPcid()));
            });
        });

        echo PHP_EOL;
    }

    /**
     * 让出协程以及接纳协程
     */
    public function yieldResume()
    {
        echo 'coroutine yield resume example : ' . PHP_EOL;
        $oneCid = go(function () {
                        echo 'This first Coroutine start' . PHP_EOL;
                        \Co::yield();
                        echo 'First Coroutine stop' . PHP_EOL;
                    });

        $twoCid = go(function() use ($oneCid) {
                    echo 'This Second Coroutine start' . PHP_EOL;
                    sleep(2);
                    \Co::resume($oneCid);
                    echo 'Second Coroutine stop' . PHP_EOL;
                });

        echo PHP_EOL;
    }

    /**
     * 协程信息
     */
    public function info()
    {
        echo 'coroutine list example : ' . PHP_EOL;

            go(function() {

            });

            go(function() {

            });

            go(function() {

            });

            go(function() {
                $coros = \Co::listCoroutines();
                $coros = iterator_to_array($coros);

                echo '显示当前进程下的协程数量 : ' . $coros[0] . PHP_EOL;

                go(function() {

                });

                var_dump(\Co::stats());
            });

        echo PHP_EOL;
    }
}
