import axios from "axios";
import { response } from "express";
import { CuurentUserLoader } from "./CurrentUserLoader";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";


const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}


function App() {
	return (
		<>
		<DataSource getDataFunc={getServerData('http://localhost:8080/user/12')} resourceName="user">
			<UserInfo />
		</DataSource>
		</>
	);
}

export default App;
