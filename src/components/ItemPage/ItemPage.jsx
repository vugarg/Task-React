import { useState } from 'react';
import { Close } from '@mui/icons-material';
import './itemPage.css';

function ItemPage({ data, ItemKey, setUpdate, update }) {
	const initialFormData = {
		orderNo: '',
		date: '',
		customer: '',
		consignee: '',
		status: '',
	};
	const [formData, setFormData] = useState(initialFormData);
	const item = data.data[ItemKey];

	const clearFormData = () => {
		setFormData(initialFormData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		clearFormData();
	};

	const handleOnInputChange = (event) => {
		const { value, name } = event.target;

		// merge previous formData with the new value from input
		setFormData({
			...formData,
			[name]: value,
		});
	};
	return (
		<div className='ItemPage'>
			<form onClick={handleSubmit}>
				<div className='ItemPageWrapper'>
					<Close onClick={() => setUpdate(!update)} className='CloseButton' />
					<div className='ItemPageLeft'>
						<h1>SHIPMENT DETAILS</h1>
						<label>Order No</label>
						<input
							className='ItemPageInput'
							type='text'
							placeholder={item.orderNo}
							name='orderNo'
							value={formData.orderNo}
							onChange={handleOnInputChange}
						/>
						<label>Delivery Date</label>
						<input
							className='ItemPageInput'
							type='text'
							placeholder={item.date}
							name='date'
							value={formData.date}
							onChange={handleOnInputChange}
						/>
						<label>Customer</label>
						<input
							className='ItemPageInput'
							type='text'
							placeholder={item.customer}
							name='customer'
							value={formData.customer}
							onChange={handleOnInputChange}
						/>
					</div>
					<div className='ItemPageRight'>
						<label>Consignee</label>
						<input
							className='ItemPageInput'
							type='text'
							placeholder={item.consignee}
							name='consignee'
							value={formData.consignee}
							onChange={handleOnInputChange}
						/>
						<label>Status</label>
						<input
							className='ItemPageInput'
							type='text'
							placeholder={item.status}
							name='status'
							value={formData.status}
							onChange={handleOnInputChange}
						/>
						<button type='submit'>UPDATE</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ItemPage;
