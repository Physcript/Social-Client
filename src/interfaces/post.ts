
export interface IPostUser {
	uid: string,
	firstName: string,
	lastName: string,
	avatar: string,
	email: string
}

export interface IPost {
	_id: string,
	body: string,
	fromUid: string,
	toUid: string,
	pid: string,
	createdAt: string,
	updatedAt: string,
	user: IPostUser 
}




