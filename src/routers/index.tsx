
import { lazy, ReactNode, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingCricle from '../components/Loading/loadingCricle'

const Error = lazy(() => import('../pages/ErrorPage'))
const Home = lazy(() => import('../pages/Home'))
const DetailFilm = lazy(() => import('../pages/DetailFilm'))
const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
const FilterFilm = lazy(() => import('../pages/FilterFilm'))
const BookingViews = lazy(() => import('../pages/BookingViews'))
const AppRouter = () => {

	return (
		<Routes>
			<Route>
				{/* <Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} /> */}
				<Route path='*' element={<Error />} />
			</Route>
			<Route
				path="/"
				element={
					<Suspense fallback={<LoadingCricle />}>
							<Home />
					</Suspense>
				}
			/>
			<Route
				path="/:id"
				element={
					<Suspense fallback={<LoadingCricle />}>
							<DetailFilm />
					</Suspense>
				}
			/>
			<Route
				path="/login"
				element={
					<Suspense fallback={<LoadingCricle />}>
							<Login />
					</Suspense>
				}
			/>
			<Route
				path="/register"
				element={
					<Suspense fallback={<LoadingCricle />}>
							<Register />
					</Suspense>
				}
			/>
			<Route
				path="/filterfilm"
				element={
					<Suspense fallback={<LoadingCricle />}>
							<FilterFilm />
					</Suspense>
				}
			/>
						<Route
				path="/bookingviews/:id"
				element={
					<Suspense fallback={<LoadingCricle />}>
							<BookingViews />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default AppRouter
