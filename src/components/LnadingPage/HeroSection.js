import React, {Component} from 'react';
import NavigationBar from "../shared/NavigationBar";

class HeroSection extends Component {
    render() {
        return (
                <div className='row p-5' style={{height:'70vh'}}>
                    <div className='col-12 align-items-center justify-content-around flex-column d-flex pl-5 pr-5'>
                        <p className='h1 text-light'>Sume u Srbiji</p>
                        <p className='text-light text-center h3 pl-5, pr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, eius impedit iste
                            labore odit quo ratione soluta voluptates voluptatum. Asperiores ea explicabo fugiat vero?
                            Blanditiis in magnam obcaecati provident voluptatibus!</p>
                    </div>
                </div>
        );
    }
}

export default HeroSection;