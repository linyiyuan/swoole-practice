##  如何部署
### 2.1 开发说明
- 开发框架：`Laravel 5.6` 
- PHP版本：`PHP 7.3` 
- 扩展：`Redis`、`Swoole` 

### 2.2 安装
#### 2.2.1 基本要求
- 服务器要求：
	- PHP >= 7.1.3
	  NPM >= 3.5.0
	- OpenSSL PHP扩展
	- PDO PHP扩展，注意需要php_mysql
	- Mbstring PHP扩展
	- Tokenizer PHP扩展
	- XML PHP扩展
	- Swoole PHP扩展
	- Redis PHP扩展

<br>

#### 2.2.2 安装步骤
以下为本项目git仓库地址

	https://github.com/linyiyuan/swoole-practice.git
	
<br>
**第1步：克隆代码**

	git clone https://github.com/linyiyuan/swoole-practice.git
<br>
**第2步：安装composer包**
	
	composer install
	
<br>
**第3步：配置文件**

1、在项目中找到`.env.example`文件，该文件作为项目的全局配置文件，在部署时需要复制成`.env`，执行以下命令

	cp -f .env.example ./.env
2、根据.env文件修改各配置项，如果.env文件中没有存在key值则运行命令：

	  php artisan key:generate

3、配置stroage bootstrap 可写

	 chmod -R 777 stroage bootstrap

<br>

**第4步：初始化数据库**

在根路径上执行以下命令来实现初始化数据库结构。注意执行该命令前请检查项目是否已依赖`doctrine/dbal`

	php artisan migrate

运行数据迁移，初始化数据，生成默认用户以及相关角色权限

	 php artisan db:seed

至此基本以完成，可以在浏览器中访问域名，如出现`larvel`字符串页面则说明部署完成，后续请根据各需求点作测试

<br>