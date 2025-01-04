import { Link } from "@inertiajs/react";

const isAnggota = (datas) => {
    return datas.map((data, i) => {
        if (datas.length === 0) {
            return (
                <tr>
                    <td colSpan="6" className="text-center">
                        Tidak ada data
                    </td>
                </tr>
            );
        }
        return (
            <tr key={i}>
                <th>{i + 1}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.no_hp}</td>
                <td>{data.alamat}</td>
                <td>
                    <Link
                        href={`/anggota/${data.id}/edit`}
                        className="btn btn-sm btn-primary"
                    >
                        Edit
                    </Link>
                    <Link
                        href={`/anggota/${data.id}/delete`}
                        className="btn btn-sm btn-danger ml-2"
                    >
                        Delete
                    </Link>
                </td>
            </tr>
        );
    });
};

const TableAnggota = ({ anggota }) => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>No Hp</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{isAnggota(anggota)}</tbody>
            </table>
        </div>
    );
};

export default TableAnggota;
