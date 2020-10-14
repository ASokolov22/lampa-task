import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './OrderForm.css';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.surname) {
        errors.surname = 'Required'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (isNaN(Number(values.phone))) {
        errors.phone = 'Must be a number';
    }
    return errors
};

const warn = values => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
};

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div className="form-group">
            <input className="form-control" {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const SyncValidationForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form
            className="order-form"
            onSubmit={handleSubmit}>
            <Field name="name" type="text" component={renderField} label="Name"/>
            <Field name="surname" type="text" component={renderField} label="Surname" />
            <Field name="address" type="text" component={renderField} label="Address" />
            <Field name="phone" type="phone" component={renderField} label="Phone" />
            <div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'syncValidation', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn // <--- warning function given to redux-form
})(SyncValidationForm)