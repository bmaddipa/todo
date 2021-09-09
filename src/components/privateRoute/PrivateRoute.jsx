import { UserContext } from 'context/UserContext'
import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ children, ...rest }) {
	const { user } = useContext(UserContext)
	return (
		<Route
			{...rest}
			render={() => {
				return user.name ? children : <Redirect to='/login' />
			}}
		/>
	)
}
