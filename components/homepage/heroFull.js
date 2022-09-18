import "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const AvatarCounter = () => {
	return (
		<div className="avatar-group -space-x-6">
			<div className="avatar">
				<div className=" w-10">
					<Image alt="avatar" src="https://placeimg.com/192/192/people" layout="fill" />
				</div>
			</div>
			<div className="avatar">
				<div className=" w-10">
					<Image alt="avatar" src="https://placeimg.com/192/192/people" layout="fill" />
				</div>
			</div>
			<div className="avatar">
				<div className=" w-10">
					<Image alt="avatar" src="https://placeimg.com/192/192/people" layout="fill" />
				</div>
			</div>
			<div className="avatar placeholder">
				<div className=" w-10 bg-neutral-focus text-neutral-content">
					<span>+99</span>
				</div>
			</div>
		</div>
	);
}

const Stats = () => {
	return (
		<div className="stats stats-vertical lg:stats-horizontal shadow">

			<div className="stat">
				<div className="stat-title">Event Registers</div>
				<div className="stat-value">31K</div>
				<div className="stat-desc">Jan 1st - Feb 1st</div>
			</div>

			<div className="stat">
				<div className="stat-title">New Users</div>
				<div className="stat-value">4,200</div>
				<AvatarCounter/>
			</div>

			<div className="stat">
				<div className="stat-title">New Event</div>
				<div className="stat-value">1,200</div>
			</div>

		</div>
	);
}

const Herofull = () => {
	return (
		<div className="w-full h-screen bg-primary flex flex-col justify-center  items-center gap-4 text-center">
			<h1 className="font-bold text-3xl text-white">AlcatrazHackathon Project</h1>
			<Stats></Stats>
			<p className="text-2xl font-mono text-white">Başlamak İstermisin ?</p>
			<Link href="#FirstInfo">
				<span className=" animate-bounce text-white">
					<ion-icon name="caret-down-outline" size="large"></ion-icon>
				</span>
			</Link>
		</div>
	);
}

export default Herofull;