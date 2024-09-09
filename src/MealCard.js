import React from 'react';
import './MealCard.css';
import PropTypes from 'prop-types';

function MealCard(props) {
    return (
       <div class="meal-card-container">
            <div class="meal-item meal-item-1">
                <img
                    src={props.imageSource}
                    alt={props.altText}
                />
            </div>
                
            <div class="meal-item meal-item-2">
                <h2>{props.mealName}</h2>
            </div>
            <div class="meal-item meal-item-3">
                <p >{props.mealDescription}</p>
            </div>
            <div class="meal-item meal-item-4">
                <h3>{props.mealPrice}</h3>
            </div>
        </div>
    )
}

MealCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    mealName: PropTypes.string.isRequired,
    mealDescription: PropTypes.string.isRequired,
    mealPrice: PropTypes.string.isRequired,
}

export default MealCard;