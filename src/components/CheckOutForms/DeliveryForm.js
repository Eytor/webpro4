import React from 'react'

class DeliveryForm extends React.Component {

    constructor() {
        super(props);
        this.formInfo = {};
    }

    submitForm(e) {
        e.preventDefault();

    }

    render () {
        return (
            <div className="container">
                <form action="" method="" onSubmit={(e) => this.submitForm(e)}>
                    <input type="text" value={fullName} name="fullName" onChange={(e) => this.onInputChange(e)} />
                    <input type="text" value={address} name="address" onChange={(e) => this.onInputChange(e)} />
                    <input type="text" value={city} name="city" onChange={(e) => this.onInputChange(e)} />
                    <input type="text" value={telephone} name="telephone" onChange={(e) => this.onInputChange(e)} />
                    <input type="text" value={postCode} name="postCode" onChange={(e) => this.onInputChange(e)} />
                </form>
            </div>
        )
    }


}

export default DeliveryForm;
