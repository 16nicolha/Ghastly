import React from "react";
import {Link} from "react-router-dom";

    function Login() {
    return (
        <div>
            <nav style={styles.navbar}>
                <h2 style={styles.logo}>Ghastly</h2>
                <div style={styles.links}>
                    <Link to="/Home" style={styles.link}>Home</Link>
                    <Link to="/Login" style={styles.link}>Login</Link>
                </div>
            </nav>
            <div>
                <h2>Login Page</h2>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#222",
        color: "white"
    },
    logo: { margin: 0 },
    links: { display: "flex", gap: "15px" },
    link: { color: "white", textDecoration: "none" },
    header: { textAlign: "center", marginTop: "50px" },
    dropdownContainer: { textAlign: "center", marginTop: "30px" },
    dropdownButton: {
        padding: "10px 20px",
        background: "#444",
        color: "white",
        border: "none",
        cursor: "pointer"
    },
    dropdownMenu: {
        listStyle: "none",
        padding: 0,
        margin: "10px auto",
        background: "#eee",
        width: "250px",
        border: "1px solid #ccc"
    },
    dropdownItem: {
        padding: "10px",
        borderBottom: "1px solid #ccc",
        cursor: "pointer"
    },
    cardsContainer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "30px"
    },
    card: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        width: "200px",
        textAlign: "center"
    }
};

export default Login;
