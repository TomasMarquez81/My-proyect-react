import './label.css'
export default function Label() {
    return (
        <div className="light">
            <h1>className - htmlFor - select defaultValue</h1>

            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Nombre de usuario" />
                <br />
                <select defaultValue={"javascript"}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                </select>
            </form>
        </div>
    )
}
