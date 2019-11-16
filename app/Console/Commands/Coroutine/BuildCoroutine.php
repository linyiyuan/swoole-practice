<?php

namespace App\Console\Commands\Coroutine;

use Illuminate\Console\Command;

class BuildCoroutine extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'coroutine:build {coroutine}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '建立一个协程';

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
            $this->server = '\\App\\Http\\Coroutine\\'. $this->argument('coroutine') . '\\InitServer';

            //启动服务
            $this->server::getInstance()->init();

        }catch (\Exception $e) {
            return 'Error Code By ' . $e->getFile() . '\n' . $e->getLine() . '\n' . $e->getMessage();
        }
    }
}
