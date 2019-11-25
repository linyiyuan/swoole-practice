Swoole\Runtime::enableCoroutine();

go(function () 
{
    sleep(1);
    echo "b";
});

go(function () 
{
    sleep(2);
    echo "c";
});
