import React, { Component, useEffect } from 'react';
import Writer from './components/Writer';
import Reader from './components/Reader';
import Oracle from './components/Oracle';
import logo2 from '../public/logo2.svg';
import solana from '../public/solana.svg'
import inherilogo from '../public/inheri-logo.svg';
import verifySvg from "../public//verify.svg";
import signSvg from "../public/ri_quill-pen-fill.svg";
import witnessSvg from "../public/witness.svg";

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
            screen: (this.state.screen + 1) % 3
        });
    }

    SidebarReader() {
        return (
            <div className='text-white h-2/5 mt-10 text-md pl-8 flex flex-col justify-around'>
                <div className='my-2'>
                    <div className='flex items-center justify-left '>
                        <Image
                            src="ri_quill-pen-fill.svg"
                            alt="image"
                            width={25}
                            height={25}
                        />
                        <a className='text-center ml-2'>View your Claim</a>
                    </div>
                    <p className='font-light ml-7 text-zinc-500 text-xs'>View will item of deceased addressed to you</p>
                </div>


                {/* <div className='flex items-center justify-left hover:underline hover:text-white hover:cursor-pointer' onClick={() => this.setState({ screen: 1 })}>
                              <img src={witnessSvg} className="w-5 h-5 mr-2" alt="logo" />
                              <p className='text-center'> Bear witness to passing </p>
                          </div>
      
                          <div className='flex items-center justify-left hover:underline hover:text-white hover:cursor-pointer' onClick={() => this.setState({ screen: 2 })}>
                              <img src={verifySvg} className="w-5 h-5 mr-2" alt="logo" />
                              <p className='text-center'> Verify and release will </p>
                          </div> */}
            </div>
        )
    }




    render() {
        return (
            <div className="font-serif bg-zinc-900 ">
                {/* sidebar */}
                <div className="fixed w-1/4 h-4/6	 flex flex-col justify-between">
                    <div className='max-h-2/5'>

                        <this.SidebarReader />

                    </div>
                </div>


                {/* main page section */}
                <div className="font-inter flex ">
                    <div className='w-1/4 bg-zinc-900 flex flex-col'>
                    </div>
                    <div className='w-3/4 bg-black'>
                        <Reader />

                    </div>
                </div>




            </div>
        )
    }
}

export default Dashboard;
