import Herofull from "../components/homepage/heroFull";
import FirstInfo from "../components/homepage/firstinfo";
import TwoInfo from "../components/homepage/twoinfo";
import "../styles/Home.module.css";

const App = () => {
	return (
	<div className='w-full'>
		<Herofull></Herofull>
		<FirstInfo></FirstInfo>
		<TwoInfo></TwoInfo>
	</div>
	);
}

export default App;