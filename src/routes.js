import React, {Suspense, lazy} from 'react'
import PrivateRoute from 'components/privateRoute/PrivateRoute'
// import Home from 'pages/home/Home'
// import Weather from 'pages/weather/Weather'
import Login from 'pages/login/Login'
import { Switch, Route } from 'react-router'

// code splitting - display proper chunk name

const LazyHome = lazy(() => import(/* webpackChunkName: "Home" */ './pages/home/Home'));
const LazyWeather = lazy(() => import(/* webpackChunkName: "Weather" */ './pages/weather/Weather') )

export const routes = (
	
		<Switch>
		<Suspense fallback='Loading...'>
		<PrivateRoute exact path='/'>
			<LazyHome />
		</PrivateRoute>
		<PrivateRoute path='/weather'>
			<LazyWeather />
		</PrivateRoute>
		<Route path='/login'>
			<Login />
		</Route>
		</Suspense>
	</Switch>
)
