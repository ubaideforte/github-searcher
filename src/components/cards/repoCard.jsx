import React from "react";
import { Row, Col } from "antd";

const RepoCard = (props) => {
  const { name, avatar } = props;
  return (
    <Row
      style={{
        padding: 16,
        border: "2px solid #f4acf4",
        borderRadius: 4,
        fontSize: 20,
      }}
      justify="space-around"
    >
      <Col sm={24} md={6} lg={6}>
        <img
          src={avatar}
          alt="USER_AVATAR"
          style={{ width: 80, height: 80, borderRadius: "50%" }}
        />
      </Col>
      <Col sm={24} md={16} lg={16}>
        <p>{name}</p>
      </Col>
    </Row>
  );
};

export default RepoCard;
