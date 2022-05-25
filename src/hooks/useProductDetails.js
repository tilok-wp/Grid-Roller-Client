import { useEffect, useState } from "react";

const useProductDetails = id => {
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetail(data))
    }, [id])
    return [productDetail, setProductDetail]
};

export default useProductDetails;