/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors } from '../../public/global.config'
import Link from 'next/link';

const styles = {
    containerBottonPrimary: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: none;
    `,
    bottonPrimary: css`
    ${fonts.fontAeonikLight()};
        width: 330px;
        height: 64px;
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.5}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        letter-spacing: 0px;
        line-height: 64px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb1(1)};
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.4s;
        &:hover{
            background-color: ${colors.rgbAlette.rgb20(1)};
        }
    `,
    aSpan: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,

}

const BottonPrimary = (props) => {
    return (
        <div css={styles.containerBottonPrimary}>
            <Link href='/tarjeta'>
                <a css={styles.aSpan} > <span css={styles.bottonPrimary} > SOLICITAR TARJETAS </span> </a>
            </Link>
        </div>
    )
}

export default BottonPrimary;