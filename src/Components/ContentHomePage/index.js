import React from 'react';
import './index.css'
import Register from '../../Pages/Register'

const ContentHomePage = () => {


    return (
        <div className="contentHomePage">
            <main>
                <h1 className="title">Super Pokémon</h1>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida nisl a augue viverra
                    varius. Quisque a mi leo. Praesent venenatis, nunc in consequat volutpat, lorem orci porttitor
                    massa, a tempus leo tortor et neque. Donec elementum dolor in odio lacinia, at ultrices est
                    facilisis.
                </p>
                {/*<button className='startJourney' > Começar minha jornada</button>*/}
                <a className='startJourney' href='#formRegister'> Começar minha jornada</a>
            </main>
        </div>
    )
}
export default ContentHomePage
