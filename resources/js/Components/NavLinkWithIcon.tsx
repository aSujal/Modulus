import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLinkWithIcon({
    active = false,
    className = '',
    children,
    icon,
    ...props
}: InertiaLinkProps & { active: boolean,icon: React.ReactNode }) {
    return (
        <Link
            {...props}
            className={
                'flex items-center w-full p-2 rounded-lg group ' +
                (active
                    ? 'bg-green-100 text-gray-950 dark:bg-gray-700 dark:text-white '
                    : 'text-gray-900  dark:text-white hover:bg-green-100 hover:text-gray-950 dark:hover:bg-gray-700 dark:hover:text-white ') +
                className
            }
        >
            <div className="flex items-center justify-center shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400  dark:group-hover:text-white">
                    {icon}
            </div>
            <span className="ms-3">
                {children}
            </span>
            
        </Link>
    );
}
