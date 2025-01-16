import { Link } from "@inertiajs/react";
const handleButton = (id) => {
    return (
        <div>
            <Link
                method="get"
                href={route("anggota.show", id)}
                className="btn btn-sm btn-primary"
            >
                Show
            </Link>
            <button
                className="btn btn-sm btn-danger ml-2"
                onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                }
            >
                Delete
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete!</h3>
                    <p className="py-4">Are you sure delete data?!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                method="post"
                                href={route("anggota.delete", id)}
                                className="btn btn-sm btn-danger ml-2"
                            >
                                Delete
                            </Link>
                            <button className="btn btn-sm btn-danger ml-2">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

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
                <td>
                    {data.alamat.length > 30
                        ? `${data.alamat.substring(0, 30)}...`
                        : data.alamat}
                </td>
                <td>{handleButton(data.id)}</td>
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
