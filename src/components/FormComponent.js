import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";

const renderField = ({
  input,
  label,
  type,
  placeholder,
  disabled,
  readOnly,
  meta: { touched, warning, error },
}) => {
  return (
    <Row>
      <Col md="12">
        <Label htmlFor="{in put}" className="col-form-label">
          {label}
        </Label>
      </Col>
      <Col>
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
        {touched &&
          ((error && <p style={{ color: "red" }}>{error}</p>) ||
            (warning && <p style={{ color: "brown" }}></p>))}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.users.getUserDetail.name,
      address: state.users.getUserDetail.address,
    },
  };
};
class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="address"
                component={renderField}
                label="Address :"
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row className="my-3">
          <Col md={12}>
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
