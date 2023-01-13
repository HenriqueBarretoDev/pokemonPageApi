import React from "react";
import './index.css'
import iconGloboFooter from '../../Assets/Icons/globocom-footer-icon.svg'
import pokebolaIcon from '../../Assets/Icons/icon-pokemon-header.webp'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="contentTop">
                <div className="contentTopLeft">
                    <a href='#header' >Pokemon Super</a>
                </div>

                <div className="contentTopRight">
                    <a href="https://www.globo.com/todos-os-sites/">Pokémons</a>

                    <a href="http://g1.globo.com/principios-editoriais-do-grupo-globo.html">Filmes</a>

                    <a href="https://privacida
                    de.globo.com/privacy-policy/">Política de privacidade</a>

                    <a href="https://negocios8.redeglobo.com.br/Paginas/Midia-Kit.aspx">Anuncie conosco</a>

                    <a href="https://login.globo.com/login/7029/connect-confirm?url=https%3A%2F%2Fid.globo.com%2Fauth%2Frealms%2Fglobo.com%2Flogin-actions%2Fauthenticate%3Fsession_code%3D5NkwWatoKYg1Zz4tHm4FS_-3WL3WMdtrKuFgJx6qzwE%26execution%3Db5dd88dc-447e-468f-945e-e7c7de4883b7%26client_id%3Dminha-conta-producao-v2%2540apps.globoid%26tab_id%3DtSlsePLSaSk%26request-context%3DEUClGZ&error=&request-context=EUClGZ">
                        Minha conta</a>

                </div>
            </div>

            <div className="contentDown">
                <img src={pokebolaIcon} alt="ícone-globo"/>
                <p>© Copyright 2000-{new Date().getFullYear()} Pokemon Super S.A.</p>

            </div>

        </div>
    )
}

export default Footer
