
import React, { Component } from 'react';
import Layaut from '../components/Layaut';
import Alette from '../components/Services';
import { imgs } from '../public/global.config';

class AppServices extends Component {
    render() {
        return (
            <Layaut
                title='Servicios'
                setion='SERVICIOS'
                height='350'
                dimens='px'
                display='none'
                img={imgs.$img7}
            >
                <Alette />
            </Layaut>
        )
    }
}

export default AppServices;