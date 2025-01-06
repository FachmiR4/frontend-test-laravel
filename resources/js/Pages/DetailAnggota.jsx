import { Link, Head } from "@inertiajs/react";
export default function DetailAnggota(props) {
    console.log(props.data.name);
    return (
        <div>
            <Head title={props.title} />
            <div className="container mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white-800">
                        Detail Data Anggota
                    </h1>
                    <p className="text-gray-600">
                        Informasi lengkap mengenai data Anggota
                    </p>
                </div>
                <div
                    className=" flex justify-start items-center mb-4"
                    style={{ marginTop: "10px" }}
                >
                    <Link
                        method="get"
                        href={route("anggota.list")}
                        className="btn btn-error"
                    >
                        Back
                    </Link>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                    <div className="flex items-center space-x-6 mb-4">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {props.data.name}
                            </h2>
                            <p className="text-gray-600">
                                id : {props.data.id}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">
                                Nama Lengkap
                            </h3>
                            <p className="text-gray-600">{props.data.name}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">
                                Alamat
                            </h3>
                            <p className="text-gray-600">{props.data.alamat}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">
                                Email
                            </h3>
                            <p className="text-gray-600">{props.data.email}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">
                                Nomor Telepon
                            </h3>
                            <p className="text-gray-600">{props.data.no_hp}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link
                            method="get"
                            href={route("anggota.edit", props.data.id)}
                            className="btn px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Edit Data Pribadi
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
