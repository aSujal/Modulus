import { usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, } from 'react';
import Navigation from './Navigation';

export default function Authenticated({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-background">
            <Navigation></Navigation>
            <main className="sm:ml-64 pt-3">
                {children}
            </main>
        </div>
    );
}
