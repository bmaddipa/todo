import { useState, useContext } from 'react'
import { UserContext } from 'context/UserContext'

export default function Login() {

    const { user, setUser } = useContext(UserContext)
    const [name, setName] = useState("");
    return (
        <div padding={5}>
            User Name:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Enter User name">
            </input>
            <button onClick={() => setUser({ ...user, name })}>Submit</button>
        </div>
    )
}