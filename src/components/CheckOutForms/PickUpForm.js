import React from 'react';
import {Form,  Button } from 'react-bootstrap';
import TextInput from '../TextInput/TextInput';
import toastr from 'toastr';
<<<<<<< HEAD
=======
import { Redirect } from 'react-router-dom';
>>>>>>> 2ad45bf5d76c3820da6d8efc91b6852ad4420cce

const initialstate = {
    fields: {
        fullName: '',
        address: '',
    }
}

var redirect = false;
class PickUpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialstate;
        redirect = false;
    }

    onInputChange(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log('ert herna');
        const {fullName, address} = this.state.fields;
        if (fullName === '' || address === '') { return false; }
        console.log(this.state.fields);
        this.setState(initialstate);
        toastr.success('success');
        redirect = true;
    }

    render () {
<<<<<<< HEAD
        const {fullName, telephone} = this.state.fields;
=======
        const {fullName, address} = this.state.fields;
        if (redirect) {
            return <Redirect to='/review'/>;
        }
>>>>>>> 2ad45bf5d76c3820da6d8efc91b6852ad4420cce
        return (
            <div className="container">
                <Form method="get" onSubmit={e => this.onFormSubmit(e)} action="/review" >
                    <TextInput
                        onChange={e => this.onInputChange(e)}
                        name="fullName"
                        value={fullName}
                        validate={val => !val ? 'Full name is required': ''}
                    />
                     <TextInput
                         onChange={e => this.onInputChange(e)}
                         name="telephone"
                         value={telephone}
                         validate={val => !val ? 'Telephone is required': ''}
                     />
                    <Button bsStyle="primary" type="submit" >submit</Button>
                </Form>
            </div>
        )
    }
}

export default PickUpForm;
