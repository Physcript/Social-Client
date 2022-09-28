

import React, { useState,useEffect } from 'react'
import {IPost} from '../interfaces/post'


export function Post (post: IPost) {
	const [ data,setData ] = useState( {
		_id: '',
		body: '',
		fromUid: '',
		toUid: '',
		pid: '',
		createdAt: '',
		updatedAt: '',
		userData: {
			firstName: '',
			lastName: '',
			avatar: '',
			email: '',
			uid: '',

		}
	 }
	)
	
	useEffect(() => {
		setData(post.p)
	},[])

	return (
		<div>	
			<section>
				<label>{data.userData.firstName} {data.userData.lastName} </label>
			</section>
			<section>
				<label>{ data.body }</label>
			</section>
		</div>
	)
}
