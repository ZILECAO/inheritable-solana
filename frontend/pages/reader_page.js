import React, { Component, useEffect } from 'react';
import Writer from './components/Writer';
import Reader from './components/Reader';
import Oracle from './components/Oracle';
import logo2 from '../public/logo2.svg';
import solana from '../public/solana.svg';
import inherilogo from '../public/inheri-logo.svg';
import verifySvg from '../public//verify.svg';
import signSvg from '../public/ri_quill-pen-fill.svg';
import witnessSvg from '../public/witness.svg';

import { NavBar } from './components/navBar';
import Image from 'next/image';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: 0,
        };
    }

    switchView() {
        this.setState({
            screen: (this.state.screen + 1) % 3,
        });
    }

    render() {
        return (
            <div className='font-serif bg-zinc-900 '>
                <Reader />
            </div>
        );
    }
}

export default Dashboard;
