

import Footer from "../../components/Layout/Footer"
import Filter from "../../components/Filter"
import Header from "../../components/Layout/Header"
import Banner from "../../components/Banner"
import FilterDetail from "../../components/FilterDetail"


function FilterFilm() {
    
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-gray-50 ">        
        <Header />
        <Banner />
        <Filter />
        <FilterDetail />
        <Footer />
      </div>
    </div>
  )
}

export default FilterFilm