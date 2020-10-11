import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import PostForm from './forms/PostForm';


class App extends Component {


  state = {
   posts:[]
 }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data
        })
      })
      .catch(error => {
      console.log(error)
    })
  }
  

  render() {

    let {posts} = this.state

    if (posts.length === 0) {
     return <h1 style={{textAlign:'center'}}>LOADING</h1>
    } else {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 offset-sm-2'>
              <PostForm/>
            </div>
          </div>
        </div>
      )
   }
  }
}

export default App;

