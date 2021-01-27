/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, colors, fonts, svg } from '../../public/global.config';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

const styles = {
    containerSlideshow: css`
        width: ${dimensions.containers.width}%;
        height: 100%;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)};
        flex: auto;
        position: absolute;
        display: block;
        z-index: 100000;
        top: 0px;
        left: 0px;
        
    `,
    containerNavHidden: css`
        width: ${dimensions.containers.width}%;
        height: 100%;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)};
        display:  flex;
        justify-content: center;
        align-items: center;
        position: fixed;
    `,
    containerNav: css`
        width: ${dimensions.containers.width-30}%;
        height: 500px;;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        flex: none;
        display: flex;
        flex-direction: column;
    `,
    containerSlideshowDesvanecer: css`
        width: ${dimensions.containers.width}%;
        height: 100%;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)};
        flex: auto;
        position: absolute;
        display: none;
    `,
    containerSlideshowTitle: css`
        width: ${dimensions.containers.width}%;
        height: 100px;
        background-color: ${"colors.rgbAlette.rgb2(1)"};
        flex: none;
    `,
    slideshowTitle: css`
        ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*7}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 5px;
        
    `,
    containerSlideshowSpan: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        display: flex;
        flex: auto;
    `,
    slideshowSpan: css`
        ${fonts.fontAeonikBlack()};
        display: block;
        font-family: fontAeonikBlack, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.6}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        text-transform: uppercase;
    `,

    containerNavSvg: css`
        width: 50%;
        height: auto;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
        display:  flex;
        justify-content: center;
        align-items: center;
        flex: auto;
    `,
    navSvg: css`
        width: 248px;
        height: 200px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: none;
    `,
    containerNavItems: css`
        width: 50%;
        height: auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: auto;
        border-left: solid 1px ${colors.rgbAlette.rgb22(1)};
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:  center;
        
    `,
    containerNavItemsLink: css`
        width: 90%;
        height: 60px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: none;
        border-bottom: solid 1px ${colors.rgbAlette.rgb22(1)};
        box-sizing: content-box;
    `,
    aSpan: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,
    aSpanNav: css`
        ${fonts.fontAeonikLight()};
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.6}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        text-transform: uppercase;
        cursor: pointer;
        line-height: 60px;
        transition: all 0.4s linear;
        &:hover{
            color: ${colors.rgbAlette.rgb1(1)};
        }
    `,
    cerrarSpan: css`
        ${fonts.fontAeonikLight()};
        width: auto;
        height: auto;
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*1.5}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        background-color: ${colors.rgbAlette.rgb1(1)};
        text-transform: uppercase;
        padding: 15px;
        cursor: pointer;
        line-height: 20px;
        transition: all 0.4s linear;
        position: absolute;
        top: 20px;
        right: 20px;
        border-radius: 4px;
        &:hover{
            background-color: ${colors.rgbAlette.rgb20(1)}; 
        }
    `,

}

function closed(e) {
    const navHidden = document.getElementById('navHidden');
    navHidden.style.display = 'none';
    //console.log( navHidden )
}

const NavHidden = (props) => {
    return (
        <div id='navHidden' css={css`${styles.containerSlideshow} display: ${props.display}`}>
            
            <div css={styles.containerNavHidden} >
            <span id='closed' onClick={closed} css={styles.cerrarSpan} > CERRAR MENU </span>
                <div css={styles.containerNav} >
                    <div css={styles.containerSlideshowTitle}>
                        <h1 css={styles.slideshowTitle}> Hola, que desear hacer </h1>
                    </div>
                    <div css={styles.containerSlideshowSpan}>
                        <div css={styles.containerNavSvg} >
                            <div css={styles.navSvg}> <ReactSVG src={svg.logo('logo_nav')} /> </div>
                        </div>
                        <div css={styles.containerNavItems} >
                            <div css={styles.containerNavItemsLink} >
                                <Link href='/'>
                                    <a css={styles.aSpan} > <span css={styles.aSpanNav}> INICIO </span> </a>
                                </Link>
                            </div>
                            <div css={styles.containerNavItemsLink} >
                                <Link href='/alette'>
                                    <a css={styles.aSpan} > <span css={styles.aSpanNav} > QUE ES ALETTE </span> </a>
                                </Link>
                            </div>
                            <div css={styles.containerNavItemsLink} >
                                <Link href='/servicios'>
                                    <a css={styles.aSpan} > <span css={styles.aSpanNav} > SERVICIOS </span> </a>
                                </Link>
                            </div>
                            <div css={styles.containerNavItemsLink} >
                                <Link href='/tarjeta'>
                                    <a css={styles.aSpan} > <span css={styles.aSpanNav} > SOLICITAR TARJETA </span> </a>
                                </Link>
                            </div>
                            <div css={styles.containerNavItemsLink} >
                                <Link href='/contacto'>
                                    <a css={styles.aSpan} > <span css={styles.aSpanNav} > CONTACTO </span> </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavHidden;