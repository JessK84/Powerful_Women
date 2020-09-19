import React from 'react';
import './Content.scss';
//item es un prop
const Content = ({itemprop}) =>{
    return(
        <React.Fragment>
            <div className="text-content">
                <div key={itemprop.id}>
                    <h2>{itemprop.titulo}</h2>
                    <p>{itemprop.text}</p>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Content;
