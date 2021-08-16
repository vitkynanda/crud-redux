import React from "react";
import { Container, Table } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

function DetailComponent({ getUserDetail, errorUserDetail }) {
  return (
    <Container>
      <Table striped>
        <tbody>
          <tr>
            <td width="200">ID</td>
            <td width="10">:</td>
            <td>{getUserDetail.id}</td>
          </tr>
          <tr>
            <td width="200">Name</td>
            <td width="10">:</td>
            <td>{getUserDetail.name}</td>
          </tr>
          <tr>
            <td width="200">Address</td>
            <td width="10">:</td>
            <td>{getUserDetail.address}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default connect(mapStateToProps, null)(DetailComponent);
