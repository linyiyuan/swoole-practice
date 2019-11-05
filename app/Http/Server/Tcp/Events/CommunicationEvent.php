<?php

namespace App\Http\Server\Tcp\Events;

use App\Http\Server\Tcp\InitServer;

/**
 * 初始化事件 包含了服务的启动以及结束时间
 *
 * @package App\Http\Server\Tcp\Events
 * @Author YiYuan-LIn
 * @Date: 2019/11/2
 */
class CommunicationEvent extends InitServer
{
    /**
     * 客户端信息Redis存储键
     * @var object
     */
    protected $CLIENT_INFO_KEY = 'CLIENT:';

    /**
     * 客户端连接回调方法
     *
     * @param \Swoole\Server $server 服务对象
     * @param int $fd  客户端标识ID
     * @param int $reactor_id 线程ID
     */
    public function connect(\Swoole\Server $server, int $fd, int $reactor_id)
    {
        $this->_serv = $server;

        //异步发送邮件通知客户端用户
        $this->_serv->task([
            'fd' => $fd,
            'remote_ip' => $this->_serv->getClientInfo($fd)['remote_ip'],
        ]);

        //将客户端信息写入Redis中
        $this->_serv->redis->set($this->CLIENT_INFO_KEY . $fd, json_encode($this->_serv->getClientInfo($fd)));

        $this->_serv->send($fd, '连接服务器成功 请输入一下命令以获取相关信息：' . PHP_EOL .
                                      '获取服务器连接数: 1' . PHP_EOL .
                                      '获取服务器IP信息: 2' . PHP_EOL .
                                      '获取运行当前连接的Worker进程: 3' . PHP_EOL.
                                      '关闭当前的连接: 4' . PHP_EOL
        );
    }

    /**
     * 接收客户端发送数据回调方法
     *
     * @param \Swoole\Server $server 服务对象
     * @param int $fd  客户端唯一标识
     * @param int $reactor_id  线程ID
     * @param string $data  接收的数据
     */
    public function receive(\Swoole\Server $server, int $fd, int $reactor_id, string $data)
    {
        $this->_serv = $server;

        switch ($data) {
            case 1 :
                $this->_serv->send($fd, '当前连接服务器的连接数为：' . count($this->_serv->connections) . PHP_EOL);
                break;
            case 2:
                $this->_serv->send($fd, '当前连接服务器的IP以及端口为：' . $this->_serv->host . ':' . $this->_serv->port . PHP_EOL);
                break;
            case 3:
                $this->_serv->send($fd, '当前运行当前连接的Worker进程为：' . $this->_serv->worker_id. ':' . PHP_EOL);
                break;
            case 4:
                $this->_serv->close($fd);
                break;
            default:
                $this->_serv->send($fd, '命令识别失败 请输入一下命令以获取相关信息：' . PHP_EOL .
                    '获取服务器连接数: 1' . PHP_EOL .
                    '获取服务器IP信息: 2' . PHP_EOL .
                    '获取运行当前连接的Worker进程: 3' . PHP_EOL.
                    '关闭当前的连接: 4' . PHP_EOL
                );
                break;
        }
    }

    /**
     * 接收到UDP发送数据包回调方法（内网管理）
     *
     * @param \Swoole\Server $server
     * @param string $data
     * @param array $client_info
     */
    public function packet(\Swoole\Server $server, string $data, array $client_info)
    {
        $connections = $server->connections;

        $clientAddress = $client_info['address'];
        $clientPort = $client_info['port'];

        $server->sendto($clientAddress, $clientPort, '当前TCP链接数为' . count($connections));
    }

    /**
     * 客户端断开连接回调方法
     *
     * @param \Swoole\Server $server 服务器对象
     * @param int $fd 客户端连接标识
     * @param int $reactor_id 线程ID
     */
    public function close(\Swoole\Server $server, int $fd, int $reactor_id)
    {
        $this->_serv = $server;

        $this->_serv->redis->del($this->CLIENT_INFO_KEY . $fd);
        $this->_serv->send($fd, '断开服务器成功' . PHP_EOL);
    }
}