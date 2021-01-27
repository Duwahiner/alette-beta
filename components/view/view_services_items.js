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
        width: 325px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
    `,
    itemsMujer: css`
        width: 305px;
        height: 330px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb22(0.4)};
        border-radius: 10px;
        overFlow: hidden;
    `,
    containerItemsTitle: css`
        width: 305px;
        height: 140px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb2(1)};
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
        width: 285px;
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
        height: 190px;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb1(1)'};
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
    ${fonts.fontAeonikLight()};
        width: 285px;
        font-family: fontAeonikLight, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*1.7}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 1px;
        margin-bottom: 40px;
        flex: none;
        
    `,
    itemsCategoryBotton: css`
    ${fonts.fontAeonikMedium()};
        width: 250px;
        height: auto;
        font-family: fontAeonikMedium, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*1.7}px;
        color: ${colors.rgbAlette.rgb1(1)};
        letter-spacing: 1px;
        margin-bottom: 0px;
        padding-top: 20px;
        padding-bottom: 20px;
        flex: none;
        border: solid 2px ${colors.rgbAlette.rgb1(1)};
        box-sizing: content-box;
        border-radius: 4px;
        transition: all 0.2s linear;
        cursor: pointer;
        &:hover{
            background-color: ${colors.rgbAlette.rgb1(1)};
            color: ${colors.rgbAlette.rgb12Blanco(1)};
        }
    `,

}

const ViewServiceItems = (props) => {
    return (
        <div css={styles.containerItems} >
            <div css={styles.itemsMujer}  >
                <div css={styles.containerItemsTitle}>
                    <h3 css={styles.itemsTitle}> extensiones de uñas en gel acrílicas</h3>
                </div>
                <div css={styles.containerItemsCategory} >
                    <h4 css={styles.itemsCategoryTitle}> <strong> CATEGORIA: </strong> Profesional para el ciudado personal </h4>
                    <span css={styles.itemsCategoryBotton} > QUIERO ESTE SERVICIO </span>
                </div>
            </div>
        </div>
    )
}

export default ViewServiceItems;