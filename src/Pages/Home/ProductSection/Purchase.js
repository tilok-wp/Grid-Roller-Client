import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../../utility/PageTitle';

const Purchase = () => {
    const { id } = useParams()
    return (
        <div className='py-20'>
            <h3>Purchage pag {id}</h3>
            <PageTitle title="Purchase"></PageTitle>
        </div>
    );
};

export default Purchase;