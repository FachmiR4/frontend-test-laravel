import React from "react";
import { Link, Head } from "@inertiajs/react";
import TableAnggota from "@/Components/anggota/TableAnggota";
import Notification from "@/Components/anggota/notification";
import Paginator from "@/Components/anggota/Paginator";
export default function Homepage(props) {
    return (
        <div>
            <Head title={props.title} />
            <Notification
                success={props.flash.success}
                error={props.flash.error}
            />
            <div
                className="flex justify-center items-center mb-4"
                style={{ marginTop: "10px" }}
            >
                <Link
                    method="get"
                    href={route("anggota.create")}
                    className="btn btn-sm btn-success"
                >
                    Tambah Anggota +
                </Link>
            </div>
            <TableAnggota anggota={props.datas} />
            {/* <div className="flex justify-center items-center">
                <Paginator meta={props.datas} />
            </div> */}
        </div>
    );
}
