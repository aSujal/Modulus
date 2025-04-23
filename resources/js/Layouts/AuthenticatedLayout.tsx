import { usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, } from 'react';
import Navigation from './Navigation';

export default function Authenticated({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <div className="flex bg-background h-[100vh]">
            <Navigation/>
            <main>
                {children}
            </main>
        </div>
    );
}
