import React from 'react';
import Slider from './Slider';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/${name}?200x200`} />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
            <Slider />
        </div>
    );
}

export default Card;