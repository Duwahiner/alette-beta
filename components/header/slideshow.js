/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, colors, fonts } from '../../public/global.config';

const styles = {
    containerSlideshow: css`
        width: ${dimensions.containersChild.width}%;
        height: auto;
        background-color: ${"colors.rgbAlette.rgb2(1)"};
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: auto;
    `,
    containerSlideshowTitle: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${"colors.rgbAlette.rgb2(1)"};
        flex: none;
    `,
    slideshowTitle: css`
        ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*14}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        letter-spacing: 12px;
        
    `,
    containerSlideshowSpan: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        flex: none;
    `,
    slideshowSpan: css`
        ${fonts.fontAeonikBlack()};
        display: block;
        font-family: fontAeonikBlack, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.6}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        text-transform: uppercase;
    `
}


const Slideshow = (props) => {
    return (
        <div css={styles.containerSlideshow}>
            <div css={styles.containerSlideshowTitle}>
                <h1 css={styles.slideshowTitle}> HOLA, GANADOR </h1>
            </div>
            <div css={styles.containerSlideshowSpan}>
                <span css={styles.slideshowSpan}> Salas de belleza </span>
            </div>
        </div>
    )
}

export default Slideshow;