import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="relative flex min-h-screen overflow-hidden items-center justify-center bg-gray-100 dark:bg-black/30">
            {/* Background Circle */}
            <div className="absolute z-0 sm:left-0 sm:translate-x-[-50%] sm:w-[65%] sm:h-[110%]  bg-[#009951] rounded-full"></div>
            <div className="absolute z-0 sm:left-0 sm:translate-x-[-50%] sm:w-[25%] sm:h-[45%]  bg-[#2DB484] rounded-full"></div>

            {/* Content Container */}
            <div className='relative z-10  flex flex-col items-center justify-center gap-3 px-4 sm:px-0'>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
                <div className="sm:min-w-[400px] px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg bg-white dark:bg-gray-900">
                    {children}
                </div>
            </div>
        </div>
    );
}
