import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import News from './components/news';

class App  extends Component {
    state = {
        data:[
            {
                title: "python",
                content:"python is programming language ...."
            },
            {
                title: "php",
                content:"php is programming language ...."
            },
            {
                title: "java",
                content:"java is programming language ...."
            },
            
            {
                title: "ruby",
                content:"ruby is programming language ...."
            }

        ]
    }
render() {
    return (
        <div>
            {/* {this.state.data} */}

            <News data = {this.state.data}/>
        </div>
    )
}

}

ReactDOM.render(<App/>,document.querySelector('#root'));