import { CommonResponse } from "models/common";
import { getAsync, patchAsync, deleteAsync, postAsync, putAsync } from "./request";

const bookingsAPI = {
	getMoives(params?: any): Promise<CommonResponse> {
		const url = "/v1/movies"
		return getAsync(url, params);
	},
  getMoive( id?: any): Promise<CommonResponse> {
		const url = `/v1/movies/${id}`
		return getAsync(url);
	},
	addBookings( params: any): Promise<CommonResponse> {
		const url = "/v1/bookings"
		return postAsync(url, params);
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
  }
};

export default bookingsAPI;
