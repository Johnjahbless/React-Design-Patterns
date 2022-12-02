import axios from "axios";
import { useCurrentUser } from "./useCurrentUser";
import { useDataSource } from "./useDataSource";
import { useResource } from "./useResource";
import { useUser } from "./useUser";

export const UserInfo = ({userId}) => {
	//const user = useCurrentUser();
	//const user = useUser(userId);
	//const user = useResource(`/users/${userId}`);
	const user = useDataSource(async() => {
		const response = await axios.get(`/users/${userId}`);
		return response.data;
	})


	const { name, age, hairColor, hobbies } = user || {};

	return user ? (
		<>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	) : <p>Loading...</p>;
}