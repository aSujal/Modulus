<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //
    public function Group(){
        return $this->belongsTo(Group::class);
    }
    public function TaskAnswers(){
        return $this->hasMany(TaskAnswer::class);
    }
}
