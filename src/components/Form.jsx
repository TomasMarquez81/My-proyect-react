import { useState } from "react"

const Form = () => {

    const [myValue, SetMyValue] = useState("")

    const handleInput = (e) => {
        SetMyValue(e.target.value)
    }
    return (
        <div>
            <h2>{myValue}</h2>
            <input type="text" placeholder="Tu nombre" value={myValue} onChange={handleInput} />
        </div>
    )
}

export default Form