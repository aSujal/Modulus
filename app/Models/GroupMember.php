<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GroupMember extends Model
{
    //
    public function User(){
        return $this->belongsTo(User::class);
    }
    public function Role(){
        return $this->belongsTo(Role::class);
    }
    public function Group() {
        return $this->belongsTo(Group::class);
    }
}
