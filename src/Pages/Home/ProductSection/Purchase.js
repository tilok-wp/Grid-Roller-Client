import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../../hooks/useProductDetails';
import PageTitle from '../../../utility/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Purchase = () => {
    const { id } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const [productDetail, setProductDetail] = useProductDetails(id)
    const { _id, name, price, img, minOrder, available, description } = productDetail

    console.log(user)
    return (
        <section className='py-20 px-3'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="product-info">
                    <div>
                        <img className='w-40' src={img} alt="Product" />
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <p><strong>Price: {price}</strong></p>
                        <span>Min Order: <strong>{minOrder} </strong></span>
                        <span>Available product: <strong>{available} </strong></span>
                    </div>
                    <p>{description}</p>
                </div>
                <div className="customer-info">
                    <h3>{user.displayName}</h3>
                </div>
            </div>
            <PageTitle title="Purchase"></PageTitle>
        </section>
    );
};

export default Purchase;