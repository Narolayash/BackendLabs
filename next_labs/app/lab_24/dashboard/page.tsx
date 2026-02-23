import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashboardPage() {
    // const cookieStore = cookies();
    // const token = cookieStore.get("token");

    // If no token → redirect to login
    // if (!token) {
    //     redirect("/login");
    // }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1>Welcome to Dashboard 🎉</h1>
                <p>You are logged in successfully.</p>
                {/* <p><strong>Token:</strong> {token.value}</p> */}

                <form action="/lab_24/" method="POST">
                    <button style={styles.button}>Logout</button>
                </form>
            </div>
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
    card: {
        padding: "40px",
        background: "white",
        borderRadius: "12px",
        textAlign: "center",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        background: "black",
        color: "white",
        cursor: "pointer",
    },
};