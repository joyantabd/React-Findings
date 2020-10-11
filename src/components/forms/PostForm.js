import Axios from 'axios';
import React, { Component } from 'react';

const BASE_URL='https://jsonplaceholder.typicode.com'

class PostForm extends Component {

    state = {
        title: '',
        body: '',
        userId: '112',
        isSubmitted: false,
        error:false
    }

    

    changeHandler = (e) => {
        this.setState({
           [e.target.name] : e.target.value
       })
        
    }

    submitHandler = (event) => {
        event.preventDefault()
        Axios.post(`${BASE_URL}/posts`, {
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body
        })
            .then(res => {
                this.setState({
                    isSubmitted: true,
                    error: false
                })
                
            })
            .catch(error => {
                this.setState({
                    error: true,
                    isSubmitted:false
            })
        })
    }

    render() {
        return(
        <form  onSubmit={this.submitHandler}>
                <input
                    className='form-control'
                    type='text'
                    placeholder='name'
                    name='title'
                    value={this.state.title}
                    onChange={this.changeHandler}
                />
           
        
                <textarea
                    className='form-control'
                    type='text'
                    placeholder='body'
                    name='body'
                    value={this.state.body}
                    onChange={this.changeHandler}
                />
           
          

            <button className='btn btn-success' type='submit'>Submit</button>
            {this.state.isSubmitted &&<p>Form Submitted</p>}
            {this.state.error &&<p>Something Wrong</p>}
            </form>
            
        )}
}

export default PostForm;