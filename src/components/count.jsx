import { useState } from 'react';
import './count.css'

function Count() {
    //let number = 0;
    const [number, setNumber] = useState(0)
    const addOne = () => {
        //number++;
        setNumber(number + 1)
        console.log(number);
    }

    return (
        <div>
            <h2 onClick={addOne}>Number: {number}</h2>
        </div>
    )
}

export default Count