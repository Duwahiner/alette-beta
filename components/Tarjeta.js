/* @jsx jsx */

// Configuracion esencial para el proyecto encuento a css.
// Autor: Ghobbit.
// Desarrollador Frontend y Diseñador gráfico: Duwahiner Moreno Cuesta.
// Email: grafifotoluz@gmail.com;
// Twitter: @duwahiner.

import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { dimensions, fonts, colors,  svg } from '../public/global.config'
import ViewDinamico from '../components/view/view_dinamico';
import ViewBeneficios from '../components/view/view_beneficios';
import ViewBeneficiosItems from '../components/view/view_beneficios_items';
import ViewTarjetas from '../components/view/view_tarjeta';


const styles = {
    containerInicio: css`
        width: ${dimensions.containers.width}%;
        height: auto;
    `,

}

const SolicitudTarjetas = (props) => {
    return (
        <div css={styles.containerInicio}>
            <ViewDinamico 
                 title='Tu tarjeta rápidicimo'
                subTitle='Son 3 los beneficios al disponer de una trajeta Aletta. → (1) Atención preferencial
                → (1) Bajos costos en los servicios de cuidado personal → (3) Credito inmediato para tus servicios de cuidado personal'
            />
            <ViewTarjetas />
            <ViewBeneficios />
            <ViewBeneficiosItems />
        </div>
    )
}
export default SolicitudTarjetas;