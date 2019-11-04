##  服务器列表
### 1.1 命令指南
  - 构建Tcp服务器 php artisan server:build Tcp
  - 构建Ucp服务器 php artisan server:build Udp
  - 构建Http服务器 php artisan server:build Http
  - 构建Websocket服务器 php artisan server:build Websocket

### 2.2 命令运行
 该命令工具主要利用了laravel提供的 artisan 命令行工具，其主执行命令文件位于app/Console/Commands/Server/BuildServer.php
 
 ```php
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
 ```
 
 如果我们要新建一个服务器，首先我们得到Server文件夹中建立一个新的文件夹，该文件夹作为你服务器的名称，例如Tcp，然后在该文件夹下新建
 一个InitServer服务类，在这个服务类里面我们需继承BaseServer，在该服务类里面我们可以初始化服务器的配置以及开启服务器以及事件的注册
 

