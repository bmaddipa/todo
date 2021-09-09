import { useState, useContext, useEffect, useRef } from 'react'
import { UserContext } from 'context/UserContext'
import { useHistory } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'

export default function Login() {
	const history = useHistory()
	const { user, setUser } = useContext(UserContext)
	const [name, setName] = useState('')

	// const inputRef = useRef()

	useEffect(() => {
		if (user.name) history.push('/')
	}, [user.name])

	// useEffect(() => {
	// 	if (inputRef?.current?.value) console.log(inputRef.current.value)
	// }, [inputRef.current.value])

	return (
		<div padding={5}>
			User Name:
			
            <TextField 
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                label='Enter User name'
            />
			<Button onClick={() => setUser({ ...user, name })}>Submit</Button>
		</div>
	)
}
