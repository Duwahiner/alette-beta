/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React, { Component } from 'react';
import Head from 'next/head';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, colors } from '../public/global.config';
import TopBar from '../components/header/top_bar';
import Slideshow from '../components/header/slideshow';
import BottomBar from '../components/header/bottom_bar';
import Footer from '../components/footer/footer'
import NavHidden from '../components/header/nav_hidden';

const styles = {
    containerAlettePosition: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        position: relative;
    `,
    containerAlette: css`
        width: ${dimensions.containers.width}%;
        height: 100%;
        position: absolute;
        display: block;
        z-index: 4;
        top: 0px;
        left: 0px;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)};
    `,
    containerHeader: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    containerMain: css`
        width: ${dimensions.containers.width}%;
        height: auto;
    `,
    containerFooter: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: fles;
        justify-content: center;
    `,
}
class Layaut extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div css={styles.containerAlettePosition} >
                <NavHidden 
                    display={this.props.display}
                />
                 <div css={ css `${styles.containerAlette}` }>
                    <Global 
                        styles={
                            css`
                                ::-webkit-scrollbar {
                                    width: 8px;
                                    display: block;
                                }
                                ::-webkit-scrollbar-thumb {
                                    width: 4px;
                                    background-color: ${colors.rgbAlette.rgb1(0.6)};
                                    transition: background 5s linear;
                                }
                                ::-webkit-scrollbar-thumb:hover {
                                    background-color: ${colors.rgbAlette.rgb1(1)};
                                }
                                ::-webkit-scrollbar-track{
                                    background-color: ${colors.rgbAlette.rgb1(0.3)};
                                }
                                .display{
                                    display: block;
                                }
                            `
                        }
                    />
                    {/*>>>>>>> Head datos claves que definiran la pagina;*/}
                    <Head>
                        <title> {this.props.title} </title>
                        <meta name="description" content="alette, peluqueria, salon de belleza, spas" />
                    </Head>

                    {/*>>>>>>> Header menu de navegacion, slider y entre otro datos de entra de la pagina;*/}
                    <header css={
                        css`
                            ${styles.containerHeader} 
                            height: ${this.props.height}${this.props.dimens};
                            background: ${colors.rgbAlette.rgb1(1)} url(${this.props.img}) center center no-repeat;
                            background-size: cover;
                        `
                    }>
                        <TopBar setion={this.props.setion} />
                        {
                            this.props.active  ? <Slideshow /> : ""
                        }
                        {
                            this.props.active  ?  <BottomBar /> : ""
                        }
                    </header>

                    {/*>>>>>>> Main informacion importante de la pagina;*/}
                    <main css={styles.containerMain}>
                        {  this.props.children }
                    </main>

                    {/*>>>>>>> Footer datos de contacto de la pagina;*/}
                    <footer css={styles.containerFooter}>
                        <Footer />
                    </footer>
                </div>
            </div>
           
        )
    }
}

export default Layaut;