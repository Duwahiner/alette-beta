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

const styles = {
    containerBottomBar: css`
        width: ${dimensions.containersChild.width}%;
        height: 60px;
        background-color: ${"colors.rgbAlette.rgb12Blanco(1)"};
        display: flex;
        flex-direction: fow;
        justify-content: center;
        flex: none;
    `,
    flecha: css`
        width: 60px;
        height: 60px;
        background-color: ${"colors.rgbAlette.rgb12Blanco(1)"};
        flex: none;
    `
}


const BottomBar = (props) => {
    return (
        <div css={styles.containerBottomBar}>
            <div css={styles.flecha} >
                <ReactSVG src={svg.svgIcons1} />
            </div>
        </div>
    )
}

export default BottomBar;