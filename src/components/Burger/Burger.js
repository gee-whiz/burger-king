import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const burger = (props) => {
    let transformedIngridients = Object.keys(props.ingridients)
        .map(igKey => {
            return [...Array(props.ingridients[igKey])].map((_, index) => {
                return <BurgerIngridient key={igKey + index} type={igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (transformedIngridients.length === 0) {
        transformedIngridients = <p>Please start adding ingridients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformedIngridients}
            <BurgerIngridient type="bread-bottom" />

        </div>
    );
};

export default burger;