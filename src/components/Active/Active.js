import React from 'react';
import mainImg from "../../images/MESSI.jpg";
import '../Active/Active.css';

const Active = (props) => {
    const { active } = props;
    console.log(active)
    let time = 0;
    for (const gym of active) {
        time = time + gym.time;
    }

    const handleBreakAdd = (e) => {
        console.log(e.target.innerHTML);
        document.getElementById('break').innerText = e.target.innerText;
    }
    return (
        <div className='active'>
            <div>
                <div className='profile'>
                    <img src={mainImg} alt="" />
                    <div className='profile-text'>
                        <h1>Lionel Messi</h1>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>

                <div className='d-flex bg-light p-2 justify-content-around align-items-center my-5'>
                    <div>
                        <h4>75<sub>Kg</sub></h4>
                        <h6>Weight</h6>
                    </div>
                    <div>
                        <h4>6.5</h4>
                        <h6>Height</h6>
                    </div>

                    <div>
                        <h4>25<sub>yrs</sub></h4>
                        <h6>Age</h6>
                    </div>
                </div>

                <div>
                    <h4 className='fs-3 my-5'>Add a Break</h4>
                    <div onClick={handleBreakAdd} className='break d-flex bg-light p-2 justify-content-around align-items-center'>
                        <h4 className='border border-info p-2 rounded-circle bg-light'><span>10</span>s</h4>
                        <h4 className='border border-info p-2 rounded-circle bg-light'><span>20</span>s</h4>
                        <h4 className='border border-info p-2 rounded-circle bg-light'><span>30</span>s</h4>
                        <h4 className='border border-info p-2 rounded-circle bg-light'><span>40</span>s</h4>
                        <h4 className='border border-info p-2 rounded-circle bg-light'><span>50</span>s</h4>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='fs-3 my-5'>Exercise Details</h1>
                <div className='d-flex bg-light p-2 justify-content-around align-items-center'>
                    <h1 className='fs-4'>Exercise Time</h1>
                    <p className='fs-4'>{time} Seconds</p>
                </div>

                <div className='d-flex bg-light p-2 justify-content-around align-items-center my-2'>
                    <h1 className='fs-4'>Exercise Time</h1>
                    <p className='fs-4'><span id='break'></span> Seconds</p>
                </div>
            </div>
            <button className='my-3 btn btn-primary text-center btn-lg w-100'>Activity Completed</button>

        </div>
    );
};

export default Active;