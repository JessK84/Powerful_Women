import React, { useState } from 'react';
import './Card.scss';

const Card = ({imgprop, children}) =>{
    const [valueBoton, setvalueBoton] = useState(false);

    return(
        <main className="card">
            <img className="card-img" src={imgprop} />

            <section className="card-content" 
                style={{
                    width: valueBoton ? "100%" : "261px",
                    height: valueBoton ? "100%" : "30%",
                    left: valueBoton ? "0" : "32px"         
                }}
            >
                <p>Powerfull Women</p>
                {children}
                <footer>
                    <div className="card-icon" onClick={() => setvalueBoton(!valueBoton)}>
                        <i class="fas fa-times"></i>
                    </div>
                </footer>
            </section>
        </main>

    );
}

export default Card;