import React from 'react';
import seif  from './photo.jpg'
const Image = () => {
    return (
        <div>
            <img style={{height:250,width:250,borderRadius:150}}
 src={seif} alt="img" />
        </div>
    );
}

export default Image;
