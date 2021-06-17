import React from 'react';
import style from './recipe.module.css';


function Recipe({title,calories,image, ingredients}) {
    return (
        <div>
            <div className={style.recipe}>
                <h1>{title}</h1>
                <ol>
                    {ingredients.map( ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                <p>{calories}</p>
                <img className={style.image} src={image} alt="image" />
            </div>
        </div>
    )
}

export default Recipe
