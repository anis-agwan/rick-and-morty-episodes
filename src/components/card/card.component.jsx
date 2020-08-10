import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt='episode' className='card-img-top' src = {'https://trendingnewsbuzz.com/wp-content/uploads/2019/11/rick-1-696x463.jpg'} />
        <h1 className='h1'>{props.episode.name}</h1>
        <p className="p">Episode No: {props.episode.episode}</p>
        <p className="p">Aired: {props.episode.air_date}</p>
        <p className="p">Created on: {props.episode.created}</p>
    </div>
)