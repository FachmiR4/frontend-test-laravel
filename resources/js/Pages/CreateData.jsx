import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Notification from "@/Components/anggota/Notification";

export default function CreaateData(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [no_hp, setNoHp] = useState("");
    const [alamat, setAlamat] = useState("");
    const handleSubmit = () => {
        const data = {
            name,
            email,
            no_hp,
            alamat,
        };
        router.post(route("anggota.store"), data);
    };
    return (
        <div>
            <Head title={props.title} />
            <Notification
                success={props.flash.success}
                error={props.flash.error}
            />
            <div className="py-12">
                <div
                    className="m-14 flex justify-start items-center mb-4"
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
                <div className="max-w-7xl mx-auto sm:px lg:px-8">
                    <div className="p-6">
                        <label htmlFor="" className="m-2">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Type here your : Name"
                            className="m-2 input input-bordered w-full"
                            onChange={(name) => setName(name.target.value)}
                        />
                        <label htmlFor="" className="m-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Type here your : Email"
                            className="m-2 input input-bordered w-full"
                            onChange={(email) => setEmail(email.target.value)}
                        />
                        <label htmlFor="" className="m-2">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            placeholder="Type here your : Phone Number"
                            className="m-2 input input-bordered w-full"
                            onChange={(no_hp) => setNoHp(no_hp.target.value)}
                        />
                        <label htmlFor="" className="m-2">
                            Address
                        </label>
                        <textarea
                            className="m-2 textarea textarea-bordered textarea-lg w-full"
                            placeholder="Type here your : Address"
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
