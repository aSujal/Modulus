import NavLinkWithIcon from '@/Components/NavLinkWithIcon';
import { Cog, User, Home, LogOut } from 'lucide-react';
import { usePage } from '@inertiajs/react';

export default function Navigation({
    active = false,
    className = '',
    ...props
}) {
    const user = usePage().props.auth.user;
    return (
        <aside id="logo-sidebar" className="top-0 left-0 z-40 fixed w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="flex flex-col justify-between bg-background px-3 py-4 h-full overflow-y-auto">
                <div>
                    <a href={route('dashboard')} className="flex items-center mb-5 ps-2.5">
                        <i className="mr-2 text-primary text-2xl fa-solid fa-graduation-cap"></i>
                        <span className="self-center font-semibold text-foreground text-xl whitespace-nowrap">Modulus</span>
                    </a>
                    <ul className="space-y-2">
                        <li>
                            <NavLinkWithIcon href={route('dashboard')} active={route().current('dashboard')} icon={<Home />}>
                                Home
                            </NavLinkWithIcon>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-2">
                        <li>
                            <NavLinkWithIcon href={route('profile.edit')} active={route().current('profile.edit')} icon={<User />}>
                                {user.full_name}
                            </NavLinkWithIcon>
                        </li>
                        <li>
                            <NavLinkWithIcon method='post' href={route('logout')} active={false} icon={<LogOut />}>
                                Sign Out
                            </NavLinkWithIcon>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

