import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="row align-items-center border-bottom border-primary py-2 bg-light shadow-sm">
            <div className="col-2 fw-bold fs-5 text-primary">
                MyLogo
            </div>
            <div className="col d-flex gap-3">
                <Link className="nav-link fw-semibold" href="/lab_20/home">
                    Home
                </Link>
                <Link className="nav-link fw-semibold" href="/lab_20/contact">
                    Contact
                </Link>
                <Link className="nav-link fw-semibold" href="/lab_20/about">
                    About
                </Link>
            </div>
        </nav>
    );
}
