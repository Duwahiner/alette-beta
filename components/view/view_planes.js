/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors, svg } from '../../public/global.config'

const styles = { 
conten_planes_doogsk: css `
    width: ${dimensions.containers.width}%;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
 `,
conten_planes_full: css `
    width: ${dimensions.containersChild.width}%;
    max-width: 1200px;
    height: auto;
    display: flex;
`,
planes_doogsk_full: css` 
    width: 400px;
    height: 270px;
`,
conten_planes_doogsk_title: css`
    width: 100%;
    height: 100px;
    background-color: coral;
    display: flex;
    justify-content: center;
    align-items: center;
`,
planes_doogsk_full_title: css`
    ${fonts.fontAeonikBold()}
    font-family: fontAeonikBold,  sans-serif;
    color: #fff;
    font-size: 40px;
`,
conten_planes_doogsk_detalles: css`
    width: 100%;
    height: 170px;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`,
doogsk_full_detalles: css`
    ${fonts.fontAeonikRegular()}
    font-family: fontAeonikRegular, sans-serif;
    color: #666666;
    font-size: 18px;
    line-height:25px;
    text-align: center;
`,

doogsk_full_detalles_duracion: css`
    ${fonts.fontAeonikRegular()}
    font-family: fontAeonikRegular, sans-serif;
    color: ${colors.rgbAlette.rgb13Negro(1)};
    font-size: ${fonts.fontSize*3}px;
    line-height:25px;
    text-align: center;
`,

doogsk_full_detalles_precio: css`
    ${fonts.fontAeonikBlack()}
    font-family: fontAeonikBlack, sans-serif;
    color: ${colors.rgbAlette.rgb13Negro(1)};
    font-size: ${fonts.fontSize*4}px;
    line-height:25px;
    text-align: center;
`
}

const ViewPlanes = (props) => {
    return (
        <div css={styles.conten_planes_doogsk}>
            <div css={styles.conten_planes_full}>
                <div css={
                css `
                        ${styles.planes_doogsk_full}
                        background-color: ${colors.rgbAlette.rgb21(1)}
                    `
                }>
                    
                    <div css={
                        css`
                            ${styles.conten_planes_doogsk_title}
                            background-color: ${props.background}
                        `}
                    >
                        <p css={ styles.planes_doogsk_full_title } > SERVICIOS </p>
                    </div>
                    <div css={styles.conten_planes_doogsk_detalles}>
                        <p css={styles.doogsk_full_detalles}> {props.detalles} </p>
                    </div>
                </div>

                <div css={
                    css `
                        ${styles.planes_doogsk_full}
                        background-color: ${colors.rgbAlette.rgb21(0.6)}
                    `
                }>
                    <div css={
                        css`
                            ${styles.conten_planes_doogsk_title}
                            background-color: ${props.background}
                        `}
                    >
                        <p css={ styles.planes_doogsk_full_title}> DURACIÓN </p>
                    </div>
                    <div css={styles.conten_planes_doogsk_detalles}>
                        <p css={styles.doogsk_full_detalles_duracion}> {props.ano} </p>
                    </div>
                </div> 

                <div css={
                    css`
                        ${styles.planes_doogsk_full}
                        background-color: ${colors.rgbAlette.rgb21(1)}
                    `
                }>
                    <div css={
                        css`
                            ${styles.conten_planes_doogsk_title}
                            background-color: ${props.background}
                        `}
                    >
                    <p css={ styles.planes_doogsk_full_title}> PRECIO </p>
                    </div>
                    <div css={styles.conten_planes_doogsk_detalles}>
                        <p css={styles.doogsk_full_detalles_precio}> {props.precio} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPlanes;