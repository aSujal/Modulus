<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    //^
    public function User(){
        return $this->belongsTo(User::class);
    }
    public function GroupMembers(){
        return $this->hasMany(GroupMember::class);
    }
}
