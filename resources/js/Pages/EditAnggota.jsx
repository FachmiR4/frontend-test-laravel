import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function CreaateData(props) {
    const [name, setName] = useState(props.data.name);
    const [email, setEmail] = useState(props.data.email);
    const [no_hp, setNoHp] = useState(props.data.no_hp);
    const [alamat, setAlamat] = useState(props.data.alamat);
    const handleSubmit = () => {
        const data = {
            name: name,
            email: email,
            no_hp: no_hp,
            alamat: alamat,
        };
        router.post(route("anggota.update", props.id), data);
    };
    return (
        <div>
            <Head title={props.title} />

            <div className="py-12">
                <div
                    className="m-14 flex justify-start items-center mb-4"
                    style={{ marginTop: "10px" }}
                >
                    <Link
                        method="get"
                        href={route("anggota.show", props.id)}
                        className="btn btn-error"
                    >
                        Back
                    </Link>
                </div>
                <div className="max-w-7xl mx-auto sm:px lg:px-8">
                    <div className="p-6">
                        <label htmlFor="" className="m-2">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder={props.data.name}
                            value={name}
                            className="m-2 input input-bordered w-full"
                            onChange={(name) => setName(name.target.value)}
                        />
                        <label htmlFor="" className="m-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder={props.data.email}
                            value={email}
                            className="m-2 input input-bordered w-full"
                            onChange={(email) => setEmail(email.target.value)}
                        />
                        <label htmlFor="" className="m-2">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            placeholder={props.data.no_hp}
                            value={no_hp}
                            className="m-2 input input-bordered w-full"
                            onChange={(no_hp) => setNoHp(no_hp.target.value)}
                        />
                        <label htmlFor="" className="m-2">
                            Address
                        </label>
                        <textarea
                            className="m-2 textarea textarea-bordered textarea-lg w-full"
                            placeholder={props.data.alamat}
                            value={alamat}
                            onChange={(alamat) =>
                                setAlamat(alamat.target.value)
                            }
                        ></textarea>
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
