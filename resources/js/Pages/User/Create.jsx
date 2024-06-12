import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";


export default function Create({auth}){

    const {data, setData, post, errors, reset} = useForm({
        name:'',
        phone_number:'',
        password:'',
        email:''
    })

    const onsubmit = (e) => {
        e.preventDefault();

        post(route("user.store"));
    };

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={

        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Create New User
            </h2>
        </div>

        }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <form
                            onSubmit={onsubmit}
                            className="p-4 sm:p-8 bg-light dark:bg-gray-800 shadow sm:rounded-lg">

                                {/* name */}
                                <div>
                                    <InputLabel
                                    htmlFor="user_name"
                                    value="User Name"
                                    />

                                    <TextInput
                                    id="user_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("name",e.target.value)}
                                    />

                                    <InputError
                                    message={errors.name}
                                    className="mt-2"
                                    />
                                </div>

                                {/* phone number */}
                                <div>
                                    <InputLabel
                                    htmlFor="user_phone_number"
                                    value="Phone Number"
                                    />

                                    <TextInput
                                    id="user_phone_number"
                                    type="tel"
                                    name="phone_number"
                                    value={data.phone_number}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("phone_number", e.target.value)}
                                    />

                                    <InputError
                                    message={errors.phone_number}
                                    className="mt-2"
                                    />
                                </div>

                                {/* password */}
                                <div>
                                    <InputLabel
                                    htmlFor="user_password"
                                    value="Password "
                                    />

                                    <TextInput
                                    id="user_password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("password", e.target.value)}
                                    />

                                    <InputError
                                    message={errors.password}
                                    className="mt-2"
                                    />
                                </div>

                                {/* confirm password */}
                                <div>
                                    <InputLabel
                                    htmlFor="user_confirm_password"
                                    value="Confirm Password"
                                    />

                                    <TextInput
                                    id="user_confirm_password"
                                    type="password"
                                    name="Confirm_password"
                                    value={data.confirm_password}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("confirm_password", e.target.value)}
                                    />

                                    <InputError
                                    message={errors.confirm_password}
                                    className="mt-2"
                                    />
                                </div>

                                {/* email */}
                                <div>
                                    <InputLabel
                                    htmlFor="user_email"
                                    value="Email"
                                    />

                                    <TextInput
                                    id="user_email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("email",e.target.value)}
                                    />

                                    <InputError
                                    message={errors.email}
                                    className="mt-2"
                                    />
                                </div>

                                <div className="mt-4 text-right">
                                    <Link
                                    href={route('user.index')}
                                    className="bg-dark text-white rounded p-2"
                                    >
                                        Cancel
                                    </Link>

                                    <button className="bg-success rounded p-2 ms-3 text-white ">Submit</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
