export default function Child(props) {
    //destructurin
    const { msg, msgVar, person } = props
    return (
        <>
            <h2>Este es el componente hijo</h2>
            <p>
                {msg}
            </p>
            <p>
                {msgVar}
            </p>
            <p>
                {person.sex}
                <br />
                {person.age}
            </p >
        </>
    )
}
