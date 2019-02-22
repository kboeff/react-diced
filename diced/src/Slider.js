import React from 'react';

const Slider = () => {
    return (
        <div className='bottom-0'>
            <div className='leftmost'></div>
            <img className='.h-25' alt='icon' src={`https://robohash.org/1?20x20`} />
            <div className='midline bg-navy hover-light-blue:hover hover-light-blue:focus'></div>
            <div className='rightmost'></div>
        </div>
    );
}

export default Slider; 