import React from 'react';
import { TrashIcon } from '@heroicons/react/solid'

const UserRow = ({ user, index, makeAdmin }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td> {user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} className='btn btn-xs'>Make admin</button>}</td>
            <td><button className='btn-error p-1 rounded'><TrashIcon className='w-7 h-7 text-white' /></button></td>


        </tr>
    );
};

export default UserRow;