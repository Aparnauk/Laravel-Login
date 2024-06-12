import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";



export default function Create({ auth }) {

    const { data, setData, post, errors, reset } = useForm({
        name: '',
        user: '',
        description: ''
    });

    const onsubmit = (e) => {
        e.preventDefault();
        post(route("project.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={

                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create New Project
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
                                        htmlFor="project_user"
                                        value="User Name"
                                    />


                                    <select
                                        id="project_user"
                                        type="text"
                                        name="user"
                                        value={data.user}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData("user", e.target.value)}
                                    >




                                            <option value="" disabled>Select a user

                                            </option>

                                            <option value="user1">User 1</option>




                                    </select>



                                    <InputError
                                        message={errors.user}
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
