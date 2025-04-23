<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrUpdateGroupRequest;
use App\Http\Resources\GroupResource;
use App\Models\Group;
use App\Models\GroupMember;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class GroupController extends Controller
{
    public function showUserGroup(int $id): InertiaResponse
    {
        $group = Group::with('group_members')->findOrFail($id);

        return Inertia::render('User/Groups/Edit', [
            'group' => GroupResource::make($group),
        ]);
    }

    public function updateGroup(int $id, CreateOrUpdateGroupRequest $request): RedirectResponse
    {
        $groupMember = GroupMember::findOrFail(Auth::user()->id);

        if ($groupMember->isAdminOrOwner()) {
            Group::findOrFail($id)->update([
                'name' => $request->validated()['name'],
            ]);

            return $this->backWith('success','Group Updated Successfully');
        }

        return $this->backWith('error','You are not Admin or Owner');
    }

    public function deleteGroup(int $id): RedirectResponse
    {
        $groupMember = GroupMember::findOrFail(Auth::user()->id);

        if ($groupMember->isAdmin()) {
            Group::destroy($id);

            return $this->redirectWith('success','Group deleted Successfully', 'user.groups');
        }

        return $this->redirectWith('error','You are not Admin or Owner', 'dashboard');
    }

    public function createGroup(CreateOrUpdateGroupRequest $request): RedirectResponse
    {
        $group = Group::create([
            'name' => $request->validated()['name']
        ]);

        $group->groupMembers()->attach(Auth::id(), ['role' => 'owner']);

        return $this->backWith('success','Group Created Successfully');
    }
}
