import React from 'react'
import TextInput from '../TextInput/TextInput';
import {Form, Button} from 'react-bootstrap';
import toastr from 'toastr';

const initialstate = {
    fields: {
        fullName: '',
        address: '',
        telephone: ''
    }
}

class DeliveryForm extends React.Component {

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
        localStorage.setItem('myData', e);
        console.log('ert herna');
        const {fullName, telephone, address} = this.state.fields;
        if (fullName === '' || telephone === '' || address === '') { return false; }
        console.log(this.state.fields);
        this.setState(initialstate);
        toastr.success('success');
    }

    render () {
        const {fullName, telephone, address, postCode, city} = this.state.fields;
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
                        validate={val => !val ? 'Thelephone is required': ''}
                     />
                     <TextInput
                         onChange={e => this.onInputChange(e)}
                         name="address"
                         value={address}
                         validate={val => !val ? 'Address is required': ''}
                     />
                     <TextInput
                         onChange={e => this.onInputChange(e)}
                         name="postCode"
                         value={postCode}
                         validate={val => !val ? 'Post code is required': ''}
                     />
                     <TextInput
                         onChange={e => this.onInputChange(e)}
                         name="city"
                         value={city}
                         validate={val => !val ? 'city is required': ''}
                     />
                    <Button bsStyle="primary" type="submit" >submit</Button>
                </Form>
            </div>
        )
    }
}

export default DeliveryForm;
