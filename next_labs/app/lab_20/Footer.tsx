export default function Footer() {
    return (
        <footer className="row border-top bg-dark text-light py-3">
            <div className="col d-flex justify-content-between align-items-center px-4">
                <div className="fw-semibold">
                    © 2026 My App
                </div>
                <div className="d-flex gap-3 small">
                    <span className="text-secondary">Privacy Policy</span>
                    <span className="text-secondary">Terms</span>
                    <span className="text-secondary">Support</span>
                </div>
            </div>
        </footer>
    );
}
