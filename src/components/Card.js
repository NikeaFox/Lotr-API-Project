import React from 'react'
import '../styles/Card.css'
function Card(props) {
    return (
        <div className="card__container">
            <div className="information__container">
                <p className="name__text">{props.name}</p>
                <p>Race: {props.race}</p>
                <p>Gender: {props.gender}</p>
                <p>Realm: {props.realm}</p>
                <p>Birth: {props.birth}</p>
                <p>Death: {props.death}</p>
                <p>Spouse: {props.spouse}</p>
            </div>
        </div>
    )
}

export default Card
