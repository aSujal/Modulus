import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLinkWithIcon({
    active = false,
    className = '',
    children,
    icon,
    ...props
}: InertiaLinkProps & { active: boolean, icon: React.ReactNode }) {
    return (
        <Link
            {...props}
            className={
                'flex items-center w-full p-2 gap-2 rounded-lg group transition duration-75 ease-in-out text-foreground ' +
                (active ? 'bg-primary/20 hover:bg-primary/30' : 'hover:bg-primary/10') +
                className
            }
        >
            <div className={`flex items-center justify-center shrink-0 w-5 h-5 transition duration-75 text-foreground/80 dark:group-hover:text-foreground`}>
                {icon}
            </div>
            <span className={`text-foreground`}>
                {children}
            </span>
        </Link>
    );
}
