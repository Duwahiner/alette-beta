
import React, { Component } from 'react';
import Layaut from '../components/Layaut';
import Tarjeta from '../components/Tarjeta';
import { imgs } from '../public/global.config';

class AppTarjeta extends Component {
    render() {
        return (
            <Layaut
                title='Solicitud  de Tarjeta'
                setion='SOLICITUD DE TARJETA'
                height='350'
                dimens='px'
                display='none'
                img={imgs.$img8}
            >
                <Tarjeta />
            </Layaut>
        )
    }
}

export default AppTarjeta;