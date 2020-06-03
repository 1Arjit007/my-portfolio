import React, {Component} from 'react';
import Header from './Header';
const Joke = ({joke:{setup,punchline}}) => (
    <p style={{margin:20}}>{setup}<em>{punchline}</em></p>
)
class Jokes extends Component{
    state = {joke:{},jokes:[]};
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(Response => Response.json())
        .then(json => this.setState({joke:json}));
    }
    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(Response => Response.json())
        .then(json => this.setState({jokes:json}));
    }
    render(){
        //const{setup,punchline}=this.state.joke;
        return(
        <div>
        <section className='bg-white'>
            <Header/>
        </section>
        <h2>Highlighted Jokes</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want more jokes?</h3>
        <button onClick={this.fetchJokes} className='btn btn-outline-warning'>Click me!</button>
        {
            this.state.jokes.map(joke =>(<Joke key={joke.id} joke={joke}/>))
        }
        </div>
        )
    }
}
export default Jokes;