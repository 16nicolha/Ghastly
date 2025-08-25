import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <h2 style={styles.logo}>Ghastly</h2>
                <div style={styles.links}>
                    <Link to="/Home" style={styles.link}>Home</Link>
                    <Link to="/Login" style={styles.link}>Login</Link>
                </div>
            </nav>

            {/* Greeting */}
            <header style={styles.header}>
                <h1>Welcome to Ghastly</h1>
            </header>

            {/* Dropdown Menu */}
            <div style={styles.dropdownContainer}>
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={styles.dropdownButton}
                >
                    Choose your preference ▼
                </button>
                {dropdownOpen && (
                    <ul style={styles.dropdownMenu}>
                        <li style={styles.dropdownItem}>Scary, but not too brutal</li>
                        <li style={styles.dropdownItem}>I can handle more</li>
                        <li style={styles.dropdownItem}>I want to be traumatized</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

// Inline styles for simplicity
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
        width: "200px",
        border: "1px solid #ccc"
    },
    dropdownItem: {
        padding: "10px",
        borderBottom: "1px solid #ccc",
        cursor: "pointer"
    }
};
