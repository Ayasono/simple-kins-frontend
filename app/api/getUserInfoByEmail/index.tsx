import {axiosInstance} from "@/app/api";

interface UserInfo {
	msg: string
	user: {
		email: string
	}
}

export const getUserInfoByEmail = async (email: string) => {
	try {
		const res = await axiosInstance({
			method: "get",
			url: `/users/${email}`,
		});
		return res.data as UserInfo;
	} catch (err) {
		throw err;
	}
}
