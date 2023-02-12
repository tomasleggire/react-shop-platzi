import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await fetch(API);
		const data = await response.json();
		setProducts(data);
	}, [])

    return products;

}

export default useGetProducts;