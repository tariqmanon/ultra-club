import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import './Main.css'

const Main = () => {
    const [gyms, setGyms] = useState([]);
    const [active, setActive] = useState([]);
    console.log(gyms)
    useEffect(() => {
        fetch('https://mocki.io/v1/af29e3a6-a408-4e66-8bd6-19805b4ad3a5')
            .then(res => res.json())
            .then(data => setGyms(data))
    }, []);

    const handelAddToList = (gym) => {
        console.log(gym)
        //cart.push(gym)
        const newActive = [...active, gym];
        setActive(newActive);
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                <h2>Select Today's Excercise </h2>
            </div>
            <div className='main-container'>
                <div className='gym-container'>

                    {
                        gyms.map(gym => <Gym
                            key={gym.id}
                            gym={gym}
                            handelAddToList={handelAddToList}
                        >
                        </Gym>)
                    }
                </div>

                <div className='gym-summary'>
                    <h1>Gym Summary</h1>
                    <p>Selected Items: {active.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Main;