import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getUserDetail, putUserUpadata } from "../actions/userAction";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};
function EditContainer(props) {
  const history = useHistory();
  useEffect(() => {
    props.dispatch(getUserDetail(props.match.params.id));
  });

  const handleSubmit = (data) => {
    props.dispatch(putUserUpadata(data, props.match.params.id));
    if (props.getResponseDataUser || props.errorResponseDataUser) {
      if (props.errorResponseDataUser) {
        swal(
          "User Failed to Update!",
          "There is something wrong, try again later",
          "error"
        );
      } else {
        swal("User Updated !", "User update Successfully", "success");
      }
    }
  };

  return (
    <Container>
      <FormComponent
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      />
    </Container>
  );
}

export default connect(mapStateToProps, null)(EditContainer);
