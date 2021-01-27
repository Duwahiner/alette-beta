/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import { dimensions, fonts, colors,  svg } from '../public/global.config'
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
        flex: auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'}
        
    `,

    containerViewAlette_2ServicesSvg: css`
        width: 200px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
        margin-top: 20px;
        margin-right: 20px;
        background-color: ${colors.rgbAlette.rgb1(1)};
    `,
    viewAlette_2ServicesSvg: css`
        width: 120px;
        height: 120px;
        flex: none;
        background-color: ${colors.rgbAlette.rgb1(1)};
    `,


}

const Services = (props) => {
    return (
        <div css={styles.containerInicio}>
            <ViewDinmicoClon 
                 title='Muchos clubes de un sólo vistaso'
                subTitle='Alette dispone de los mejores clubes para hombre y mujeres en la ciudad de Medellín. Conoce más abajo.'
            />

            { /* Aqui inicia el contenido que es propio de la sesion Alette */}
            <div css={styles.containerAletteContenido}>
                
                { /* Salas de belleza */}
                <div css={styles.containerQeEsAlette} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Salas de belleza </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <div css={styles.containerViewAlette_2ServicesSvg} >
                                <div css={styles.viewAlette_2ServicesSvg}>
                                        <ReactSVG  src={svg.servicesSvg1} />
                                </div>
                            </div>
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

                { /* Spas*/}
                <div css={styles.containerQeEsAletteColor} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Spas </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <div css={styles.containerViewAlette_2ServicesSvg} >
                                <div css={styles.viewAlette_2ServicesSvg}>
                                        <ReactSVG  src={svg.servicesSvg2} />
                                </div>
                            </div>
                            
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

            { /* Peluquerías */}
                <div css={styles.containerQeEsAlette} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Peluquerías </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <div css={styles.containerViewAlette_2ServicesSvg} >
                                <div css={styles.viewAlette_2ServicesSvg}>
                                        <ReactSVG  src={svg.servicesSvg3} />
                                </div>
                            </div>
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

                { /* Clinicas de estética */}
                <div css={styles.containerQeEsAletteColor} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Clinicas de estética </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <div css={styles.containerViewAlette_2ServicesSvg} >
                                <div css={styles.viewAlette_2ServicesSvg}>
                                        <ReactSVG  src={svg.servicesSvg4} />
                                </div>
                            </div>
                            
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

                { /* Gimnasios */}
                <div css={styles.containerQeEsAlette} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Gimnasios </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <div css={styles.containerViewAlette_2ServicesSvg} >
                                <div css={styles.viewAlette_2ServicesSvg}>
                                        <ReactSVG  src={svg.servicesSvg5} />
                                </div>
                            </div>
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

                { /* Profesional para el ciudado personal */}
                <div css={styles.containerQeEsAletteColor} >
                    <div css={styles.containerQeEsAletteLectura}>
                        <div css={styles.containerQeEsAletteLecturaTitle}  >
                            <h2 css={styles.qeEsAletteLecturaTitle} > Profesional para el ciudado personal </h2>
                        </div>
                        <div css={styles.containerQeEsAletteLecturaParrafo}>
                            <div css={styles.containerViewAlette_2ServicesSvg} >
                                <div css={styles.viewAlette_2ServicesSvg}>
                                        <ReactSVG  src={svg.servicesSvg6} />
                                </div>
                            </div>
                            
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

            <ViewQuieroEmpezar />
        </div>
    )
}

export default Services;