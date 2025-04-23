import NavLinkWithIcon from "@/Components/NavLinkWithIcon";
import { Cog, User, Home, LogOut } from "lucide-react";
import { usePage } from "@inertiajs/react";
import GroupSwitcher from "@/Components/GroupSwitcher";
import SidebarButton from "@/Components/layout/SidebarItem";

export default function Navigation({
    active = false,
    className = "",
    ...props
}) {
    const user = usePage().props.auth.user;
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
            <SidebarButton
                icon={<Home />}
                label="Home"
                onClick={() => route("dashboard")}
                isActive={route().current("dashboard")}
            />
            <div>
                <ul className="space-y-2">
                    <li>
                        <NavLinkWithIcon
                            href={route("profile.edit")}
                            active={route().current("profile.edit")}
                            icon={<User />}
                        >
                            {user.full_name}
                        </NavLinkWithIcon>
                    </li>
                    <li>
                        <NavLinkWithIcon
                            method="post"
                            href={route("logout")}
                            active={false}
                            icon={<LogOut />}
                        >
                            Sign Out
                        </NavLinkWithIcon>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
