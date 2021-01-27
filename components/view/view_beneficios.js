/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors } from '../../public/global.config'

const styles = {
    containerViewAlette_5: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb1(0)'}
    `,
    containerViewAlette_5Lectura: css`
        width: ${dimensions.containersChild.width}%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
    `,
    viewAlette_5Title: css`
    ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*13}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 5px;
        margin-bottom: 20px;
        flex: none;
        
    `,
    viewAlette_5SubTitle: css`
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
        
    `
}

const ViewBeneficios = (props) => {
    return (
        <div css={styles.containerViewAlette_5}>
            <div css={styles.containerViewAlette_5Lectura}>
                <h2 css={styles.viewAlette_5Title}> Beneficios extraordinarios </h2>
                <p css={styles.viewAlette_5SubTitle} > Alette dispone de los mejores clubes de la ciudad de Medellín. </p>
            </div>
        </div>
    )
}

export default ViewBeneficios;