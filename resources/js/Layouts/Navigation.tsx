import NavLinkWithIcon from "@/Components/NavLinkWithIcon";
import { Cog, User, Home, LogOut } from "lucide-react";
import { usePage } from "@inertiajs/react";
import GroupSwitcher from "@/Components/GroupSwitcher";
import SidebarButton from "@/Components/layout/SidebarItem";
import { Group } from "@/types";

export default function Navigation({
    active = false,
    className = "",
    ...props
}) {
    const user = usePage().props.auth.user;
    const groups = usePage().props.groups as Group[];
    return (
        <aside
            id="logo-sidebar"
            className="flex flex-col items-center gap-4 bg-[#101014] pt-[9px] pb-4 w-[70px] h-full"
            aria-label="Sidebar"
        >
   
            <div>
                <a
                    href={route("dashboard")}
                    className="flex items-center mb-5 ps-2.5"
                >
                    <i className="mr-2 text-primary text-2xl fa-solid fa-graduation-cap"></i>
                </a>
            </div>
            <GroupSwitcher groups={groups} />
            <SidebarButton
                icon={Home} 
                label="Home"
                onClick={() => route("dashboard")}
                isActive={route().current("dashboard")}
            />

         
            <div className="mt-auto w-full ">
                <SidebarButton
                    className="dark:bg-slate-700 bg-slate-200"
                    onClick={() => route("profile.edit")}
                    isActive={route().current("profile.edit")}>
                    {user?.full_name?.charAt(0)}
                </SidebarButton>
                <SidebarButton
                    icon={LogOut}
                    onClick={() => route("logout")}
                    isActive={false}
                />
            </div>
        </aside>
    );
}