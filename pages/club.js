
import React, { Component } from 'react';
import Layaut from '../components/Layaut';
import Club from '../components/Club';
import { imgs } from '../public/global.config';

class AppClub extends Component {
    render() {
        return (
            <Layaut
                title='Club'
                setion='CLUBES Y SERVICIOS'
                height='350'
                dimens='px'
                display='none'
                img={imgs.$img12}
            >
                <Club />
            </Layaut>
        )
    }
}

export default AppClub;