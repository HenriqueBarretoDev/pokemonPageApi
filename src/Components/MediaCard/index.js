import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import api from '../../Services/api'
import iconAttacks from '../../Assets/Icons/defense-icon-12.jpg'
import iconHability from '../../Assets/Icons/star-icon.webp'

import './index.css'

export default function MediaCard(
    {
        name,
        image,
        imageBack,
        base_experience,
        id,
        weight,
        abilite1,
        abilite2,
        types,
        imageBack2
    }) {

    return (
        <Card className={'cardPokemons'} sx={{}}
        >
            <div className="flip-card-inner">
                <div className="flipCardFront">
                    <CardContent className='contentInfo'>
                        <div className='contentTitlePokemonsCard'>
                            <Typography gutterBottom variant="h5" component="div" className='titleId'>
                                <p>n°{id}</p>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='titlePokemons'>
                                <p>{name}</p>
                            </Typography>
                        </div>
                    </CardContent>

                    <div className="imgPokemon">
                        <img className='cardModel' src={image} alt="pokemon imagem"/>
                    </div>

                    <CardActions className='titlePower'>
                        <span>POWER: {base_experience}</span>
                        <span>WEIGHT: {weight}</span>
                    </CardActions>
                </div>


                <div className="flipCardBack">

                    <CardContent className='contentInfo' style={{margin: 0}}>
                        <div className='contentTitlePokemonsCard'>
                            <Typography gutterBottom variant="h5" component="div" className='titleId'>
                                <p>n°{id}</p>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='titlePokemons'>
                                <p>{name}</p>
                            </Typography>
                        </div>
                    </CardContent>

                    <div className="containerBottomCardPokemons">
                        <div className="imgPokemonBack">
                            <img src={imageBack} alt="pokemon imagem"/>
                            <img src={imageBack2} alt="pokemon imagem"/>
                        </div>

                        <CardContent className='contentInfoBack'>
                            <CardActions gutterBottom variant="h5" component="div">
                                <p className='titleIdBack'>Tipo: <span>{types}</span></p>
                            </CardActions>

                            <CardActions className='titlePowerBack'>
                                <p className={'iconAttacks'}>
                                    <img src={iconAttacks} alt=""/> habilidades:
                                </p>

                                <div className="habilites">
                                <span className={'iconAttacksHability'}>
                                    <img src={iconHability} alt=""/>{abilite1}
                                </span>
                                    <span className={'iconAttacksHability'}>
                                        <img src={iconHability} alt=""/>{abilite2}
                                    </span>
                                </div>
                            </CardActions>
                        </CardContent>
                    </div>


                </div>
            </div>



        </Card>
    );
}
