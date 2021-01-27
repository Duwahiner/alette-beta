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
import ViewServiciosInteligentes from '../components/view/view_servicios_inteligentes';
import ViewQuieroEmpezar from '../components/view/view_quiero_empezar';
import ViewImgsOpciones from '../components/view/view_imgs_opciones';
import ViewBeneficios from '../components/view/view_beneficios';
import ViewBeneficiosItems from '../components/view/view_beneficios_items';
import ViewImgsSienteteLibre from '../components/view/view_imgs_sientete_libre';
import ViewImgsComenzamos from '../components/view/view_imgs_comenzamos';
import ViewImgsGanasTiempo from '../components/view/view_imgs_ganas_tiempo';
import ViewImgsIniciamos from '../components/view/view_iniciamos';

const styles = {
    containerInicio: css`
        width: ${dimensions.containers.width}%;
        height: auto;
    `,
}

const Inicio = (props) => {
    return (
        <div css={styles.containerInicio}>
            <ViewComenzarAventura />
            <ViewServiciosInteligentes />
            <ViewQuieroEmpezar />
            <ViewImgsOpciones />
            <ViewBeneficios />
            <ViewBeneficiosItems />
            <ViewImgsSienteteLibre />
            <ViewImgsComenzamos />
            <ViewImgsGanasTiempo />
            <ViewImgsIniciamos />
        </div>
    )
}

export default Inicio;