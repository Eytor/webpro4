import React from 'react';
import { PropTypes } from 'prop-types';
import { FormGroup } from 'react-bootstrap';

const TextInput = ({ onChange, name, value, type, validate }) => {
    return (

        <FormGroup>
            <input type={type} name={name} value={value} onChange={onChange} />
            <p className="error-text">{validate(value)}</p>
        </FormGroup>

    );
};

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    validate: PropTypes.func

};

TextInput.defaultProps = {
    type: 'text',
    validate: () => ''
};

export default TextInput;
