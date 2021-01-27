
import React, { Component } from 'react';
import Layaut from '../components/Layaut';
import Inicio from '../components/Inicio';
import { imgs } from '../public/global.config';

class Index extends Component {
    render() {
        return (
            <Layaut
                title='Inicio'
                setion='INICIO'
                height='100'
                dimens='vh'
                display='none'
                img={imgs.$img1}
                active={true}
            >
                <Inicio />
            </Layaut>
        )
    }
}

export default Index;