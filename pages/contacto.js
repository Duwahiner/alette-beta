
import React, { Component } from 'react';
import Layaut from '../components/Layaut';
import Contacto from '../components/Contacto';
import { imgs } from '../public/global.config';

class AppContacto extends Component {
    render() {
        return (
            <Layaut
                title='Contacto'
                setion='CONTACTO'
                height='350'
                dimens='px'
                display='none'
                img={imgs.$img11}
            >
                <Contacto />
            </Layaut>
        )
    }
}

export default AppContacto;