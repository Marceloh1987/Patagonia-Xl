import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { formatPrice } from '../Data/FoodData';


const MenuStyled = styled.div`
    height: 1000px
    margin: 0px 20px 50px 20px;
`;

const Detailstyled = styled.div`
    font-size: 10px;
`;



export function Menu({ setOpenFood }){
    return (
    <MenuStyled>
        {Object.entries(foods).map(([sectionName, foods],i) => (
        <div key={i}>
            <h1>{sectionName}</h1>
            {}
            <FoodGrid>
                {foods.map((food, i) => (
                <Food
                key={food.name + i}
                    img={food.img}
                    onClick={() => {
                    setOpenFood(food);
                    }}
                >
                    <FoodLabel>
                        <div>{food.name}</div>
                        <Detailstyled>{food.detail}</Detailstyled>
                        <div>{formatPrice(food.price)}</div>
                    </FoodLabel>
                </Food>
                ))}
            </FoodGrid>
        </div>
      ))}
    </MenuStyled>
    );
}