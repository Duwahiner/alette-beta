/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { jsx, css } from '@emotion/core';
import { dimensions, colors, fonts, svg } from '../../public/global.config';
import { ReactSVG } from 'react-svg';
    
const styles = {
    containerTopBarLogo: css`
        width: auto;
        height: 100px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        display: flex;
        align-items: center;
        flex: none;
    `,
    topBarLogo: css`
        width: 100px;
        height: auto;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        margin-right: 20px;
        display: flex
        flex: none;
        cursor: pointer;
    `,
    containerTopBarLogoSvg: css`
        width: 100px;
        height: auto;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        margin-right: 30px;
        flex: none;
        align-items: center;
        cursor: pointer;
    `,
    containerTopBarActive: css`
        width: auto;
        height: 80px;
        background-color: ${'colors.rgbAlette.rgb12Blanco(1)'};
        display: flex;
        align-items: center;
        flex: none;
    `,
    topBarActiveSpan: css`
        ${fonts.fontAeonikLight()};
        width: auto;
        height: 40px;
        display: block;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*1.6}px;
        color: ${colors.rgbAlette.rgb1(1)};
        line-height: 40px;
        text-transform: uppercase;
        padding-left: 20px;
        border-left: solid 1px ${colors.rgbAlette.rgb12Blanco(1)};
        box-sizing: border-box;
        box-sizing: content-box;
    `,
}

const Logo = (props) => {
    return (
        <div css={styles.containerTopBarLogo}>
            <div css={styles.topBarLogo}>
                <div css={styles.containerTopBarLogoSvg} >
                    <ReactSVG src={svg.logo('logo_footer')}/>
                </div>
            </div>
            <div css={styles.containerTopBarActive}>
                <span css={styles.topBarActiveSpan}> {props.setion} </span>
            </div>
        </div>
    )
}

export default Logo;