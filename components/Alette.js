/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors } from '../public/global.config'
import ViewDinmicoClon from '../components/view/view_dinamico_clon';
import ViewQuieroEmpezar from '../components/view/view_quiero_empezar';


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
        height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb21(1)'}
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
        margin-bottom: 20px;
        flex: none;
        
    `,
    
    containerQeEsAletteLecturaParrafo: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
    `,
    qeEsAletteLecturaParrafo: css`
    ${fonts.fontAeonikLight()};
        width: 90%;
        font-family: fontAeonikLight, serif, sans-serif;
        text-align: justify;
        font-size: ${fonts.fontSize*2.2}px;
        color: ${colors.rgbAlette.rgb15(1)};
        letter-spacing: 0px;
        margin-top: 20px;
        line-height: 40px;
        flex: none;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
        
    `,


}

const Alette = (props) => {
    return (
        <div css={styles.containerInicio}>
            <ViewDinmicoClon 
                title='Muchos clubes de un sólo vistaso'
                subTitle='Alette dispone de los mejores clubes para hombre y mujeres en la ciudad de Medellín. Conoce más abajo.'
            />

            { /* Aqui inicia el contenido que es propio de la sesion Alette */}
            <div css={styles.containerAletteContenido}>
                
                { /* Que es alette */}
                <div css={styles.containerQeEsAlette} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Que es alette </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <p css={styles.qeEsAletteLecturaParrafo} >
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un
                                sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o
                                menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido
                                aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y
                                editores de páginas.
                            </p>
                        </div>
                    </div>
                </div>

                { /* Ojetivos alette */}
                <div css={styles.containerQeEsAletteColor} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Objetivos alette </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <p css={styles.qeEsAletteLecturaParrafo} >
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un
                                sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o
                                menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido
                                aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y
                                editores de páginas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            { /* Valores alette */}
                <div css={styles.containerQeEsAlette} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Valores Alette </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <p css={styles.qeEsAletteLecturaParrafo} >
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un
                                sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o
                                menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido
                                aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y
                                editores de páginas.
                            </p>
                        </div>
                    </div>
                </div>

                { /* En donde nos puedes encotrar */}
                <div css={styles.containerQeEsAletteColor} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > En donde nos puedes encotrar </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <p css={styles.qeEsAletteLecturaParrafo} >
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un
                                sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o
                                menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido
                                aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y
                                editores de páginas.
                            </p>
                        </div>
                    </div>
                </div>

            <ViewQuieroEmpezar />
        </div>
    )
}

export default Alette;