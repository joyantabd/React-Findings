import axios from 'axios';
import React, { Component } from 'react';
import './App.css';


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
          <ul className='list-group'>
            {posts.map(post => <li key={post.id} className='list-group-item'><h5>Title:</h5>{post.title}<br /><h5>Body:</h5>{post.body}</li>)}
            </ul>
        </div>
      )
   }
  }
}

export default App;

