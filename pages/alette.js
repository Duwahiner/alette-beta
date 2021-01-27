
import React, { Component } from 'react';
import Layaut from '../components/Layaut';
import Alette from '../components/Alette';
import { imgs } from '../public/global.config';

class AppAlette extends Component {
    render() {
        return (
            <Layaut
                title='Alette'
                setion='ALETTE'
                height='350'
                dimens='px'
                display='none'
                img={imgs.$img6}
            >
                <Alette />
            </Layaut>
        )
    }
}

export default AppAlette;