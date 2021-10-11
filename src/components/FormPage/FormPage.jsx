import { Delete, Edit } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemPage from '../ItemPage/ItemPage';

import './formPage.css';

function FormPage() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [update, setUpdate] = useState(false);
	const [key, setKey] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const respond = await axios('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0');
			setData(respond);
			setLoading(true);
		}
		fetchData();
	}, []);

	const handleDelete = (id) => {
		const removeItem = data.filter((item) => item !== id);
		setData(removeItem);
	};

	const handleUpdate = (state, key) => {
		setUpdate(state);
		setKey(key);
	};
	return (
		<div className='FormPage'>
			<div className='FormPageOverlay'>
				{update && (
					<ItemPage
						className='ItemPageDisplay'
						data={data}
						ItemKey={key}
						setUpdate={setUpdate}
						update={update}
					/>
				)}
			</div>
			<table className='table table-hover'>
				<thead>
					<tr className='table-primary'>
						<th scope='col'>#</th>
						<th scope='col'>ORDER NO</th>
						<th scope='col'>DELIVERY DATE</th>
						<th scope='col'>CUSTOMER</th>
						<th scope='col'>STATUS</th>
						<th scope='col'>CONSIGNEE</th>
						<th scope='col'>ACTION</th>
					</tr>
				</thead>
				<tbody>
					{loading ? (
						data.data.map((item, key) => (
							<tr key={key + 1}>
								<th scope='row'>{key + 1}</th>
								<td>{item.orderNo}</td>
								<td>{item.date}</td>
								<td>{item.customer}</td>
								<td>{item.status}</td>
								<td>{item.consignee}</td>
								<td>
									<Edit
										className='EditButton'
										onClick={() => handleUpdate(!update, key)}
									/>
									<Delete
										className='DeleteButton'
										onClick={() => {
											handleDelete(item);
										}}
									/>
								</td>
							</tr>
						))
					) : (
						<CircularProgress />
					)}
				</tbody>
			</table>
		</div>
	);
}

export default FormPage;
