import { useState } from "react";

export default function Child2(props) {
    const [userName, setUserName] = useState("Tomás")

    const handleClick = () => {
        props.handleLogin(userName)
    }

    return (
        <div className="child">
            <h2>Este es un componente hijo</h2>

            <p>Nombre de usuario: {userName}</p>

            <button onClick={handleClick}>Login</button>
        </div>
    )
}