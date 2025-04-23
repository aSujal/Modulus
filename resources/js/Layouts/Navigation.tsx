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
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-background">
                <div>
                    <a href={route('dashboard')} className="flex items-center ps-2.5 mb-5">
                        <i className="fa-solid fa-graduation-cap text-2xl text-primary mr-2"></i>
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-foreground">Modulus</span>
                    </a>
                    <ul className="space-y-2 ">
                        <li>
                            <NavLinkWithIcon href={route('dashboard')} active={route().current('dashboard')} icon={<Home />}>
                                Dashboard
                            </NavLinkWithIcon>
                        </li>
                        <li>
                            <NavLinkWithIcon method='post' href={route('logout')} active={false} icon={<LogOut />}>
                                Sign Out
                            </NavLinkWithIcon>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-2">
                        <li>
                            <NavLinkWithIcon href='test.com' disabled active={false} icon={<Cog />}>
                                Settings
                            </NavLinkWithIcon>
                        </li>
                        <li>
                            <NavLinkWithIcon href={route('profile.edit')} active={route().current('profile.edit')} icon={<User />}>
                                {user.name}
                            </NavLinkWithIcon>
                        </li>

                    </ul>
                </div>
            </div>
        </aside>
    );
}

