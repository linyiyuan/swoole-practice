<?php

namespace App\Console\Commands\Server;

use Illuminate\Console\Command;

class TcpServer extends Command
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
    protected $description = '建立一个TCP连接';

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
            $server = '\\App\\Http\\Services\\Server\\'. $this->argument('server') . 'Server';

            $server::getInstance()->init();
        }catch (\Exception $e) {
            return 'Error Code By ' . $e->getFile() . '\n' . $e->getLine() . '\n' . $e->getMessage();
        }
    }
}
