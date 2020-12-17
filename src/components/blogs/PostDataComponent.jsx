import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  CardImg,
} from "reactstrap";
import { fetchPostData } from "../../redux/actions/postList.action";
import PropTypes from "prop-types";
import { LoaderComponent } from "../LoaderComponent";

const PostDataComponent = ({ dataList, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPostData()), [dispatch]);

  return !loading ? (
    <Row className="justify-content-center">
      {dataList?.map((item) => (
        <Col md={5} sm={12} key={item.id}>
          <Card className="rounded">
            <div className="inner">
              <CardImg top width="100%" src={item.image} />
            </div>
            <CardBody className="pl-0">
              <CardSubtitle tag="h6" className="mb-2">
                {item.category}
              </CardSubtitle>
              <CardTitle tag="h2">{item.content}</CardTitle>
              <CardText className="text-muted">{item.description}</CardText>
              <a href="!#">baca artikel</a>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  ) : (
    <LoaderComponent show={loading} />
  );
};

const mapStateToProps = (state) => ({
  dataList: state.postResult.activities,
  loading: state.postResult.loading,
});

PostDataComponent.protoTypes = {
  dataList: PropTypes.array,
  loading: PropTypes.bool,
};
export default connect(mapStateToProps)(PostDataComponent);
