import React from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate, deleteUser } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};

function CreateContainer(props) {
  const handleSubmit = (data) => {
    props.dispatch(postUserCreate(data));
    props.dispatch(deleteUser());
  };

  if (props.getResponseDataUser || props.errorResponseDataUser) {
    if (props.errorResponseDataUser) {
      swal(
        "User Failed to Created!",
        "There is something wrong, try again later",
        "error"
      );
    } else {
      swal("User Created !", "User create Successfully", "success");
    }
  }
  return (
    <Container>
      <FormComponent onSubmit={(data) => handleSubmit(data)} />
    </Container>
  );
}

export default connect(mapStateToProps, null)(CreateContainer);
