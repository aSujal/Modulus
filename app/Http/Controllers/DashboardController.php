<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupResource;
use App\Models\Group;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $groups = Group::whereBelongsTo(Auth::id())->get();

        return Inertia::render('Dashboard/Index', [
            'groups' => GroupResource::collection($groups)->jsonSerialize(),
        ]);
    }
}
