import React from "react";

function DetailAnggota({ member }) {
    return (
        <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
            <h2 className="text-xl font-semibold mb-4">Detail Anggota</h2>
            <table className="min-w-full bg-white shadow-md rounded">
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border font-semibold">Nama</td>
                        <td className="py-2 px-4 border">{member.name}</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border font-semibold">
                            Email
                        </td>
                        <td className="py-2 px-4 border">{member.email}</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border font-semibold">
                            Nomor HP
                        </td>
                        <td className="py-2 px-4 border">{member.no_hp}</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border font-semibold">
                            Alamat
                        </td>
                        <td className="py-2 px-4 border">{member.alamat}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DetailAnggota;
