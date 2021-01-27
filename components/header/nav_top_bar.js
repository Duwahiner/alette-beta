/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, colors, fonts, svg } from '../../public/global.config';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';
import { constants } from 'crypto';
    
const styles = {
    containerNavTopBarAlette: css`
        width: auto;
        height: 100px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        display: flex;
        align-items: center;
        flex: none;
    `,
    navTopBarAletteSpan: css`
        ${fonts.fontAeonikLight()};
        width: auto;
        height: 20px;
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*1.6}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        line-height: 22px;
        text-transform: uppercase;
        padding-left: 30px;
        box-sizing: border-box;
        transition: all 0.8s;
        cursor: pointer;
        &:hover{
            color: #000;
        }
    `,
    navTopBarAletteSpanSvg: css`
        width: 27px;
        height: 16px;
        display: flex;
        display: block;
        margin-top: 0px;
        margin-left: 30px;
        box-sizing: border-box;
        transition: all 0.8s;
        cursor: pointer;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
    `,
    menuSvg: css`
        width: 27px;
        height: 16px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        &:hover{
            fill: #000;
        }
    `,
    aSpan: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,
}

function open(e) {
    const navHidden = document.getElementById('navHidden');
    navHidden.style.display = 'block';
    //console.log( navHidden )
}

const NavTopBar = (props) => {
    return (
        <div css={styles.containerNavTopBarAlette}>
            <Global 
                styles={
                    css`
                    
                    `
                }
            />
             <Link href='/club'>
                <a css={styles.aSpan} > <span css={styles.navTopBarAletteSpan} > CLUBS </span> </a>
            </Link>
            <Link href='/planes'>
                <a css={styles.aSpan} > <span css={styles.navTopBarAletteSpan} > PLANES </span> </a>
            </Link>
            <div css={css`${styles.navTopBarAletteSpanSvg}`}>
                <a onClick={open} css={styles.aSpan} > <ReactSVG src={svg.svgIcons2} css={styles.menuSvg}/> </a>
            </div>
        </div>
    )
}

export default NavTopBar;