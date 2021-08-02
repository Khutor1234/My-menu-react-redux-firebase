import './app.css';
import { getLists } from '../../services/menu-service.js';
import { useEffect } from 'react';

export default function App() {

	useEffect(() => {
		getLists()
	}, [])

	return (
		<div> hello </div>
	);
}

