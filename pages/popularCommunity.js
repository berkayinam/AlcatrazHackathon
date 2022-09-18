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

const CommunityCard = () => {
	return (
		<div className="card sm:w-96 h-96 glass">
			<div className="w-[400px] h-[225px]"><Image src="https://placeimg.com/400/225/arch" alt="GroupFoto" width="400" height="225" /></div>
			<div className="card-body">
				<h2 className="card-title text-white">Lorem Ipsum</h2>
				<p className="text-white">How to park your car at your garage?</p>
				<div className="card-actions justify-between">
					<AvatarCounter/>
					<button className="btn text-white">Learn now!</button>
				</div>
			</div>
		</div>
	);
}

const PopularCommunity = () => {
	return (
		<div className="w-full min-h-screen bg-primary flex sm:justify-center sm:items-start sm:flex-row sm:flex-wrap justify-center flex-col items-center gap-4 p-4">
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
			<CommunityCard/>
		</div>
	);
}

export default PopularCommunity;