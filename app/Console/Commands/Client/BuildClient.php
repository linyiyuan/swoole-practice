<?php

namespace App\Console\Commands\Client;

use Illuminate\Console\Command;

class BuildClient extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client:build {client}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '建立一个客户端连接';

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
            $client = '\\App\\Http\\Services\\Client\\'. $this->argument('client') . 'Client';

            $client::getInstance()->init();
        }catch (\Exception $e) {
            return 'Error Code By ' . $e->getFile() . '\n' . $e->getLine() . '\n' . $e->getMessage();
        }
    }
}
