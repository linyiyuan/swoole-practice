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


            $coroutineId1 = go(function () {
                \Co::sleep(1);
                echo 'coroutine 1';
            });

            $coroutineId2 = go(function () {
                \Co::sleep(1);
                echo 'coroutine 2';
            });

            echo $coroutineId1;
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
}