import React from 'react';
import {Form,  Button } from 'react-bootstrap';
import TextInput from '../TextInput/TextInput';
import toastr from 'toastr';

const initialstate = {
    fields: {
        fullName: '',
        address: '',
    }
}

class PickUpForm extends React.Component {
    constructor(props) {
        super(props);
            this.state = initialstate;
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
    }

    render () {
        const {fullName, telephone} = this.state.fields;
        return (
            <div className="container">
                <Form action="" method="get" onSubmit={e => this.onFormSubmit(e)}>
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
