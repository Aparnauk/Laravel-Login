import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";



export default function Create({ auth, users, project }) {

    console.log(users);
    const { data, setData, put, errors, reset } = useForm({
        name: project.name || "",
        user_id: project.user_id || "",
        description: project.description || ""
    });

    const onsubmit = (e) => {
        e.preventDefault();
        put(route("project.update", project.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={

                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit Project
                    </h2>
                </div>

            }
        >
            <Head title="Projects" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-5">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">

                        <form onSubmit={onsubmit} className="p-4 sm:p-8 bg-light dark:bg-gray-800 shadow sm:rounded-lg">

                            <div>

                                {/* name */}
                                <div>
                                    <InputLabel
                                        htmlFor="project_name"
                                        value="Project Name"
                                    />

                                    <TextInput
                                        id="project_name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                {/* user */}
                                <div>
                                    <InputLabel
                                        htmlFor="project_user_id"
                                        value="User Name"
                                    />

                                    <select
                                        id="project_user_id"
                                        type="text"
                                        name="user_id"
                                        value={data.user_id}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData("user_id", e.target.value)}
                                    >

                                        {users.map(user => (

                                            <option value={user.id}>
                                                {user.name}
                                                </option>

                                         ))}


                                    </select>

                                    <InputError
                                        message={errors.user_id}
                                        className="mt-2"
                                    />
                                </div>

                                {/* description */}
                                <div>
                                    <InputLabel
                                        htmlFor="project_description"
                                        value="Project Description"
                                    />

                                    <TextAreaInput
                                        id="project_description"
                                        // type="text"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        // isFocused={true}
                                        onChange={(e) => setData("description", e.target.value)}
                                    />

                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4 text-right">
                                    <Link
                                        href={route('project.index')}
                                        className="bg-dark text-white rounded p-2"
                                    >
                                        Cancel
                                    </Link>

                                    <button className="bg-success rounded p-2 ms-3 text-white ">Submit</button >
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
