import React, { Component } from 'react';

const InitialState = {
    name: '',
    email: '',
    password:'',
    bio: '',
    country: '',
    gender: '',
    skills: []
}

class PostForm extends Component {

    constructor() {
        super()
        this.myForm = React.createRef()
    }



    state = InitialState

    

    changeHandler = event => {
        if (event.target.type === 'checkbox') {
            if (event.target.checked) {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
               })
            } else {
                this.setState({
                    ...this.state,
                    skills:
                        this.state.skills.filter(skill => skill !== event.target.value)
                    
                })
           }
        } else {
            this.setState({
                [event.target.name] : event.target.value
            })
        }
        
    }
    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)

        this.myForm.current.reset()
        this.setState({
             ...InitialState
         })
    }

    render() {
        return(
        <form ref={this.myForm} onSubmit={this.submitHandler}>
            <div className='form-group'>
                <label htmlFor='name'>Enter your Full Name</label>
                <input
                    className='form-control'
                    type='text'
                    placeholder='name'
                    name='name'
                    id='name'
                    value={this.state.name}
                    onChange={this.changeHandler}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Enter your Email</label>
                <input
                    className='form-control'
                    type='email'
                    placeholder='email'
                    name='email'
                    id='email'
                    value={this.state.email}
                    onChange={this.changeHandler}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Enter Password</label>
                <input
                    className='form-control'
                    type='password'
                    placeholder='password'
                    name='password'
                    id='password'
                    value={this.state.password}
                    onChange={this.changeHandler}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='bio'>Enter Bio</label>
                <textarea
                    className='form-control'
                    type='text'
                    placeholder='Bio'
                    name='bio'
                    id='bio'
                    value={this.state.bio}
                    onChange={this.changeHandler}
                />
                </div>
                <div className='form-group'>
                    <label htmlFor='country'>Enter Your Country</label>
                    <select className='form-control' onChange={this.changeHandler} name='country' id='country'>
                     <option>Select Country</option>
                        <option value='Bangladesh'>Bangladesh</option>
                     <option value='Australia'>Australia</option>
                     <option value='Germany'>Germany</option>
                     <option value='India'>India</option>
                    </select>
                </div>

                <div className='form-group'>
                    <div className='form-check'>
                        <input onChange={this.changeHandler} type='radio' name='gender' id='gender1' value='male' />
                        <label htmlFor='male'> Male</label>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-check'>
                        <input onChange={this.changeHandler} type='radio' name='gender' id='gender2' value='female' />
                        <label htmlFor='female'> Female</label>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-check'>
                        <input onChange={this.changeHandler} type='radio' name='gender' id='gender3' value='others' />
                        <label htmlFor='others'> Others</label>
                    </div>
                </div>

        
                
                <div className='form-group'>
                    <div className='form-check'>
                        <input onChange={this.changeHandler} className='form-check-input' name='skills' id='js' value='JavaScript' type='checkbox'/>
                    <label htmlFor='javascript'>JavaScript</label>
                    </div>
                
                    <div className='form-check'>
                        <input onChange={this.changeHandler} className='form-check-input' name='skills' id='react' value='React' type='checkbox'/>
                    <label htmlFor='react'>React</label>
                    </div>
               
               
                    <div className='form-check'>
                        <input onChange={this.changeHandler} className='form-check-input' name='skills' id='angular' value='Angular' type='checkbox'/>
                    <label htmlFor='angular'>Angular</label>
                    </div>
               
                
                    <div className='form-check'>
                        <input onChange={this.changeHandler} className='form-check-input' name='skills' id='nodejs' value='NodeJs' type='checkbox'/>
                       <label htmlFor='nodejs'>NodeJs</label>
                    </div>
                </div>


            <button className='btn btn-success' type='submit'>Submit</button>
       </form>
        )}
}

export default PostForm;