import Home from 'pages/home/Home'
import Weather from 'pages/weather/Weather'
import Login from 'pages/login/Login'
import { Switch, Route } from 'react-router'

export const routes = (
	<Switch>
		<Route exact path='/'>
			<Home />
		</Route>
		<Route path='/weather'>
			<Weather />
		</Route>
		<Route path='/login'>
			<Login />
		</Route>
	</Switch>
)
