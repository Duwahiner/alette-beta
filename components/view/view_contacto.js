/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors, imgs } from '../../public/global.config'


const styles = {
    containerViewAlette_4: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        flex: none;
        margin-top: 0px;
        margin-bottom: 200px;
        background-color: ${'colors.rgbAlette.rgb1(0)'}
    `,
    containerViewAlette_4img: css`
        width: 50%;
        height: 800px;
        flex: none;
        background: ${colors.rgbAlette.rgb1(1)} url(${imgs.$img10}) center center no-repeat;
        background-size: cover;
    `,
    containerViewAlette4Lectura: css`
        width: ${dimensions.containers.width}%;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: auto;
        background-color: ${'colors.rgbAlette.rgb2(1)'};
    `,
    viewAlette_4Title: css`
    ${fonts.fontHeadingProHeavy()};
        width: 90%;
        font-family: fontHeadingProHeavy, serif, sans-serif;
        text-align: center;
        font-size: ${fonts.fontSize*7}px;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        letter-spacing: 5px;
        margin-bottom: 30px;
        flex: none;
        
    `,
    containerViewAlette_4Bottons: css`
        width: ${dimensions.containers.width}%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: none;
    `,
    mi_form: css `
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
    `,
    conten_miform_alette: css `
        width: 85%;
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    `,
    conten_miform_alette_element: css`
        width: 100%;
        height: auto;
        margin: 0px;
    `,
    conten_alette_element: css`
        width: 100%;
        height: 70px;
        margin-top: 10px;
    `,
    conten_alette_element_label_input: css`
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
    `,
    element_label: css`
        ${fonts.fontHeadingProBold()};
        font-family: fontHeadingProBold,  sans-serif;
        color: ${colors.rgbAlette.rgb13Negro(1)};
        font-size: ${fonts.fontSize*2.3}px;
        cursor: pointer;
    `,
    element_imput: css`
        ${fonts.fontAeonikLight()};
        width: 100%;
        height: 30px;
        outline: none;
        font-family: fontAeonikLight,  sans-serif;
        color: ${colors.rgbAlette.rgb23(1)};
        font-size: 19px;
        line-height: 30px;
        border: 0px;
        border-bottom: solid 2px ${colors.rgbAlette.rgb22(0.5)} ;
        box-sizing: content-box;
        transition: all 0.5s linear;
        &:focus  {
            border-bottom: solid 2px ${colors.rgbAlette.rgb1(1)};
            color: ${colors.rgbAlette.rgb1(1)};
        }
        &::placeholder{
            color: ${colors.rgbAlette.rgb22(1)};
            font-family: fontAeonikLight, sans-serif;
        }
    `,
    conten_alette_element_botton_submit: css `
        width: 100%;
        height: 60px;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `,
    element_imput_botton_submit: css `
        ${fonts.fontAeonikLight()};
        width: 100%;
        height: 60px;
        outline: none;
        font-family: fontAeonikLight, sans-serif;
        color: ${colors.rgbAlette.rgb12Blanco(1)};
        font-size: ${fonts.fontSize*3}px;
        border: 0px;
        border-radius: 3px;
        background-color: ${colors.rgbAlette.rgb2(1)};
        box-sizing: content-box;
        cursor: pointer;
        transition: all 0.5s;
        :hover{
            background-color: ${colors.rgbAlette.rgb18(1)};
        }
    `
}

const ViewContacto = (props) => {
    return (
        <div css={styles.containerViewAlette_4}>
            <div css={styles.containerViewAlette_4img}></div>
            <div css={styles.containerViewAlette4Lectura}>
                <h2 css={styles.viewAlette_4Title}> Como te ayudamos </h2>
                <div css={styles.containerViewAlette_4Bottons} >
                    
                    <form css={styles.mi_form}>
                        <div css={styles.conten_miform_alette}>
                            <div css={styles.conten_miform_alette_element}>
                                
                                <div css={styles.conten_alette_element}>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <label htmlFor="textAlette" css={styles.element_label}> Nombre </label>
                                    </div>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <input css={styles.element_imput} type="text" id="textAlette" name="textAlette" placeholder="Escribe aquí tu nombre." />
                                    </div>
                                </div>

                                <div css={styles.conten_alette_element}>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <label htmlFor="textAletteAppellido" css={styles.element_label}> Apellidos </label>
                                    </div>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <input css={styles.element_imput} type="text" id="textAletteAppellido" name="textAletteAppellido" placeholder="Escribe aquí tus apellidos." />
                                    </div>
                                </div>

                                <div css={styles.conten_alette_element}>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <label htmlFor="textAletteEmail" css={styles.element_label}> Correo electronico </label>
                                    </div>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <input css={styles.element_imput} type="email" id="textAletteEmail" name="textAletteEmail" placeholder="Escribe aquí tu correo electronico." />
                                    </div>
                                </div>

                                <div css={styles.conten_alette_element}>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <label htmlFor="textAletteTel" css={styles.element_label}> Teléfono o celular </label>
                                    </div>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <input css={styles.element_imput} type="tel" id="textAletteTel" name="textAletteTel" placeholder="Escribe aquí tu teléfono o celular." />
                                    </div>
                                </div>

                                <div css={styles.conten_alette_element}>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <label htmlFor="textAletteInteres" css={styles.element_label}> Cual es tu interes </label>
                                    </div>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <input css={styles.element_imput} type="text" id="textAletteInteres" name="textAletteInteres" placeholder="Escribe aquí lo que te intereza." />
                                    </div>
                                </div>

                                

                                    
                                <div css={styles.conten_alette_element}>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <label htmlFor="textareaDoogsk" css={styles.element_label}> Algo más que quieras contarnos </label>
                                    </div>
                                    <div css={styles.conten_alette_element_label_input}>
                                        <textarea css={styles.element_imput}  id="textareaDoogsk" name="textareaDoogsk" placeholder="Escribe aquí los detalles." />
                                    </div>
                                </div>

                                <div css={styles.conten_alette_element_botton_submit}>
                                    <input css={styles.element_imput_botton_submit} type="submit" id="text3Doogsk" name="text3Doogsk" value="ENVIAR DATOS" />
                                </div>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default ViewContacto;