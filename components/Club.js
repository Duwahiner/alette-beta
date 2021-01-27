/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors } from '../public/global.config'
import ViewComenzarAventura from '../components/view/view_comenzar_eventura';
import ViewServicesItemsClub from '../components/view/view_services_items_club';


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
        height: 400px;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb1(1)}
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
        background-color: ${colors.rgbAlette.rgb21(0)};
        padding-top: 150px;
        padding-bottom: 200px;
    `,
    containerQeEsAletteLecturaTitle: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb21(1)'};
        border-bottom: solid 3px ${colors.rgbAlette.rgb12Blanco(1)};
        box-sizing: content-box;
    `,
    qeEsAletteLecturaTitle: css`
    ${fonts.fontHeadingProHeavy()};
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*9}px;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        letter-spacing: 5px;
        margin-bottom: 0px;
        flex: none;
        
    `,

    containerSevicesItems: css`
        width: 75%;
        height: auto;
        max-height: 1200px;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb21(0.4)};
        margin-bottom: 0px;
        overflow-y: scroll;
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

    containerSevicesItemsClub: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
    `,
    containerItemsClub: css`
        width: 25%;
        height: auto;
        max-height: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
    `,
    containerItemsClubTitle: css`
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${colors.rgbAlette.rgb1(0)};
    `,
    itemsClubTitle: css`
    ${fonts.fontHeadingProHeavy()};
        width: 85%;
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: left;
        font-size: ${fonts.fontSize*4}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 0px;
        margin-top: 20px;
        margin-bottom: 20px;
        flex: none;
        
    `,
    containerSevicesItemsClubItem: css`
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: auto;
        background-color: ${colors.rgbAlette.rgb2(0)};
        overflow-y: auto;
    `,
    containerSevicesItemsClubItemSpan: css`
        width: 85%;
        height: auto;
        flex: none;
        background-color: ${colors.rgbAlette.rgb2(0)};
    `,
    itemsClubItemSpan: css`
    ${fonts.fontAeonikRegular()};
        width: auto;
        height: auto;
        display: block;
        font-family: fontAeonikRegular, sans-serif;
        text-align: left;
        line-height: 30px;
        font-size: ${fonts.fontSize * 1.8}px;
        color: ${colors.rgbAlette.rgb23(1)};
        letter-spacing: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: 0px;
        box-sizing: border-box;
    `,
    itemsClubItemSpanStrong: css`
    ${fonts.fontAeonikBlack()};
        font-family: fontAeonikBlack, sans-serif;
        color: ${colors.rgbAlette.rgb13Negro(1)};
    `,
    


 
}

const Club = ( props ) => {
    const services = [
        'Alisado', 'Color', 'Cepillado',
        'Corte de caballero', 'Depilacion hilo o cera',
        'Decoración de uña', 'Extensiones de pelo',
        'Extensiones de uñas en gel, acrílicas',
        'Iluminaciones', 'Manicure',
        'Manicure permanente', 'Maquillaje',
        'Pedicure', 'Planchado', 'Peinados',
        'Podología', 'Pigmentación de cejas',
        'Recogido y crespo', 'Spa manos',
        'Spa pies', 'Tinturas', 'Trenzas',
        'Tratamiento capilar', 'Medicina estética', 'Cirugía Plástica',
        'Dermatología', 'Láser', 'Entrenamiento', 'personalizado',
        'Medicina deportiva', 'Valorador clínico', 'Nutrición saludable',
        'Clases grupales', 'Servicios adicionales'
    ]
    return (
        <div css={styles.containerInicio}>

            { /* Aqui inicia el contenido que es propio de la sesion Alette */}
            <div css={styles.containerAletteContenido}>
                { /* Servicios para ellas */}
                <div css={styles.containerQeEsAlette} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Gracias por contar con Alette </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div css={styles.containerSevicesItemsClub} >
                <div css={styles.containerItemsClub}>
                    <div css={styles.containerItemsClubTitle}>
                        <h2 css={styles.itemsClubTitle}> Servicios de los club subscrito a nuestra red </h2>
                    </div>
                    <div css={styles.containerSevicesItemsClubItem}>
                        <div css={styles.containerSevicesItemsClubItemSpan}>
                            {
                                services.map( ( value, index ) => {
                                    return (
                                        <span key={index} css={styles.itemsClubItemSpan} >
                                            <strong  css={styles.itemsClubItemSpanStrong} > → </strong> {value}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div css={styles.containerSevicesItems}>
                    <div css={styles.containerSevicesItemsMujer} >
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                        <ViewServicesItemsClub />
                    </div>
                </div>
            </div>

            

            <ViewComenzarAventura />

        </div>
    )
}

export default Club;