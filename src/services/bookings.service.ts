import { CommonResponse } from "models/common";
import { getAsync, patchAsync, deleteAsync, postAsync, putAsync } from "./request";

const bookingsAPI = {
	signUp(params?: any): Promise<CommonResponse> {
		const url = "/v1/users"
		return postAsync(url, params);
	},
	signIn( params: any): Promise<CommonResponse> {
		const url = "/v1/auth/signIn"
		return postAsync(url, params);
	},

	getMoives(params?: any): Promise<CommonResponse> {
		const url = "/v1/movies"
		return getAsync(url, params);
	},
	getMoivesComming(params?: any): Promise<CommonResponse> {
		const url = "/v1/movies/lastFilm"
		return getAsync(url, params);
	},
  getMoive( id?: any): Promise<CommonResponse> {
		const url = `/v1/movies/${id}`
		return getAsync(url);
	},
	getTicket( id?: any): Promise<CommonResponse> {
		const url = `/v1/tickets/${id}`
		return getAsync(url);
	},
	getScreening( id?: any): Promise<CommonResponse> {
		const url = `/v1/screenings/${id}`
		return getAsync(url);
	},
	addBookings( params: any): Promise<CommonResponse> {
		const url = "/bookings"
		return postAsync(url, params);
	},
	getCinemas(params?: any): Promise<CommonResponse> {
		const url = "/v1/cinemas"
		return getAsync(url, params);
	},
	getCinema(id?: any): Promise<CommonResponse> {
		const url = `/v1/cinemas/${id}`
		return getAsync(url);
	},
	updateBookings(
    id: string,
    params: any
  ): Promise<CommonResponse> {
    const url = `/v1/bookings/${id}`
    return putAsync(url, params)
  },
	deleteBookings(
    id: string
  ): Promise<CommonResponse> {
    const url = `/v1/bookings/delete/${id}`
    return deleteAsync(url)
  },
  getReviews(params?: any): Promise<CommonResponse> {
	const url = "/v1/reviews"
	return getAsync(url, params);
},
addReviews( params: any): Promise<CommonResponse> {
	const url = "/v1/reviews"
	return postAsync(url, params);
},
};

export default bookingsAPI;
