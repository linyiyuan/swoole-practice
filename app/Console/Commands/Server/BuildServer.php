<?php

namespace App\Console\Commands\Server;

use App\Mail\NotificationClient;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class BuildServer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'server:build {server}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '建立一个服务端连接';

    /**
     * 实例化对象
     *
     * @var object
     */
    protected $server = null;
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            //获取对象
            $this->server = '\\App\\Http\\Server\\'. $this->argument('server') . '\\InitServer';

            //启动服务
            $this->server::getInstance()->init();

        }catch (\Exception $e) {
            return 'Error Code By ' . $e->getFile() . '\n' . $e->getLine() . '\n' . $e->getMessage();
        }
    }
}
