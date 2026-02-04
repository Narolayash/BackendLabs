import Link from 'next/link';
import React, { Children } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Lab_20_Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row">
                <Sidebar />
                <main className="col p-4">
                    <div className="border rounded p-3 bg-white shadow-sm">
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Lab_20_Layout