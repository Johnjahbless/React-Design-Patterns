import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./WithUserInfo";


//const UserInfoWrapped = printProps(UserInfo)

const WithUserLoader = withUser(UserInfo, "234")
function App() {
	return (
		<UserInfoForm/>
	);
}

export default App;
