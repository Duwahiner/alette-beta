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
    containerViewAlette_9: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        margin-top: 200px;
        margin-bottom: 200px;
        background-color: ${'colors.rgbAlette.rgb1(0)'}
    `,
    containerViewAlette_9img: css`
        width: 60%;
        height: 600px;
        flex: none;
        background: ${colors.rgbAlette.rgb1(1)} url(${imgs.$img5}) center center no-repeat;
        background-size: cover;
    `,
    containerViewAlette9Lectura: css`
        width: ${dimensions.containers.width}%;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
    `,
    viewAlette_9Title: css`
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
    containerViewAlette_9Bottons: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: none;
    `,
}

const ViewImgsGanasTiempo = (props) => {
    return (
        <div css={styles.containerViewAlette_9}>
            <div css={styles.containerViewAlette9Lectura}>
                <h2 css={styles.viewAlette_9Title}> Con Alette ganas tiempo y dinero </h2>
                <div  css={styles.containerViewAlette_9Bottons} >
                    <BottonSegundary />
                </div>
            </div>
            <div css={styles.containerViewAlette_9img}></div>
        </div>
    )
}

export default ViewImgsGanasTiempo;