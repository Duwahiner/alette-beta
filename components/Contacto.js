/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors } from '../public/global.config'
import ViewDinamico from '../components/view/view_dinamico';
import ViewQuieroEmpezar from '../components/view/view_quiero_empezar';
import ViewContacto from '../components/view/view_contacto';


const styles = {
    containerInicio: css`
        width: ${dimensions.containers.width}%;
        height: auto;
    `,

}

const Contacto = (props) => {
    return (
        <div css={styles.containerInicio}>
            <ViewDinamico 
                 title='Hola, cuentanos'
                subTitle='Alette dispone de los mejores clubes para hombre y mujeres en la ciudad de Medellín. Conoce más abajo.'
            />
            <ViewContacto />
            <ViewQuieroEmpezar />
        </div>
    )
}

export default Contacto;