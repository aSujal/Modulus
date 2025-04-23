import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="py-8">
                <div className="bg-muted mx-auto sm:px-4 lg:px-6">
                    hlelo
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
