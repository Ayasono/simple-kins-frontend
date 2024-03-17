"use client"

import React, {useEffect} from 'react';
import {getUserInfoByEmail} from "@/app/api/getUserInfoByEmail";
import {useRouter} from "next/navigation";

interface Props {

}

const MyPage: React.FC<Props> = ({}) => {
	const router = useRouter()

	useEffect(() => {
		getUserInfoByEmail("yuehu@ualberta.ca")
			.then(res => {
				console.log(res.user.email)
			})
			.catch(err => {
				if (err.response.status === 401) {
					router.push("/sign_in")
				} else console.log(err)
			})
	}, []);
	return (
		<>
			<div className='bg-main max-w-full h-screen-80'>
				<div className='text-center text-4xl pt-10 pb-10'>
					My Page
				</div>
			</div>
		</>
	);
};

export default MyPage;
