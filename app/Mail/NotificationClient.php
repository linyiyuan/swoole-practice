<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotificationClient extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * 连接者IP
     * @var string
     */
    protected $connect_ip = '';

    /**
     * NotificationClient constructor.
     * @param $connectIp
     */
    public function __construct($connectIp)
    {
        $this->connect_ip = $connectIp;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.notificationClient')
                    ->with([
                        'connect_ip' => $this->connect_ip,
                    ]);
    }
}
