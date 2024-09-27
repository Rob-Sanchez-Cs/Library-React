import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ rating }) => {

    function getRatingHtml(rating) {
        
        let html = []
        while (rating >= 1){
            html.push(<FontAwesomeIcon key={rating} icon="star" />)
            rating -= 1
        }

        rating !== 0 && html.push(<FontAwesomeIcon key={rating} icon="star-half-alt" />)
        return html
    }


    return (
        <div className='book__ratings'>
            {getRatingHtml(rating)}
        </div>
    );
}

export default Rating;
