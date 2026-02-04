import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="col-2 border-end border-primary bg-light min-vh-100 p-3">
            <h5 className="mb-4 text-primary">Dashboard</h5>
            <ul className="nav flex-column gap-2">
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-semibold" href="/lab_20/home">
                        🏠 Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-semibold" href="/lab_20/contact">
                        📞 Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-semibold" href="/lab_20/about">
                        ℹ️ About
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
