import React from 'react';
import Card from './Card';
import robots from './robots';

const CardList = () => {
    const cardComponent = robots.map((user, i) => {
         return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
    });
    return ( 
      <div>
        { cardComponent }
    </div>  
    );
};

export default CardList;