import React from 'react';
import {Link} from 'react-router-dom'
import pokebola from '../../Assets/Images/pokebola-go.png'
import gif404 from '../../Assets/Images/gif404.gif'
import './index.css'

const Page404 = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} className='container404'>
            <h1 style={{textAlign: 'center'}}>Ops...</h1>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                maxHeight: '400px'
            }} className='box404'>
                <h1 style={{fontSize: '200px'}}>4</h1>
                <img src={pokebola} alt="" style={{maxHeight: '200px'}}/>
                <h1 style={{fontSize: '200px'}}>4</h1>
                <img src={gif404} alt=""/>
            </div>
            <p style={{fontSize: '40px', margin: '0 auto'}}>Página não encontrada</p>
            <Link to="/" style={{fontSize: '40px', margin: '0 0 40px 0', textAlign: 'center', color:'red'}}>Voltar para Home</Link>
        </div>
    );
}

export default Page404;
