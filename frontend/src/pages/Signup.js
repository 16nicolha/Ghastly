import React from "react";

function Signup() {
    return (
        <div>
            <h2>Signup Page</h2>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
