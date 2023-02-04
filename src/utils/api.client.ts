import axios from "axios";

export default axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		"Content-Type": "application/json",
		"x-apikey": process.env.REACT_APP_API_KEY,
		"cache-control": "no-cache",
	},
});
