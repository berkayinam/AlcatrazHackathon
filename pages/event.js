import Image from "next/image";

const  EventTable = () => {
	return (
		<div className="overflow-auto w-11/12 max-h-screen">
			<table className="table w-full">
				<thead>
					<tr>
						<th>
						</th>
						<th>Etinlik Yönetcisi</th>
						<th>Event Konusu</th>
						<th>Yer / Mekan</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
						<td>
							<div className="flex items-center space-x-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<Image src="https://i.pravatar.cc/150?img=48" alt="EventCreatorAvatar" layout="fill" />
									</div>
								</div>
								<div>
									<div className="font-bold">Hart Hagerty</div>
									<div className="text-sm opacity-50">United States</div>
								</div>
							</div>
						</td>
						<td>
							Zemlak, Daniel and Leannon
							<br/>
								<span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
						</td>
						<td>Purple</td>
						<th>
							<button className="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
					<tr>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
						<td>
							<div className="flex items-center space-x-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<Image src="https://i.pravatar.cc/150?img=1" alt="EventCreatorAvatar" layout="fill" />
									</div>
								</div>
								<div>
									<div className="font-bold">Brice Swyre</div>
									<div className="text-sm opacity-50">China</div>
								</div>
							</div>
						</td>
						<td>
							Carroll Group
							<br/>
								<span className="badge badge-ghost badge-sm">Tax Accountant</span>
						</td>
						<td>Red</td>
						<th>
							<button className="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
					<tr>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
						<td>
							<div className="flex items-center space-x-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<Image src="https://i.pravatar.cc/150?img=55" alt="EventCreatorAvatar" layout="fill" />
									</div>
								</div>
								<div>
									<div className="font-bold">Marjy Ferencz</div>
									<div className="text-sm opacity-50">Russia</div>
								</div>
							</div>
						</td>
						<td>
							Rowe-Schoen
							<br/>
								<span className="badge badge-ghost badge-sm">Office Assistant I</span>
						</td>
						<td>Crimson</td>
						<th>
							<button className="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
					<tr>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
						<td>
							<div className="flex items-center space-x-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<Image src="https://i.pravatar.cc/150?img=27" alt="EventCreatorAvatar" layout="fill" />
									</div>
								</div>
								<div>
									<div className="font-bold">Yancy Tear</div>
									<div className="text-sm opacity-50">Brazil</div>
								</div>
							</div>
						</td>
						<td>
							Wyman-Ledner
							<br/>
								<span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
						</td>
						<td>Indigo</td>
						<th>
							<button className="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th></th>
						<th>Etinlik Yönetcisi</th>
						<th>Event Konusu</th>
						<th>Yer / Mekan</th>
						<th></th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}

const EventPage = () => {
	return (
		<div className="w-full min-h-screen bg-primary flex flex-col justify-center items-center text-center gap-4">
			<EventTable/>
			<div className="tooltip tooltip-bottom w-full" data-tip="Kayit olmak istediğniz etkinliğin kutucuğunu işaretledikden sonra butona basın :)">
				<button className="btn glass w-11/12 text-xl font-bold">Kayıt Ol!</button>
			</div>
		</div>
	);
}

export default EventPage;