import "../styles/Home.module.css";
import Link from "next/link";

function Herofull() {
	return (
		<div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">AlcatraZ Hackathon Project</h1>
					<p className="mb-5">Kendi Ekibini Kurmak İstermisin.</p>
					<Link href="#FirstInfo">
						<button className="btn btn-primary rounded-xl w-20 animate-bounce -translate-y-full">
							<ion-icon className=" font-bold" size="large" name="chevron-down-outline"></ion-icon>
						</button>
					</Link>
				</div>
			</div>

		</div>
	);
}

export default Herofull;