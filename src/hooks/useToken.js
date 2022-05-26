import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        // console.log(email)
        const newUser = { email: email };
        if (email) {
            const url = `https://hidden-reef-06008.herokuapp.com/user/${email}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => {
                    const token = data.accessToken;
                    localStorage.setItem('accessToken', token);
                    setToken(token);
                    // console.log(data)
                })
        }

    }, [user]);
    return [token, setToken];
}

export default useToken;