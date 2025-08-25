import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [recommendations, setRecommendations] = useState([]);

    const handleChoice = async (tier) => {
        try {
            const res = await fetch(`http://localhost:5000/recommendations?tier=${tier}`);
            const data = await res.json();
            setRecommendations(data);
            setDropdownOpen(false);
        } catch (err) {
            console.error("Error fetching recommendations:", err);
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <h2 style={styles.logo}>Ghastly</h2>
                <div style={styles.links}>
                    <Link to="/Home" style={styles.link}>Home</Link>
                    <Link to="/Login" style={styles.link}>Login</Link>
                    <Link to="/Signup" style={styles.link}>Signup</Link>
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
                        <li style={styles.dropdownItem} onClick={() => handleChoice(1)}>Scary, but not too brutal</li>
                        <li style={styles.dropdownItem} onClick={() => handleChoice(2)}>I can handle more</li>
                        <li style={styles.dropdownItem} onClick={() => handleChoice(3)}>I want to be traumatized</li>
                    </ul>
                )}
            </div>

            {/* Recommendation Cards */}
            <div style={styles.cardsContainer}>
                {recommendations.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <h3>{item.title || item.name || "Untitled"}</h3>
                        {item.description && <p>{item.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Inline styles
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
