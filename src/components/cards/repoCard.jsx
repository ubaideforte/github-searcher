import React from "react";
import { Row, Col } from "antd";
import moment from "moment";

const RepoCard = (props) => {
  const { name, avatar, createdAt, description } = props;
  return (
    <Row className="card" justify="space-around">
      <Col sm={6} md={6} lg={6}>
        <img src={avatar} alt="USER_AVATAR" className="card-image" />
      </Col>
      <Col sm={17} md={16} lg={16}>
        <Row>
          <Col span={24}>
            <p>{name}</p>
          </Col>

          <Col span={24}>
            <p className="text-small">
              Created at: {moment(createdAt).format("YYYY-MM-DD")}
            </p>
          </Col>

          <Col span={24}>
            <p className="text-small">{description}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RepoCard;
