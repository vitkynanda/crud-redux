import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getUserDetail } from "../actions/userAction";
import DetailComponent from "../components/DetailComponent";

function DetailContainer({ dispatch, match }) {
  useEffect(() => {
    dispatch(getUserDetail(match.params.id));
  });
  return (
    <Container>
      <div style={{ width: "600px", margin: "auto", marginTop: "50px" }}>
        <DetailComponent />
      </div>
    </Container>
  );
}

export default connect()(DetailContainer);
