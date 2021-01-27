
import React, { Component } from 'react';
import Layaut from '../components/Layaut';
import Mujer from '../components/Planes';
import { imgs } from '../public/global.config';

class AppMujer extends Component {
    render() {
        return (
            <Layaut
                title='Planes'
                setion='PLANES'
                height='350'
                dimens='px'
                display='none'
                img={imgs.$img12}
            >
                <Mujer />
            </Layaut>
        )
    }
}

export default AppMujer;