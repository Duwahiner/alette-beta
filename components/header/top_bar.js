/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { jsx, css } from '@emotion/core';
import { dimensions, colors } from '../../public/global.config';
import Logo from '../header/logo';
import NavTopBar from '../header/nav_top_bar';
    
const styles = {
    containerTopBar: css`
        width: ${dimensions.containersChild.width}%;
        height: 100px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex: none;
    `
}

const TopBar = (props) => {
    return (
        <div css={styles.containerTopBar}>
            <Logo  setion={props.setion}  />
            <NavTopBar />
        </div>
    )
}

export default TopBar;