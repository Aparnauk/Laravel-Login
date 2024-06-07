
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";


export default function Index({auth, users}) {
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Users
        </h2>}
    >

        <Head title="Users" />

        <h1>hello</h1>

        </AuthenticatedLayout>
}
