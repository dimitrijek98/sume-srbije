import React, {Component} from 'react';
import HeroSection from "./HeroSection";
import NavigationBar from "../shared/NavigationBar";
import NewForests from "./NewForests";
import Deforestation from "./Deforestation";
import Regions from "./Regions";
import Footer from "../shared/Footer";

class Landing extends Component {
    constructor(props){
        super(props);
        this.newForests = React.createRef();
        this.deforestation = React.createRef();
        this.regions = React.createRef();
    }

    handleOnClick = (divName) => {
        if(this[divName].current){
            this[divName].current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    };

    render() {
        return (
            <div className='container-fluid forest-parallax'>
                <NavigationBar click={this.handleOnClick}/>
                <HeroSection/>
                <NewForests newForests={this.newForests}/>
                <Deforestation deforestation={this.deforestation}/>
                <Regions regions={this.regions}/>
                <Footer/>
            </div>
        );
    }
}

export default Landing;