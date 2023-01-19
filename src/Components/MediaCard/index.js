import React, {useEffect, useState} from "react";
import './index.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// icons
import iconAttacks from '../../Assets/Icons/defense-icon-12.jpg'
import iconHability from '../../Assets/Icons/star-icon.webp'
import starIcon from '../../Assets/Icons/star-icon.webp'
import {TbPokeball} from "react-icons/tb";
import iconBug from '../../Assets/Icons/bug.png'
import iconDark from '../../Assets/Icons/dark.png'
import iconElectric from '../../Assets/Icons/electricIcon.png'
import iconFire from '../../Assets/Icons/fire-removebg-preview.png'
import iconPoison from '../../Assets/Icons/poisonIcon-removebg-preview.png'
import iconFighting from '../../Assets/Icons/fighting-removebg-preview.png'
import iconWater from '../../Assets/Icons/water-removebg-preview-removebg-preview.png'
import iconFlying from '../../Assets/Icons/fireWing-removebg-preview.png'
import iconNormal from '../../Assets/Icons/normal.png'
import iconFairy from '../../Assets/Icons/fairy-removebg-preview.png'
import iconGround from '../../Assets/Icons/ground.png'
import iconGrass from '../../Assets/Icons/grass-removebg-preview.png'
import iconPsychic from '../../Assets/Icons/psychic-removebg-preview.png'
import iceIcon from '../../Assets/Icons/iconIce.png'
import iconSteel from '../../Assets/Icons/steel.png'
import iconRock from '../../Assets/Icons/rock.png'
import iconDragon from '../../Assets/Icons/dragon-removebg-preview.png'
import iconGhost from '../../Assets/Icons/ghost.png'

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

    const getType = (types) => {

        if (types === 'poison') {
            return <img src={iconPoison} alt=""/>;

        } else if (types === 'fire') {
            return <img src={iconFire} alt=""/>;

        } else if (types === 'flying') {
            return <img src={iconFlying} alt=""/>;

        } else if (types === 'water') {
            return <img src={iconWater} alt=""/>;

        } else if (types === 'bug') {
            return <img src={iconBug} alt=""/>;

        } else if (types === 'normal') {
            return <img src={iconNormal} alt=""/>;

        } else if (types === 'fairy') {
            return <img src={iconFairy} alt=""/>;

        } else if (types === 'ground') {
            return <img src={iconGround} alt=""/>;

        } else if (types === 'electric') {
            return <img src={iconElectric} alt=""/>;

        } else if (types === 'fighting') {
            return <img src={iconFighting} alt=""/>;

        } else if (types === 'grass') {
            return <img src={iconGrass} alt=""/>;

        } else if (types === 'psychic') {
            return <img src={iconPsychic} alt=""/>;

        } else if (types === 'ice') {
            return <img src={iceIcon} alt=""/>;

        } else if (types === 'steel') {
            return <img src={iconSteel} alt=""/>;

        } else if (types === 'rock') {
            return <img src={iconRock} alt=""/>;

        } else if (types === 'dragon') {
            return <img src={iconDragon} alt=""/>;

        } else if (types === 'dark') {
            return <img src={iconDark} alt=""/>;

        } else if (types === 'ghost') {
            return <img src={iconGhost} alt=""/>;

        } else {
            return 'Desconhecido'
        }
    }

    const powerEvolution = (base_experience) => {
        if (base_experience <= 50) {
            return (
                <div>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                </div>
            )
        } else if (base_experience <= 100) {
            return (
                <div>
                    <span>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    </span>
                </div>
            )
        } else if (base_experience <= 150) {
            return (
                <div className={'powerEvolution'}>
                    <span>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    </span>
                </div>
            )
        } else if (base_experience <= 200) {
            return (
                <div>
                    <span>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    </span>
                </div>
            )
        } else if (base_experience <= 250) {
            return (
                <div>
                    <span>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    </span>
                </div>
            )
        } else if (base_experience <= 300) {
            return (
                <div>
                    <span>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    </span>
                </div>
            )
        } else if (base_experience >= 301) {
            return (
                <div>
                    <span>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    <img src={starIcon} alt="" style={{maxHeight: '14px'}}/>
                    </span>
                </div>
            )
        } else {
            return ''
        }
    }

    const weightEvolution = (weight) => {
        if (weight <= 100) {
            return <TbPokeball/>
        } else if (weight <= 200) {
            return (
                <>
                    <TbPokeball/>
                    <TbPokeball/>
                </>
            )
        } else if (weight <= 300) {
            return (
                <>
                    <TbPokeball/>
                    <TbPokeball/>
                    <TbPokeball/>
                </>
            )
        } else if (weight >= 301) {
            return (
                <>
                    <TbPokeball/>
                    <TbPokeball/>
                    <TbPokeball/>
                    <TbPokeball/>
                </>
            )
        } else return ''
    }

    return (
        <Card className={'cardPokemons'}>
            <div className="flip-card-inner">
                <div className="flipCardFront">
                    <div className='contentInfo'>
                        <div className='contentTitlePokemonsCard'>
                            <Typography variant="h5" component="div" className='titleId'>
                                <p>n°{id}</p>
                            </Typography>
                            <Typography variant="h5" component="div" className='titlePokemons'>
                                <p>{name}</p>
                            </Typography>
                        </div>
                    </div>

                    <div className="imgPokemon">
                        <img className='cardModel' src={image} alt="pokemon imagem"/>
                    </div>

                    <CardActions className='titlePower'>
                        <div className={'powerAndWeightDetail'}>
                            <span>POWER: {base_experience}</span>
                            <span>{powerEvolution(base_experience)}</span>
                        </div>

                        <div className={'powerAndWeightDetail'}>
                            <span style={{display: 'flex', flexDirection: 'column'}}>WEIGHT: {weight}</span>
                            <span style={{color: 'darkred'}}>{weightEvolution(weight)}</span>
                        </div>
                    </CardActions>
                </div>

                <div className="flipCardBack">
                    <div className='contentInfo'>
                        <div className='contentTitlePokemonsCard'>
                            <Typography variant="h5" component="div" className='titleId'>
                                <p>n°{id}</p>
                            </Typography>
                            <Typography variant="h5" component="div" className='titlePokemons'>
                                <p>{name}</p>
                            </Typography>
                        </div>
                    </div>

                    <div className="containerBottomCardPokemons">
                        <div className="imgPokemonBack">
                            <img src={imageBack} alt="pokemon imagem"/>
                            <img src={imageBack2} alt="pokemon imagem"/>
                        </div>

                        <CardContent className='contentInfoBack'>
                            <CardActions variant="h5" component="div">
                                <p className='titleIdBack'>Tipo: {types}
                                    <span style={{position:'relative',top:'8px',left:'5px'}}>
                                        {getType(types)}
                                    </span>
                                </p>
                            </CardActions>
                            <CardActions className='titlePowerBack'>
                                <p className={'iconAttacks'}>
                                    <img src={iconAttacks} alt=""/> Habilidades:
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
