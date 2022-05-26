import { useEffect, useState } from "react";

const useUserDetail = email => {
    const [userDetail, setUserDetail] = useState({});

    useEffect(() => {
        const url = `https://hidden-reef-06008.herokuapp.com/user/${email}`
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserDetail(data))
    }, [email])

    return [userDetail, setUserDetail]
};

export default useUserDetail;