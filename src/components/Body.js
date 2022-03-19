import React, { Component } from 'react'

export default class Body extends Component {
    constructor(props) {
        super(props);
    this.state = {
        inputText: '',
        value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};
    
     handleChange(e) {
         this.setState({value: e.target.value})
     }

     handleSubmit(e){
         e.preventDefault();
         this.setState({
             inputText: this.state.value.replace(/\./g,' ///')
         })
     }

    

    render() {
        return (

            <div className='bodyContainer'>

                <div className='bodyBody'>
                    <div className='titleContainer'>
                        <div className='title'>
                            <h1 className='titleText'>
                                Gramps code converter
                            </h1>

                        </div>

                    </div>
                    <div className='inputContainer'>
                        <div className='inputText'>
                            <h1>Enter your paragraph here</h1>
                        </div>
                        <div className='inputForm'>
                        <form className='inputFormField' onSubmit={this.handleSubmit}>
                            <label>
                                
                                <textarea className='inputInput' type="text" name="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <button type="submit" value="Submit">GRAMPS-IFY</button>
                        </form>
                        </div>
                    </div>
                    <div className='input2Container'>
                        <div className='input2Form'>
                        <div className='input2Text'>
                            <h1>Gramps-ified text</h1>
                        </div>
                        <form className='input2FormField'>
                            <label>
                                
                                <textarea className='inputInput' type="text" name="name" value={this.state.inputText} />
                            </label>
                            
                        </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
