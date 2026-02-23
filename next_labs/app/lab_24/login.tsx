"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (email === 'admin@gmail.com' && password === 'admin@123') {
            const expiryTime = Date.now() + 60 * 60 * 1000; // 1 hour

            const tokenData = {
                value: "this_is_my_token",
                expiry: expiryTime,
            };

            document.cookie = `token=${JSON.stringify(tokenData)}; path=/`;
        }
    }

    return (
        <div style={styles.container}>
            <form onSubmit={handleLogin} style={styles.form}>
                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />

                <button type="submit" style={styles.button}>Login
                </button>
            </form>
        </div>
    );
}

const styles: any = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        background: "white",
        borderRadius: "10px",
        width: "300px",
        gap: "10px",
    },
    input: {
        padding: "10px",
        fontSize: "14px",
    },
    button: {
        padding: "10px",
        background: "black",
        color: "white",
        cursor: "pointer",
    },
}; 