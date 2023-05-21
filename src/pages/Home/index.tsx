import { useEffect } from "react"
import Body from "../../components/Layout/Body"
import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"
import bookingsAPI from "../../services/bookings.service"

function Home() {

	const getMovies = async () => {
		const res = bookingsAPI.getMoives()
	}

	useEffect(() => {
		getMovies()
	},[])

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Home
