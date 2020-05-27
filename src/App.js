import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/IMG-20170827-WA0008.jpg';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
class App extends Component{
     state = { displayBio:false };
    // constructor(){
    //     super();
    //     this.state={displayBio:false};
    //     console.log('Component this',this);
    //     this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render() 
    {
        
        return(
            <div className='text-center bg-info'>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello</h1>
                <p>My name is Arjit.</p>
                <p>I'm always looking forward to working on meaningful project</p>
                {this.state.displayBio ? (
            <div>
            <p>I live in Allahabad,and I code every day.</p>
            <p>My favorite language is python.</p>
            <p>Beside coding,I like photography.</p>
            <button onClick={this.toggleDisplayBio} className='btn btn-success'>Show less</button>
        </div>
        ): (
            <div>
                <button onClick={this.toggleDisplayBio} className='btn btn-primary'>Read more</button>
            </div>
            
        )}
            <section className='bg-dark text-white'>
            <Projects/>
            </section>
            <section className='bg-info text-white'> 
            <SocialProfiles/>
            </section>
            </div>
        )
    }
}

export default App;