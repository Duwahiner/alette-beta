/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors } from '../../public/global.config'
import BottonPrimary from './botton_primary';

const styles = {
    containerViewAlette_1: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb1(1)}
    `,
    containerViewAlette_1Lectura: css`
        width: ${dimensions.containersChild.width}%;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
    `,
    viewAlette_1Title: css`
    ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*13}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        letter-spacing: 5px;
        margin-bottom: 20px;
        flex: none;
        
    `,
    viewAlette_1SubTitle: css`
    ${fonts.fontAeonikLight()};
        width: 70%;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.5}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        letter-spacing: 0px;
        margin-bottom: 40px;
        line-height: 40px;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
        
    `,
}

const ViewComenzarAventura = (props) => {
    return (
        <div css={styles.containerViewAlette_1}>
            <div css={styles.containerViewAlette_1Lectura}>
                <h2 css={styles.viewAlette_1Title}> Comenzar aventura</h2>
                <p css={styles.viewAlette_1SubTitle} > Alette dispone de los mejores clubes para hombre y mujeres en la ciudad de Medellín. Conoce más abajo.</p>
                <BottonPrimary />
            </div>
        </div>
    )
}

export default ViewComenzarAventura;