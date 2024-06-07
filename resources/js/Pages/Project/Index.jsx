import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";


export default function Index(auth, projects) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Projects
            </h2>}
        >

            <Head title="Projects" />

            <div className="py-12" >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                        <form className='bg-black  '>


                            {/* {projects.data ?(
                            projects.data.map((project) => (

                                <div>
                                    <div>
                                    <label htmlFor="" className='m-5 text-white'>ID :</label>
                                    <input type="text" onChange={project.id}/>
                                </div>

                                <div>
                                    <label htmlFor="" className='m-5 text-white'>Project Name :</label>

                                    <input onChange={project.name} type="text" />
                                </div>

                                <div>
                                    <label htmlFor="" className='m-5 text-white'>Users Details :</label>

                                    <select name="" id="">
                                        <option value="">{project.user}</option>
                                    </select>
                                </div>


                                <div>
                                    <label htmlFor="" className='m-5 text-white'>Description :</label>
                                    <input type="text" className="p-5" onChange={project.description}/>
                                </div>
                                </div>)

                            )): (<p>Loading</p>)} */}



                            <div className="text-center m-5">
                                <button className="btn btn-success p-2 w-50">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

