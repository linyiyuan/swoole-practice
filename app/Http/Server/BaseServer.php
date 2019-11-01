<?php

namespace App\Http\Server;

/**
 * Class BaseServer
 * @package App\Http\Server
 * @Author YiYuan-LIn
 * @Date: 2019/11/1
 * Server基础类
 */
abstract class BaseServer
{
    /**
     * Server端口
     * @var string
     */
    protected  $server_url = '';

    /**
     * Server端口
     * @var int
     */
    protected  $server_port = '';

    /**
     * 初始化配置项
     * @var array
     */
    protected  $setting = '';

    /**
     * 静态实例
     * @var object
     */
    protected static $_instance = [];

    /**
     * TcpServer constructor.
     */
    protected function __construct()
    {
        $this->server_url = env('SERVER_URL', '127.0.0.1');
        $this->server_port = env('SERVER_PORT', 9501);

        $this->setting = [
            'worker_num' => 2,  //进程数
            'reactor_num' => 2, //线程数
            'max_request' => 3
        ];
    }

    /**
     * @Author YiYuan-LIn
     * @Date: 2019/11/1
     * @enumeration:
     * @return mixed
     * @description 修改为多单例子类继承方式
     */
    public static function getInstance() {
        $className = get_called_class();
        if (!isset(static::$_instance[$className]) || !static::$_instance[$className]) static::$_instance[$className] = new static();
        return static::$_instance[$className];
    }

    /**
     * @Author YiYuan-LIn
     * @Date: 2019/11/1
     * @enumeration:
     * @description 禁用克隆
     */
    protected function __clone() { }

    /**
     * @Author YiYuan-LIn
     * @Date: 2019/11/1
     * @enumeration:
     * @param \Exception $e
     * @return string
     * @description 处理异常
     */
    public function throwExp(\Exception $e)
    {
        $line = $e->getLine();
        $message = $e->getMessage();
        $code = $e->getCode();
        $file = $e->getFile();

        $errTemplate = "EXCEPTION::". $message . "\r\nERRCODE::". $code . "\r\nFILE::". $file. "::LINE::". $line;
        return $errTemplate;
    }
}