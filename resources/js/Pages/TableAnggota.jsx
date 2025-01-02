import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function TableAnggota(props) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                Daftar Anggota Perpustakaan
            </h1>
            <Link
                href="/anggota/create"
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Tambah Anggota
            </Link>
            {datas.length === 0 ? (
                <div className="text-center py-4">
                    <p className="text-gray-500">Tidak ada data</p>
                </div>
            ) : (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 ">
                            <th className="py-2 px-4 border-b">Nama</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">No. Hp</th>
                            <th className="py-2 px-4 border-b">Alamat</th>
                            <th className="py-2 px-4 border-b">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((member) => (
                            <tr
                                key={member.id}
                                className="hover:bg-gray-100 text-center"
                            >
                                <td className="py-2 px-4 border-b">
                                    {member.name}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {member.email}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {member.no_hp}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {member.alamat}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <Link
                                        href={`/anggota/${member.id}/create`}
                                        className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                    >
                                        Tambah Anggota
                                    </Link>
                                    <Link
                                        href={`/anggota/${member.id}/delete`}
                                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Tambah Anggota
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
