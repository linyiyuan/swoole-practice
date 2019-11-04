<?php

namespace App\Http\Controllers\Api;

use App\Mail\NotificationClient;
use Illuminate\Support\Facades\Mail;

class TestController extends CommonController
{
    public function test()
    {
        Mail::to('linyiyuann@gmail.com')->send(new NotificationClient(123));

    }
}
