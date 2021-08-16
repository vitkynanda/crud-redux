import {
  faEdit,
  faInfo,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUserId } from "../actions/userAction";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const handleDelete = (dispatch, id, history) => {
  console.log("Delete user id" + id);
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUserId(id));
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
      history.push("/");
    } else {
      swal("Your imaginary file is safe!");
    }
  });
};

const TableComponent = (props) => {
  const { SearchBar } = Search;
  const history = useHistory();

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "address",
      text: "Address",
      sort: true,
    },
    {
      dataField: "action",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={`/detail/${row.id}`}>
              <Button color="dark" className="m-1 ">
                <FontAwesomeIcon icon={faInfo} size="sm" className="me-1" />
                <span className="text-sm-start">Detail</span>
              </Button>
            </Link>
            <Link to={`/edit/${row.id}`} className="">
              <Button color="dark" className="m-1">
                <FontAwesomeIcon icon={faEdit} size="sm" className="me-1" />
                Edit
              </Button>
            </Link>
            <Button
              color="dark"
              className="m-1"
              onClick={() => handleDelete(props.dispatch, row.id, history)}
            >
              <FontAwesomeIcon icon={faTrash} size="sm" className="me-1" />
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  return (
    <Container className="p-3">
      <h3>All Data</h3>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          columns={columns}
          data={props.getUsersList}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={`/create`}>
                    <Button color="dark">
                      Create
                      <FontAwesomeIcon icon={faPlus} className="ms-2" />
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="d-flex justify-content-end">
                    <SearchBar {...props.searchProps} />
                  </div>
                </Col>
              </Row>

              <hr />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h4>{props.errorUsersList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};
export default connect(mapStateToProps, null)(TableComponent);
