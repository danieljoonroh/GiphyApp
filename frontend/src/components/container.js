import React from 'react';
import axios from 'axios';
import img from '../../images/logo.jpg';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            search: ''
         
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/home/trending')
        .then((response) => {
            let gifArray = response.data.data;
            this.setState({
                images: gifArray
            })
        })
    }

    searchGIF() {
        axios.get(`http://localhost:5000/home/search/?search=${this.state.search}`)
        .then((response) => {
            console.log(response.data.data)
            let gifArray = response.data.data;
            this.setState({
                images: gifArray
            })
        })
    }
    render() {
        return (
            <div className='container'>
                <div id='title' className='row justify-content-center'>
                    <img src={img} id='logo' alt=""/>
                    <h1 className='header'>GIPHY TIME</h1>
                </div>
                <div className='row justify-content-center'>
                    <div className='form-group'>
                        <div className='row'>
                            <input
                            value={this.state.search} 
                            placeholder='Search GIF...' 
                            type="text" 
                            className="inputForm"
                            onChange={(e) => this.setState({ search: e.target.value })}
                            />
                            <button 
                            className='btn enterButton'
                            onClick={this.searchGIF.bind(this)}
                            >Enter</button>
                        </div>
                    </div>
                </div>
                <div >
                        {this.state.images.map((image, index) => {
                            return  (
                                <img className='images' src={image} key={index} />
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default Container;