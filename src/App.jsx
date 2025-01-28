import Count from "./components/count";
import Form from "./components/Form";
import Child from "./components/Child";
import Label from "./components/Label";
import Child2 from "./components/Child2"
import './App.css'
import { useState } from "react";

function App() {

    const text = "Variable desde el padre";
    const person = {
        sex: "hombre",
        age: 30
    }
    const [displayName, setDisplayName] = useState("")

    const login = (name) => {
        setDisplayName(name)
    }

    return (
        <div>
            <h1>Hola a todos</h1>
            <hr />
            <Count></Count>
            <hr />
            <Form></Form>
            <hr />
            <Child msg="Mensaje desde el componente padre" msgVar={text} person={person}></Child>
            <hr />
            <Label></Label>
            <hr />
            <div>
                <h2>Props | Comunicación hijo-padre |</h2>
                <h3>Hola {displayName}</h3>
            </div>
            <Child2 handleLogin={login}></Child2>
        </div>
    )
}

export default App
