import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

function CreateAnggotaForm() {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        email: "",
        no_hp: "",
        alamat: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/anggota", {
            onSuccess: () => {
                Inertia.visit("/anggota"); // Mengarahkan ke halaman lain setelah submit
            },
        });
    };

    return (
        <div>
            <h1>Create Anggota</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nama">Nama</label>
                    <input
                        type="text"
                        name="nama"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                    />
                    {errors.nama && <span>{errors.nama}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="no_hp">No Hp</label>
                    <input
                        type="text"
                        name="no_hp"
                        value={data.no_hp}
                        onChange={(e) => setData("no_hp", e.target.value)}
                    />
                    {errors.no_hp && <span>{errors.no_hp}</span>}
                </div>
                <div>
                    <label htmlFor="alamat">Alamat</label>
                    <input
                        type="text"
                        name="alamat"
                        value={data.alamat}
                        onChange={(e) => setData("alamat", e.target.value)}
                    />
                    {errors.alamat && <span>{errors.alamat}</span>}
                </div>
                <button type="submit" disabled={processing}>
                    {processing ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
