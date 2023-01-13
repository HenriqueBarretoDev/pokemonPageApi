import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import api from '../../Services/api'
import './index.css'

export default function MediaCard({name, image, base_experience, id, weight}) {

    return (
        <Card sx={{
            maxWidth: '260px',
            minWidth: '260px',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '280px',
            maxHeight: '280px',
            backgroundColor: 'orange',
        }}
        >

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
        </Card>
    );
}
