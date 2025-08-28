import axios from "axios";

import Client from "./client";
const getProducts = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
};

export default async function ProductPage({ params }) {
    const data = await getProducts(params.id);

    return (  
        <div>
            <h1>Product Details</h1>
            <Client datas={data} />  
        </div>
    );
}
