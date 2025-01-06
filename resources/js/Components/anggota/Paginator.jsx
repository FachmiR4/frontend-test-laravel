import { Link } from "@inertiajs/react";
const Paginator = ({ meta }) => {
    return (
        <div className="join">
            <Link href="?page={{ $page-1 }}" className="join-item btn">
                «
            </Link>
            <Link className="join-item btn">Page 22</Link>
            <Link className="join-item btn">»</Link>
        </div>
    );
};

export default Paginator;
