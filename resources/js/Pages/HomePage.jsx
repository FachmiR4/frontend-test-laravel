import React from "react";
import { Link, Head } from "@inertiajs/react";
import TableAnggota from "@/Components/anggota/TableAnggota";
import Paginator from "@/Components/anggota/Paginator";
export default function Homepage(props) {
    return (
        <div>
            <Head title={props.title} />
            <div
                className="flex justify-center items-center mb-4"
                style={{ marginTop: "10px" }}
            >
                <Link href="/anggota/create" className="btn btn-sm btn-success">
                    Tambah Anggota +
                </Link>
            </div>
            <TableAnggota anggota={props.datas.data} />
            {/* <div className="flex justify-center items-center">
                <Paginator meta={props.datas} />
            </div> */}
        </div>
    );
}
