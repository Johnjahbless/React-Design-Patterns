import { UncontrolledForm } from './UncontrolledForm';
import { ControlledForm } from './ControlledForm';
import { UncontrolledModal } from './UncontrolledModal';
import { ControlledModal} from './ControlledModel';
import { useState } from 'react';
import { UnControlledOnboardingFlow } from './UnControlledOnboardingFlow';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({goToNext}) => {
	return<>
<h1>Step 1</h1>
<button onClick={()=> goToNext({name: "john"})}>Next</button>
</>
}
const StepTwo = ({goToNext}) => {
	return<>
<h1>Step 2</h1>
<button onClick={()=>goToNext({age: 100})}>Next</button>
</>
}
const StepThree = ({goToNext}) => {
	return<>
<h1>Step 3</h1>
<p>Congratulations, you are qualified for senior discount</p>
<button onClick={()=>goToNext({})}>Next</button>
</>
}
const StepFour = ({goToNext}) => {
	return<>
<h1>Step 4</h1>
<button onClick={()=>goToNext({hairColor: 'brown'})}>Next</button>
</>
}


function App() {
	const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
	const onNext = stepData => {
		setOnboardingData({onboardingData, stepData});
		setCurrentIndex(currentIndex + 1)
    }

	return (
		<>
		<ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
			<StepOne/>
			<StepTwo/>
			{onboardingData.age >= 62 && <StepThree/> }
			<StepFour />
		</ControlledOnboardingFlow>
		{/* <ControlledModal shouldShow={shouldShowModal} onRequestShow={() => setShouldShowModal(false)}>
			<h1>jjhgghfgfhfftyyftyf</h1>
			</ControlledModal>
		<button onClick={() => setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? "Hide modal" : "Show Modal"}</button> */}
		</>
	);
}

export default App;
