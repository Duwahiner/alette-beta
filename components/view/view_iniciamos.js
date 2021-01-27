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
    containerViewAlette_10: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb1(0)'}
    `,
    containerViewAlette_10Lectura: css`
        width: ${dimensions.containersChild.width}%;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
    `,
    viewAlette_10Title: css`
    ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*13}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 5px;
        margin-bottom: 20px;
        flex: none;
        
    `,
    viewAlette_10SubTitle: css`
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
}

const ViewImgsIniciemos = (props) => {
    return (
        <div css={styles.containerViewAlette_10}>
            <div css={styles.containerViewAlette_10Lectura}>
                <h2 css={styles.viewAlette_10Title}> Iniciamos con la trabesida </h2>
                <p css={styles.viewAlette_10SubTitle} >Quires iniciar la trabesida con Alette, solicitar una tarjeta para comenzar a gosar de los todos los beneficio que tenemos para ti</p>
                <BottonPrimary />
            </div>
        </div>
    )
}

export default ViewImgsIniciemos;