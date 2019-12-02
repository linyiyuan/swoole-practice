<?php

namespace App\Http\Coroutine;

/**
 * Class BaseServer
 * @package App\Http\Server
 * @Author YiYuan-LIn
 * @Date: 2019/11/1
 * Server基础类
 */
abstract class BaseCoroutine
{
    /**
     * 静态实例
     * @var object
     */
    protected static $_instance = [];

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

    /**
     * @Author YiYuan-LIn
     * @Date: 2019/4/30
     * @param string $code
     * @param string $message
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     * @description 错误返回
     */
    public function errorResponse($code = '', $message = '', $data = [])
    {
        if ($code == '') $code = 500;

        $data = [
            'errorCode' => $code,
            'message' => $message,
            'data' => $data
        ];

        return Response()->json($data);
    }

    /**
     * @Author YiYuan-LIn
     * @Date: 2019/4/30
     * @param \Exception $e
     * @return \Illuminate\Http\JsonResponse
     * @description 对异常进行处理并返回
     */
    public function errorExp(\Exception $e)
    {
        if (!$e->getCode()) {
            $code = 500;
            $message = '服务器错误 ' . $e->getMessage() . ':: FILE:' . $e->getFile() . ':: LINE: ' . $e->getLine();
        } else {
            $code = $e->getCode();
            $message = $e->getMessage();
        }
        return $this->errorResponse($code, $message);
    }
}