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
    containerItems: css`
        width: 322px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb2(0)};
        margin-top: 20px;
        margin-bottom: 20px;
    `,
    itemsClub: css`
        width: 305px;
        height: 400px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb22(0.4)};
        border-radius: 10px;
        overFlow: hidden;
    `,
    containerItemsTitle: css`
        width: 305px;
        height: 140px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb13Negro(1)};
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        /*border-top-left-radius: 8px;*/
        /*border-top-right-radius: 8px;*/
    `,
    itemsTitle: css`
    ${fonts.fontAeonikBlack()};
        width: auto;
        font-family: fontAeonikBlack, sans-serif;
        text-align: center;
        line-height: 30px;
        font-size: ${fonts.fontSize*2}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        letter-spacing: 1px;
        margin-bottom: 0px;
        flex: none;
        
    `,

    containerItemsCategory: css`
        width: 305px;
        height: 270px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb1(0)};
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /*border-top-left-radius: 8px;*/
        /*border-top-right-radius: 8px;*/
    `,
    itemsCategoryTitle: css`
    ${fonts.fontAeonikRegular()};
        width: 285px;
        font-family: fontAeonikRegular, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*1.6}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 1px;
        margin-bottom: 10px;
        flex: none;
        
    `,
    bold: css`
    ${fonts.fontAeonikBold()};
        font-family: fontAeonikBold, sans-serif; 
    `,
  
}

const ViewServiceItemsClub = (props) => {
    return (
        <div css={styles.containerItems} >
            <div css={styles.itemsClub}  >
                <div css={styles.containerItemsTitle}>
                    <h3 css={styles.itemsTitle}> peluquería doral </h3>
                </div>
                <div css={styles.containerItemsCategory} >
                    <span css={styles.itemsCategoryTitle}> <strong css={styles.bold}> CATEGORIA: </strong> Profesional para el ciudado personal </span>
                    <span css={styles.itemsCategoryTitle}> <strong css={styles.bold}> TELEFONO: </strong> 2456789 </span>
                    <span css={styles.itemsCategoryTitle}> <strong css={styles.bold}> CORREO ELECTRONICO: </strong>  dinamg@gmil.com </span>
                    <span css={styles.itemsCategoryTitle}> <strong css={styles.bold}> CIUDAD: </strong> Medellín - Colombia </span>
                    <span css={styles.itemsCategoryTitle}> <strong css={styles.bold}> DIRECCIÓN: </strong> Cra. 50 #50-45 </span>
                    <span css={styles.itemsCategoryTitle}> <strong css={styles.bold}> BARRIO: </strong> Aranjuéz </span>
                    <span css={styles.itemsCategoryTitle}> <strong css={styles.bold}> SITIO WEB: </strong> www.doral.com </span>
                </div>
            </div>
        </div>
    )
}

export default ViewServiceItemsClub;