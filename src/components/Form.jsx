import { useState } from "react"

const Form = () => {

    const [myValue, SetMyValue] = useState("")
    const condition1 = true
    const condition2 = false
    const movies = ["Lord of the Rings", "Star Wars", "Dune"]

    const handleInput = (e) => {
        SetMyValue(e.target.value)
    }

    const HTMLmovies1 = movies.map(movie => {
        return (<li key={movie}>{movie}</li>)
    })

    const HTMLmovies2 = movies.map((movie, index) => {
        return (<li key={movie}>{index + 1} - {movie}</li>)
    })

    const animals = [
        {
            id: 1,
            name: "Dog",
            img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
        },
        {
            id: 2,
            name: "Cat",
            img: "https://media.4-paws.org/d/2/5/f/d25ff020556e4b5eae747c55576f3b50886c0b90/cut%20cat%20serhio%2002-1813x1811-720x719.jpg"
        },
        {
            id: 3,
            name: "Bird",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg"
        }
    ]

    const HTMLAnimals = animals.map(animal => {
        return (
            <div key={animal.id}>
                <h2>{animal.name}</h2>
                <img src={animal.img} alt="" width={200} />
            </div>
        )
    })

    return (
        <div>
            <h2>{myValue}</h2>
            <input type="text" placeholder="Tu nombre" value={myValue} onChange={handleInput} />
            {condition1 && <h2>La condicion 1 se cumple</h2>}
            {!condition1 && <h2>La condicion 1 no se cumple</h2>}
            {condition2 ? (<h2>La condicion 2 se cumple</h2>) : (<h2>La condicion 2 no se cumple</h2>)}
            <div>
                <h1>Renderizado de listas</h1>
                <ul>
                    {HTMLmovies1}
                </ul>
                <h1>Renderizado de listas con index</h1>
                <ul>
                    {HTMLmovies2}
                </ul>
            </div>
            <div>
                {HTMLAnimals}
            </div>
        </div>
    )
}

export default Form