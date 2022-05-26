import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useUserDetail from '../../hooks/useUserDetail';
import PageTitle from '../../utility/PageTitle';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [userDetail] = useUserDetail(user.email)

    const { email, displayName, phone, address, city, education, linkedIn, github, imageLink } = userDetail

    return (
        <div className='py-10 px-3 container mx-auto'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Profile</h1>
            <Link to='/dashboard/update-profile' className='btn link-btn'>Edit profile</Link>

            <div className='container w-full md:w-8/12 mx-auto'>
                <div className="text-center mb-10">
                    {imageLink && <img src={imageLink} className="rounded-full shadow border-xl mx-auto w-40" alt="profile" />}

                    {displayName && <h1 className="text-3xl font-semibold uppercase mt-3">{displayName}</h1>}



                    {userDetail?.role && <h3 className='text-xl font-bold uppercase'>{userDetail?.role}</h3>}
                    <div>
                        {github && <a className='btn btn-link my-0' href={github} target="_blank" rel="noopener noreferrer">Github</a>}
                        {linkedIn && <a className='btn btn-link my-0' href={linkedIn} target="_blank" rel="noopener noreferrer"> Linkedin</a>}

                    </div>

                </div>
                <div className='grid grid-cols-2 gap-5'>

                    <div>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone:</strong> {phone}</p>
                        <p><strong>City:</strong> {city}</p>
                        <p>Address: {address}</p>



                    </div>
                    <div>
                        <p><strong>EDUCATION:</strong> {education}</p>
                    </div>
                </div>
            </div >

            <PageTitle title="My Profile"></PageTitle>
        </div>
    );
};

export default MyProfile;