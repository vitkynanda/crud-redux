import React, { useEffect } from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";
import { getUsersList, deleteUser } from "../actions/userAction";
import { connect } from "react-redux";
function HomeContainer({ dispatch }) {
  useEffect(() => {
    dispatch(getUsersList());
    dispatch(deleteUser());
  }, [dispatch]);
  return (
    <Container>
      <TableComponent />
    </Container>
  );
}

export default connect()(HomeContainer);
