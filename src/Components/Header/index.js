import React from "react";
import './index.css'

import iconPokemon from '../../Assets/Icons/icon-pokemon-header.webp'
import {Link, useNavigate} from "react-router-dom";
// import {} from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();
    let contador = 1

    function pararEnvio(elemento) {
        elemento.preventDefault()
        console.log(`Form não foi enviado ${contador}`)
        contador++
    }

    function goToConnect() {
        navigate("/logar")
    }

    function goToRegister() {
        navigate("/registrar")
    }

    return (
        <div className='header' id='header'>
            <div className="ContentLeft">
                <Link to='/' className='hiddenMobile'>
                    <img src={iconPokemon} alt="ícone pokémon" className='iconPokemon'/>
                </Link>
                {/*<a href='http://localhost:3000/' className='hiddenDesktop'>*/}
                {/*    <img src={iconPokemon} alt="ícone pokémon" className='iconPokemon'/>*/}
                {/*</a>*/}
                <Link to='/'>Home</Link>
                <Link to='/pokedex'>Pokédex</Link>
                <a href='https://www.google.com/search?hl=pt-BR&sxsrf=ALiCzsYZ9O2tQIaP74eQ2c3egpq625tK1g:1672961843664&q=filmes+pok%C3%A9mon&spell=1&sa=X&ved=2ahUKEwje86fDzLH8AhX3mZUCHStmDnAQBSgAegQICBAB&biw=1280&bih=913&dpr=1'>Filmes</a>
                <a href='https://www.google.com/search?sxsrf=ALiCzsZFfPgo57PQoYzqH5oSD_WjvFUNnw:1672961785086&source=univ&tbm=isch&q=wallpaper+pokemon+4k&fir=qkU_O7dclmm1SM%252C6D6DeahR5SUnMM%252C_%253BnFp1tKbywUmPVM%252CMDw6CoTgSJfHQM%252C_%253BHrygFPzj0_qQsM%252CVIXzhgmOxgpphM%252C_%253BroC_HE8gFCNLnM%252Cund0Ijec3sAmCM%252C_%253BvSBh2nIELguB9M%252CqLii63vCzRC9gM%252C_%253BNhqCpQ4oGLOjJM%252C3bBwOAXpeKnRyM%252C_%253B3_QkBweVVd2ouM%252Cdc8J9zSNqWPg1M%252C_%253BDsKepQZMy1FceM%252CJ9MKoTzVoMewYM%252C_%253BVu0M7H8AWZ99nM%252CNRtMcOJNFyeNAM%252C_%253B9MHxy9jC_wojwM%252Cund0Ijec3sAmCM%252C_%253BfzaCb_YqevtwiM%252CjLGb2-gSpvJYiM%252C_%253B0X5JAo1ZRyRTAM%252ChPTCNiAvXls5tM%252C_&usg=AI4_-kQYo4x3QkzRpiGMLsvc2Z4fQQRI8A&sa=X&ved=2ahUKEwi81LCnzLH8AhXSq5UCHaRyDoQQjJkEegQICRAC&biw=1280&bih=913&dpr=1'>Wallpapers</a>
            </div>
            <div className="contentRight">
                <div className="input-group">
                    <input type="text"/>
                    <label placeholder="Pesquisar">Pesquisar...</label>
                </div>
                {/*<Link to="/">*/}
                {/*    Conectar*/}
                {/*</Link>*/}
                {/*<button onClick={gotoPokemon}>Conectar</button>*/}
                <button type={"button"} onClick={goToConnect}>Conecte-se</button>

                <button type={"button"} onClick={goToRegister}>Inscrever-se</button>


                {/*<a href='/registro' className='SignUp'>Inscrever-se</a>*/}
                {/*<Link to="/">*/}
                {/*    Cadastrar*/}
                {/*</Link>*/}
                {/*<button onClick={goToConnect}>Cadastrar</button>*/}
            </div>
        </div>
    )
}
export default Header
