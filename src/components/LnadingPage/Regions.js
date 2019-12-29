import React, {Component} from 'react';

class Regions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRegion: '',
        }
    }

    render() {
        return (
            <div className='row bg-light' ref={this.props.regions}>
                <div className='col-md-6'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 p-5'>
                                <div className='region-card'>
                                    Srem
                                </div>
                            </div>
                            <div className='col-6 p-5'>
                                <div className='region-card'>
                                    Banat
                                </div>
                            </div>
                            <div className='col-6 p-5'>
                                <div className='region-card'>
                                    Backa
                                </div>
                            </div>
                            <div className='col-6 p-5'>
                                <div className='region-card'>
                                    Sumadija
                                </div>
                            </div>
                            <div className='col-6 p-5'>
                                <div className='region-card'>
                                    Zapadna Srbija
                                </div>
                            </div>
                            <div className='col-6 p-5'>
                                <div className='region-card'>
                                    Istocna Srbija
                                </div>
                            </div>
                            <div className='col-6 p-5'>
                                <div className='region-card'>
                                    Kosovo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regions;