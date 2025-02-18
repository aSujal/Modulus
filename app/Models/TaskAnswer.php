<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaskAnswer extends Model
{
    //^
    public function User() {
        return $this->belongsTo(User::class);
    }
    public function Task(){
        return $this->belongsTo(Task::class);
    }
}
