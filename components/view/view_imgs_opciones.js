/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors, imgs } from '../../public/global.config'
import BottonSegundary from './botton_segundary';


const styles = {
    containerViewAlette_4: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        margin-top: 200px;
        margin-bottom: 200px;
        background-color: ${'colors.rgbAlette.rgb1(0)'}
    `,
    containerViewAlette_4img: css`
        width: 60%;
        height: 600px;
        flex: none;
        background: ${colors.rgbAlette.rgb1(1)} url(${imgs.$img2}) center center no-repeat;
        background-size: cover;
    `,
    containerViewAlette4Lectura: css`
        width: ${dimensions.containers.width}%;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
    `,
    viewAlette_4Title: css`
    ${fonts.fontHeadingProHeavy()};
        width: 90%;
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*8}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 5px;
        margin-bottom: 20px;
        flex: none;
        
    `,
    containerViewAlette_4Bottons: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: none;
    `
}

const ViewImgsOpciones = (props) => {
    return (
        <div css={styles.containerViewAlette_4}>
            <div css={styles.containerViewAlette_4img}></div>
            <div css={styles.containerViewAlette4Lectura}>
                <h2 css={styles.viewAlette_4Title}> Todo un mundo de opciones </h2>
                <div  css={styles.containerViewAlette_4Bottons} >
                    <BottonSegundary />
                </div>
            </div>
        </div>
    )
}

export default ViewImgsOpciones;