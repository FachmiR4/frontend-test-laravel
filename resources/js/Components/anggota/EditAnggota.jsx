import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

function EditAnggota({ member }) {
    // State untuk menyimpan data anggota
    const [formData, setFormData] = useState({
        name: member.name || "",
        email: member.email || "",
        no_hp: member.no_hp || "",
        alamat: member.alamat || "",
    });

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Mengirimkan data menggunakan Inertia
        Inertia.put(`/anggota/${id}`, formData, {
            onSuccess: () => {
                Inertia.visit(`/anggota`);
            },
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
            <h2 className="text-xl font-semibold mb-4">Edit Anggota</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Nama</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">
                        Nomor Hp
                    </label>
                    <input
                        type="text"
                        name="no_hp"
                        value={formData.no_hp}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Alamat</label>
                    <input
                        type="text"
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Update Anggota
                </button>
            </form>
        </div>
    );
}

export default EditAnggota;
