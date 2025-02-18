import NavLinkWithIcon from '@/Components/NavLinkWithIcon';
import { Link, usePage } from '@inertiajs/react';


export default function Navigation({
    active = false,
    className = '',
    ...props
}) {
    const user = usePage().props.auth.user;
    return (
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <div>
                            <a href={route('dashboard')} className="flex items-center ps-2.5 mb-5">
                                <i className="fa-solid fa-graduation-cap text-2xl text-green-300 mr-2"></i>
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Modulus</span>
                            </a>
                            <ul className="space-y-2 ">
                                <li>
                                    <NavLinkWithIcon href={route('dashboard')}  active={route().current('dashboard')} icon={<i className="fa-solid fa-chart-pie "></i>}>
                                        Dashboard
                                    </NavLinkWithIcon>
                                </li>
                                <li>
                                    <NavLinkWithIcon method='post' href={route('logout')} active={false} icon={<i className="fa-solid fa-right-from-bracket"></i>}>
                                        Sign Out
                                    </NavLinkWithIcon>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Settings and User Profile buttons --> */}
                        <div>
                            <ul className="space-y-2 ">
                                <li>
                                    <NavLinkWithIcon href='test.com' disabled active={false} icon={<i className="fa-solid fa-gear "></i>}>
                                        Settings
                                    </NavLinkWithIcon>
                                </li>
                                <li>
                                    <NavLinkWithIcon href={route('profile.edit')} active={route().current('profile.edit')} icon={<i className="fa-solid fa-user"></i>}>
                                        {user.full_name}

                                    </NavLinkWithIcon>
                                </li>
                                
                            </ul>
                        </div>
                </div>
            </aside>
    );
}
