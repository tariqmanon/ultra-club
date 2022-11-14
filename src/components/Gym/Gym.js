import React from 'react';

const Gym = (props) => {
    const { name, img, instruction, time, age } = props.gym;


    return (

        <div class="card gym">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{instruction}</p>
                <p className="card-text">For Age : {age}</p>
                <p className="card-text">Time Required : {time}s</p>
                <button className='btn btn-primary btn-lg' onClick={() => props.handelAddToList(props.gym)}>Add To List
                </button>

            </div>
        </div>
    );
};

export default Gym;