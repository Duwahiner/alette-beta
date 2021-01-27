/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors} from '../public/global.config'
import ViewComenzarAventura from './view/view_comenzar_eventura';
import ViewPlanes from './view/view_planes';

const styles = {
    containerInicio: css`
        width: ${dimensions.containers.width}%;
        height: auto;
    `,
    containerAletteContenido: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex; 
        flex-direction: column;
        justify-content:  center;
        
    `,

    containerQeEsAlette: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb21(1)}
    `,
    containerQeEsAletteColor: css`
         width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb12Blanco(1)}
    `,
    containerQeEsAletteLectura: css`
        width: 65%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb21(1)'};
        padding-top: 150px;
        padding-bottom: 200px;
    `,
    containerQeEsAletteLecturaTitle: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb21(1)'};
        border-bottom: solid 3px ${colors.rgbAlette.rgb1(1)};
        box-sizing: content-box;
    `,
    qeEsAletteLecturaTitle: css`
    ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*9}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 5px;
        margin-bottom: 0px;
        flex: none;
        
    `,

    containerSevicesItems: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb21(1)'};
        margin-bottom: 100px;
    `,

    containerSevicesItemsMujer: css`
        width: ${dimensions.containersChild.width}%;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
    `,
    containerSevicesItemsMujer: css`
        width: ${dimensions.containersChild.width}%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
    `,
    conten_data_1_planes: css`
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    title_data_1_planes: css`
        ${fonts.fontAeonikBlack()}
        font-family: fontAeonikBlack,  sans-serif;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        font-size: 40px;
    `,
 
}

const Mujer = (props) => {
    return (
        <div css={styles.containerInicio}>

            { /* Aqui inicia el contenido que es propio de la sesion Alette */}
            <div css={styles.containerAletteContenido}>
                { /* Servicios para ellas */}
                <div css={styles.containerQeEsAlette} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Estamos entuciasmado de saver que estas aquí </h2>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Plan junior */}
            <div css={
                css `
                    ${styles.conten_data_1_planes}
                    background-color: ${colors.rgbAlette.rgb2(1)}
                `
            }>
                <h2 css={styles.title_data_1_planes}> Plan → Junior Alette club </h2>
            </div>
            <ViewPlanes
                background={colors.rgbAlette.rgb2(1)}
                detalles="Pedicure, manicure + descuetos del 20%  + Crédito de (1) servicio por mes."
                ano="6 Meses"
                precio="$ 15.000"
            />

            {/* Plan gold plus */}
            <div css={
                css `
                    ${styles.conten_data_1_planes}
                    background-color: ${colors.rgbAlette.rgb1(1)}
                `
            }>
                <h2 css={styles.title_data_1_planes}> Plan → Alette gold plus club </h2>
            </div>
            <ViewPlanes
                background={colors.rgbAlette.rgb1(1)}
                detalles="Descuetos del 50% + Crédito en todos los servicio durante un (1) mes."
                ano="12 Meses"
                precio="$ 50.000"
            />

            {/* Plan gold */}
            <div css={
                css `
                    ${styles.conten_data_1_planes}
                    background-color: ${colors.rgbAlette.rgb2(1)}
                `
            }>
                <h2 css={styles.title_data_1_planes}> Plan → Alette gold club </h2>
            </div>
            <ViewPlanes
                background={colors.rgbAlette.rgb2(1)}
                detalles="Descuetos del 30% + Crédito de (2) servicio por mes."
                ano="12 Meses"
                precio="$ 25.000"
            />

            <ViewComenzarAventura />

        </div>
    )
}

export default Mujer;