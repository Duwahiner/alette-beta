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
    containerViewAlette_6: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)}
    `,
    containerViewAlette_6Lectura: css`
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
    containerViewAlette_6Services: css`
        width: ${dimensions.containersChild.width}%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 40px;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
    `,
    containerViewAlette_6ServiceLectura: css`
        width: 500px;
        height: 280px;
        display: flex;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        border: solid 3px ${colors.rgbAlette.rgb13Negro(1)};
        box-sizing: content-box;
        border-radius: 12px;
        margin: 20px;
    `,
    containerViewAlette_6ServicesSvg: css`
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
        background-color: ${colors.rgbAlette.rgb13Negro(1)};
        border-radius-left: 8px;
    `,
    viewAlette_6ServicesSvg: css`
        width: 105px;
        height: 105px;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
        
    `,
    containerViewAlette_6ServicesTitle: css`
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
    viewAlette_6ServicesTitle: css`
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

const ViewBeneficiosItems = (props) => {
    return (
        <div css={styles.containerViewAlette_6}>
            <div css={styles.containerViewAlette_6Lectura}>
                <div css={styles.containerViewAlette_6Services} >
                    
                    {/* Componente 1 ===>>>> Muchos clubes de un solo vistasos */}
                    <div css={styles.containerViewAlette_6ServiceLectura}>
                        <div css={styles.containerViewAlette_6ServicesSvg}>
                            <div css={styles.viewAlette_6ServicesSvg}> <ReactSVG src={svg.beneficiosSvg1} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_6ServicesTitle}>
                            <p css={styles.viewAlette_6ServicesTitle}>Muchos clubes de un solo vistasos</p>
                        </div>
                    </div>

                    {/* Componente 1 ===>>>> Elige el más cercano o el de tu preferencia */}
                    <div css={styles.containerViewAlette_6ServiceLectura}>
                        <div css={styles.containerViewAlette_6ServicesSvg}>
                            <div css={styles.viewAlette_6ServicesSvg}> <ReactSVG src={svg.beneficiosSvg2} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_6ServicesTitle}>
                            <p css={styles.viewAlette_6ServicesTitle}>Elige el más cercano o el de tu preferencia</p>
                        </div>
                    </div>

                     {/* Componente 1 ===>>>> Mas de 70 servicios a tu disposición */}
                     <div css={styles.containerViewAlette_6ServiceLectura}>
                        <div css={styles.containerViewAlette_6ServicesSvg}>
                            <div css={styles.viewAlette_6ServicesSvg}> <ReactSVG src={svg.beneficiosSvg1} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_6ServicesTitle}>
                            <p css={styles.viewAlette_6ServicesTitle}>Mas de 70 servicios a tu disposición</p>
                        </div>
                    </div>

                    {/* Componente 1 ===>>>> Profesionales de top nacional */}
                    <div css={styles.containerViewAlette_6ServiceLectura}>
                        <div css={styles.containerViewAlette_6ServicesSvg}>
                            <div css={styles.viewAlette_6ServicesSvg}> <ReactSVG src={svg.beneficiosSvg3} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_6ServicesTitle}>
                            <p css={styles.viewAlette_6ServicesTitle}>Profesionales de top nacional</p>
                        </div>
                    </div>

                    {/* Componente 5 ===>>>> Obtén descuento en  cada uno de  tus compras */}
                    <div css={styles.containerViewAlette_6ServiceLectura}>
                        <div css={styles.containerViewAlette_6ServicesSvg}>
                            <div css={styles.viewAlette_6ServicesSvg}> <ReactSVG src={svg.beneficiosSvg4} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_6ServicesTitle}>
                            <p css={styles.viewAlette_6ServicesTitle}>Obtén descuento en  cada uno de  tus compras</p>
                        </div>
                    </div>

                    {/* Componente 6 ===>>>> Ganas tiempo y dinero */}
                    <div css={styles.containerViewAlette_6ServiceLectura}>
                        <div css={styles.containerViewAlette_6ServicesSvg}>
                            <div css={styles.viewAlette_6ServicesSvg}> <ReactSVG src={svg.beneficiosSvg5} /> </div>
                        </div>
                        <div css={styles.containerViewAlette_6ServicesTitle}>
                            <p css={styles.viewAlette_6ServicesTitle}>Ganas tiempo y dinero</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default ViewBeneficiosItems;