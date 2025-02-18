import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="py-8">
                <div className="mx-auto max-w-8xl sm:px-4 lg:px-6">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg bg-muted">
                        <div className="p-6 text-foreground">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
