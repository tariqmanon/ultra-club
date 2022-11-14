import React, { useEffect, useState } from 'react';

const Main = () => {
    const [gyms, setGyms] = useState([]);
    console.log(gyms)
    useEffect(() => {
        fetch('https://mocki.io/v1/e5b26d63-1a0d-4a25-b974-d548102cdb38')
            .then(res => res.json())
            .then(data => setGyms(data))
    }, []);
    return (
        <div>
            <h1>This is Main: {gyms.length}</h1>
        </div>
    );
};

export default Main;