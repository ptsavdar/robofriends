import React from 'react';
import {Card} from "./Card";

const CardList = ({robots}) => {
  const cardArray = robots.map((robot, i) => <Card key={robot.id} {...robot}/>)

  return (
    <div>
      {cardArray}
    </div>
  );
};

export {
  CardList
}