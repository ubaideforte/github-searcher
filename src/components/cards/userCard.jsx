import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const { name, avatar } = props;

  return (
    <Row className="card" justify="space-around">
      <Col sm={6} md={6} lg={6}>
        <img src={avatar} alt="user-avatar" className="card-image" />
      </Col>
      <Col sm={17} md={16} lg={16}>
        <Row>
          <Col span={24}>
            <p>{name}</p>
          </Col>
          <Col span={24}>
            <Link to={{ pathname: "/repositories", state: { userName: name } }}>
              <p className="text-small">Repositories</p>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserCard;
