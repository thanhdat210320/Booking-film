import Banner from "../../Banner"
import Showing from "../../Showing"
import Coming from "../../Coming"
import Trainner from "../../Trainner"
import Showtimes from "../../Showtimes"
import CommentViews from "../../CommentViews"
import MovieBlog from "../../MovieBlog"
import NewPromotion from "../../NewPromotion"

const Body = () => {
  return <div>
    <Banner /> 
		<Showing />
		<Coming />
		<Trainner />
		<Showtimes />
		<CommentViews />
		<MovieBlog />
		<NewPromotion />
  </div>
}
export default Body