import { usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, } from 'react';
import Sidebar from './Sidebar';

export default function Authenticated({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <div className="flex bg-background h-[100vh]">
            <Sidebar/>
            <main>
                {children}
            </main>
        </div>
    );
}
