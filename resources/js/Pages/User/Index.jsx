import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";


export default function Index({ auth, users }) {

    // delete
    const deleteUser = (user) => {
        if (!window.confirm('Are you sure you want to delete the user?')) {
            return;
        }
        router.delete(route('user.destroy', user.id))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={

                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Users
                    </h2>

                    <Link
                        href={route("user.create")}
                        className="text-white bg-success p-3 rounded"
                    ><i class="fa-solid fa-plus fa-beat-fade"></i> Add New</Link>
                </div>

            }
        >

            <Head title="Users" />

            <div className="table table-dark table-striped">
                <table>
                    <thead >
                        <tr >
                            <th className="px-5 py-3 ">
                                ID
                            </th>

                            <th className="px-5 py-3 ">
                                Name
                            </th>

                            <th className="px-5 py-3 ">
                                Phone Number
                            </th>

                            <th className="px-5 py-3 ">
                                Email
                            </th>
                            <th className="px-5 py-3 ">

                            </th>

                            <th className="px-5 py-3 ">

                            </th>
                        </tr>
                    </thead>

                    <tbody className="px-5 py-3 ">
                        {users.data.map(user => (
                            <tr >
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link href={route("user.edit", user.id)}>
                                        <i className="fa-solid fa-pen-to-square  text-warning"></i>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={e => deleteUser(user)}>
                                        <i class="fa-solid fa-trash-can  text-danger"></i>
                                    </button>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout>
    )
}
