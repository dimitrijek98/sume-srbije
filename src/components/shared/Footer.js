import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='row footer'>
                <div className='col-lg-6 pl-5'>
                    <h3 className='text-left'>Šume Srbije</h3>
                </div>
                <div className='col-lg-6 pr-5'>
                    <p>Dimitrije Kostić dimitirje.kostic@elfak.rs 16145</p>
                    <p>Nikola Mitić mitic.nikola@elfak.rs 16228</p>
                </div>
            </div>
        );
    }
}

export default Footer;