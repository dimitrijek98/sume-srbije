import React, {Component} from 'react';

class HeroSection extends Component {
    render() {
        return (
                <div className='row p-5' style={{height:'70vh'}}>
                    <div className='col-12 align-items-center justify-content-around flex-column d-flex pl-5 pr-5'>
                        <p className='h1 text-light'>Šume u Srbiji</p>
                        <p className='text-light text-center h3 pl-5, pr-5'>Dobrodošli na zvanični studentski sajt o statistici šuma u Republici Srbiji.</p>
                    </div>
                </div>
        );
    }
}

export default HeroSection;