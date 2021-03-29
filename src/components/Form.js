import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 
            
        */
       this.onFormSubmit = this.onFormSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.state = {
           name: "",
           URL: ""
       }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       
            this.setState({name:event.target.value});
       
            
    }

    handleChangeURL = event => {
        this.setState({URL: event.target.value});
      };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);

        this.setState({ name: "", URL: "" });
        
        
        
        
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        
    };

    render() {

        return(
            <form onSubmit = {this.onFormSubmit}> 
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label > Link Name: </label >
                <input type = "text" id = "name" value = {this.state.name} onChange = {this.handleChange}/>
                <label for = "url"> URL: </label>
                <input type = "text" id = "URL" value = {this.state.URL} onChange = {this.handleChangeURL}/>
                <button type = "submit">Submit</button>
            </form>
        )
    
    }
}

export default Form;
