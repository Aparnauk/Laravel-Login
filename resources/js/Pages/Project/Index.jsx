import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, projects }) {

    // delete
    const deleteProject = (project, e) => {
        e.preventDefault();
        if (!window.confirm('Are you sure you want to delete the Project?')) {
            return;
        }
        router.delete(route('project.destroy', project.id))
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={

                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Projects
                    </h2>

                    <Link
                        href={route("project.create")}
                        className="text-white bg-success p-3 rounded"
                    ><i class="fa-solid fa-plus fa-beat-fade"></i> Add New</Link>
                </div>

            }
        >

            <Head title="Projects" />

            <div className="py-12" >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                        <form className='bg-black'>

                            <table>
                                <thead className='text-white'>
                                    <tr >
                                        <th className="px-5 py-3 ">
                                            ID
                                        </th>

                                        <th className="px-5 py-3 ">
                                            Name
                                        </th>

                                        <th className="px-5 py-3 ">
                                            User Details
                                        </th>

                                        <th className="px-5 py-3 ">
                                            Description
                                        </th>
                                        <th className="px-5 py-3 ">

                                        </th>

                                        <th className="px-5 py-3 ">

                                        </th>
                                    </tr>
                                </thead>


                                <tbody className="px-5 py-3 text-white">

                                    {projects.data.map(project => (

                                        <tr className="text-align-center ms-5">
                                            <th scope="row">{project.id}</th>
                                            <td>{project.name}</td>
                                            <td>{project.user_id}</td>
                                            <td>{project.description}</td>
                                            <td>
                                                <Link href={route("project.edit", project.id)}>
                                                    <i className="fa-solid fa-pen-to-square  text-warning"></i>
                                                </Link>
                                            </td>
                                            <td>
                                                <button onClick={(e) => deleteProject(project, e)}
                                                >
                                                    <i class="fa-solid fa-trash-can  text-danger"></i>
                                                </button>
                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </form>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

