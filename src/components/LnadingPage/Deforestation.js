import React, {Component} from 'react';

class Deforestation extends Component {
    render() {
        return (
            <div ref={this.props.deforestation} className='row bg-light p-5 mb-5'>
                <div className='col-md-6 align-items-center justify-content-center d-flex'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi fugit nam neque
                        odit pariatur quasi quos suscipit. At earum et fuga itaque, iusto libero! Doloremque dolores ea
                        impedit nesciunt.</p>
                </div>
                <div className='col-md-6'>
                    <img src={require('../../assets/images/forest.jpg')} style={{width: '90%', height: '400px'}}
                         alt={'sas'}/>
                </div>

            </div>
        );
    }
}

export default Deforestation;