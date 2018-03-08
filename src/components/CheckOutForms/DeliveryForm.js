import React from 'react'
import TextInput from '../TextInput/TextInput';
import {Form, Button} from 'react-bootstrap';
import toastr from 'toastr';
import { Redirect } from 'react-router-dom';

const initialstate = {
    fields: {
        fullName: '',
        address: '',
        telephone: ''
    }
}

var redirect = false;
class DeliveryForm extends React.Component {

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
        localStorage.setItem('myData', e);
        console.log('ert herna');
        const {fullName, telephone, address} = this.state.fields;
        if (fullName === '' || telephone === '' || address === '') { return false; }
        console.log(this.state.fields);
        this.setState(initialstate);
        toastr.success('success');
        redirect = true;
    }

    render () {
        const {fullName, telephone, address} = this.state.fields;
        if (redirect) {
            return <Redirect to='/review'/>;
        }
        return (
            <div className="container">
                <Form action="/review" method="get" onSubmit={e => this.onFormSubmit(e)}>
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
                     <TextInput
                         onChange={e => this.onInputChange(e)}
                         name="address"
                         value={address}
                         validate={val => !val ? 'Address is required': ''}
                     />
                    <Button bsStyle="primary" type="submit" >submit</Button>
                </Form>
            </div>
        )
    }
}

export default DeliveryForm;
