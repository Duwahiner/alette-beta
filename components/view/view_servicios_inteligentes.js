/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors, svg } from '../../public/global.config'
import { ReactSVG } from 'react-svg';

const styles = {
    containerViewAlette_2: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)}
    `,
    containerViewAlette_2Lectura: css`
        width: ${dimensions.containersChild.width}%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: none;
        margin-top: 100px;
        margin-bottom: 100px;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
    `,
    viewAlette_2Title: css`
    ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*13}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 5px;
        margin-bottom: 20px;
        flex: none;
        
    `,
    viewAlette_2SubTitle: css`
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
    containerViewAlette_2Services: css`
        width: ${dimensions.containersChild.width}%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 40px;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
    `,
    containerViewAlette_2ServiceLectura: css`
        width: 500px;
        height: 280px;
        display: flex;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        border: solid 3px ${colors.rgbAlette.rgb1(1)};
        box-sizing: content-box;
        border-radius: 12px;
        margin: 20px;
    `,
    containerViewAlette_2ServicesSvg: css`
        ${fonts.fontAeonikLight()};
        width: 200px;
        height: 280px;
        display: flex;
        flex: none;
        justify-content: center;
        align-items: center;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.5}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        background-color: ${colors.rgbAlette.rgb1(1)};
        border-radius-left: 8px;
    `,
    viewAlette_2ServicesSvg: css`
        width: 105px;
        height: 105px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        
    `,
    containerViewAlette_2ServicesTitle: css`
        width: auto;
        height: 280px;
        display: flex;
        flex: auto;
        justify-content: center;
        align-items: center;
        background-color: ${colors.rgbAlette.rgb12Blanco(0)};
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        
    `,
    viewAlette_2ServicesTitle: css`
        ${fonts.fontAeonikBlack()};
        width: 90%;
        flex: none;
        font-family: fontAeonikBlack, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*2.5}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        background-color: ${'colors.rgbAlette.rgb12Blanco(0)'};
    `,
   
}

const ViewServiciosInteligentes = (props) => {
    return (
        <div css={styles.containerViewAlette_2}>
            <div css={styles.containerViewAlette_2Lectura}>
                <h2 css={styles.viewAlette_2Title}>Servicios inteligentes</h2>
                <p css={styles.viewAlette_2SubTitle} > Lo mejor de lo mejor en cuidado integral personal para hombre y mujer.</p>
                <div css={styles.containerViewAlette_2Services} >
                    
                    {/* Componente 1 ===>>>> Salas de belleza */}
                    <div css={styles.containerViewAlette_2ServiceLectura}>
                        <div css={styles.containerViewAlette_2ServicesSvg}>
                            <div css={styles.viewAlette_2ServicesSvg}> <ReactSVG src={svg.servicesSvg1} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_2ServicesTitle}>
                            <p css={styles.viewAlette_2ServicesTitle}>Salas de belleza</p>
                        </div>
                    </div>

                    {/* Componente 2 ===>>>> Spas */}
                    <div css={styles.containerViewAlette_2ServiceLectura}>
                        <div css={styles.containerViewAlette_2ServicesSvg}>
                            <div css={styles.viewAlette_2ServicesSvg}> <ReactSVG src={svg.servicesSvg2} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_2ServicesTitle}>
                            <p css={styles.viewAlette_2ServicesTitle}>Spas</p>
                        </div>
                    </div>

                    {/* Componente 3 ===>>>> Peluquerías */}
                    <div css={styles.containerViewAlette_2ServiceLectura}>
                        <div css={styles.containerViewAlette_2ServicesSvg}>
                            <div css={styles.viewAlette_2ServicesSvg}> <ReactSVG src={svg.servicesSvg3} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_2ServicesTitle}>
                            <p css={styles.viewAlette_2ServicesTitle}>Peluquerías</p>
                        </div>
                    </div>

                    {/* Componente 4 ===>>>> Clinicas de estética */}
                    <div css={styles.containerViewAlette_2ServiceLectura}>
                        <div css={styles.containerViewAlette_2ServicesSvg}>
                            <div css={styles.viewAlette_2ServicesSvg}> <ReactSVG src={svg.servicesSvg4} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_2ServicesTitle}>
                            <p css={styles.viewAlette_2ServicesTitle}>Clinicas de estética</p>
                        </div>
                    </div>

                    {/* Componente 5 ===>>>> Gimnasios */}
                    <div css={styles.containerViewAlette_2ServiceLectura}>
                        <div css={styles.containerViewAlette_2ServicesSvg}>
                            <div css={styles.viewAlette_2ServicesSvg}> <ReactSVG src={svg.servicesSvg5} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_2ServicesTitle}>
                            <p css={styles.viewAlette_2ServicesTitle}>Gimnasios</p>
                        </div>
                    </div>

                    {/* Componente 6 ===>>>> Profesional para el ciudado personal */}
                    <div css={styles.containerViewAlette_2ServiceLectura}>
                        <div css={styles.containerViewAlette_2ServicesSvg}>
                            <div css={styles.viewAlette_2ServicesSvg}> <ReactSVG src={svg.servicesSvg6} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_2ServicesTitle}>
                            <p css={styles.viewAlette_2ServicesTitle}>Profesional para el ciudado personal</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewServiciosInteligentes;