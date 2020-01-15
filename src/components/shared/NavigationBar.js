import React, {Component} from 'react';

class NavigationBar extends Component {
    render() {
        return (
            <div className='row bg-transparent text-light pt-3 pl-5 pr-5'>
                <div className='col col-md-9 pr-5 pl-5'>
                    <h5 className='text-left'>Šume u Srbiji</h5>
                </div>
                <div onClick={() => this.props.click('newForests')} className='col-md-1 clickable'>
                    <p>Nove šume</p>
                </div>
                <div onClick={() => this.props.click('deforestation')}  className='col-md-1 clickable'>
                    <p>Seča</p>
                </div>
                <div onClick={() => this.props.click('regions')}  className='col-md-1 clickable'>
                    <p>Regioni</p>
                </div>
            </div>
        );
    }
}

export default NavigationBar;