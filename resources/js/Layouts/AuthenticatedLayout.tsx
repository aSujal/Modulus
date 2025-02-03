import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { solid, regular, light, thin, duotone, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import Navigation from './Navigation';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
        library.add(faHouse); 

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* @include('layouts.navigation') */}
            <Navigation></Navigation>
            {/* <!-- Page Heading -->
            <!-- @isset($header)
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {{ $header }}
                    </div>
                </header>
            @endisset --> */}

            {/* <!-- Page Content --> */}
            <main className="sm:ml-64 pt-3">
                {children}
            </main>
        </div>
    );
}
