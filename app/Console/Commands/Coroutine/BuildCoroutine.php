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
    protected $description = '建立一个协程例子';

    /**
     * 对象
     * @var object
     */
    protected $obj = null;

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
            $this->obj = '\\App\\Http\\Coroutine\\Example\\'. $this->argument('coroutine') . 'Coroutine';

            //启动服务
            $this->obj::getInstance()->init();

        }catch (\Exception $e) {
            return 'Error Code By ' . $e->getFile() . '\n' . $e->getLine() . '\n' . $e->getMessage();
        }
    }
}
