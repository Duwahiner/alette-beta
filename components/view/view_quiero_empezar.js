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
    containerViewAlette_3: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb1(0)'}
    `,
    containerViewAlette_3Lectura: css`
        width: ${dimensions.containersChild.width}%;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
    `,
    viewAlette_3Title: css`
    ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*13}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 5px;
        margin-bottom: 20px;
        flex: none;
        
    `,
    viewAlette_3SubTitle: css`
    ${fonts.fontAeonikLight()};
        width: 70%;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.5}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 0px;
        margin-bottom: 40px;
        line-height: 40px;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
        
    `,
    containerViewAlette_3Bottons: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: none;
    `,
    viewAlette_3Bottons: css`
    ${fonts.fontAeonikLight()};
        width: 280px;
        height: 64px;
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.5}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        margin-left: 20px;
        margin-right: 20px;
        letter-spacing: 0px;
        line-height: 64px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb2(1)};
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.4s;
        &:hover{
            background-color: ${colors.rgbAlette.rgb18(1)};
        }
    `,
    aSpan: css`
        width: auto;
        height: auto;
        display: block;
        text-decoration: none;
    `,
}

const ViewQuieroEmpezar = (props) => {
    return (
        <div css={styles.containerViewAlette_3}>
            <div css={styles.containerViewAlette_3Lectura}>
                <h2 css={styles.viewAlette_3Title}> Los planes están inrresistibles </h2>
                <p css={styles.viewAlette_3SubTitle} > Los planes que Alette ha creado para ti estan hecho a la medida para que sea fácil afiliarte a nosotros y empezar a disfrutar de todos los clubs subscrito a nuestra red.</p>
                <div css={styles.containerViewAlette_3Bottons} >
                    <Link href='/hombre'>
                        <a css={styles.aSpan} > <span css={styles.viewAlette_3Bottons} > QUIERO VER PLANES </span>  </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ViewQuieroEmpezar;