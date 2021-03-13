import React, { useState } from "react";
import { getUsersApi, getAllRepositories } from "../apis";
import { home_action } from "../reducers/homeReducer";
import UserCard from "../components/cards/userCard";
import gitImage from "../images/github.png";
import { useQuery } from "react-query";
import { connect } from "react-redux";
import { Input, Button, Row, Col, Select } from "antd";
import cogoToast from "cogo-toast";
import RepoCard from "../components/cards/repoCard";

const { Option } = Select;

const Home = (props) => {
  const { users, storeUser, repos, storeRepos } = props;

  const [userName, setUserName] = useState("");
  const [searchType, setSearchType] = useState("fullname");

  // Query to get data all users
  const { refetch: getUserQuery, isFetching } = useQuery(
    "getAllUsers",
    () => getUsersApi(userName, searchType),
    {
      onSuccess: (data) => {
        console.log("Users data", data);
        storeUser(data.items);
      },
      onError: (err) => cogoToast.error(err),
      enabled: false,
    }
  );

  // Query to get all repositories
  const { refetch: getRepoQuery, isFetching: getRepoLoader } = useQuery(
    "getAllRepositories",
    () => getAllRepositories(userName),
    {
      onSuccess: (data) => {
        console.log("Repositories data", data);
        storeRepos(data.items);
      },
      onError: (err) => cogoToast.error(err),
      enabled: false,
    }
  );

  return (
    <div>
      <Row className="App-header" align="middle">
        <Col>
          <img src={gitImage} alt="Github_image" />
        </Col>
        <Col span={6}>
          <Row gutter={[24, 12]}>
            <Col span={24}>
              <Select
                style={{ width: "100%" }}
                placeholder="Search by"
                value={searchType != null ? searchType : null}
                onChange={(val) => setSearchType(val)}
              >
                <Option value="fullname">User</Option>
                <Option value="repositories">Repositories</Option>
              </Select>
            </Col>
            <Col span={24}>
              <Input
                placeholder="Search"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Col>
            <Col span={24}>
              <Button
                block
                loading={isFetching || getRepoLoader}
                onClick={() =>
                  searchType === "fullname" ? getUserQuery() : getRepoQuery()
                }
              >
                Find User
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {searchType === "fullname" ? (
        <section className="users-list">
          {users.length === 0 ? (
            <h1>No Users Found</h1>
          ) : (
            <Row justify="space-around" gutter={[12, 12]} align="middle">
              {users.map((item, index) => (
                <Col xs={24} sm={16} md={12} lg={12} xl={8}>
                  <UserCard
                    key={index}
                    name={item.login}
                    avatar={item.avatar_url}
                  />
                </Col>
              ))}
            </Row>
          )}
        </section>
      ) : (
        <section className="users-list">
          {repos.length === 0 ? (
            <h1>No Repositories Found</h1>
          ) : (
            <Row justify="space-around" gutter={[12, 12]} align="middle">
              {repos.map((item, index) => (
                <Col key={index} xs={24} sm={16} md={12} lg={12} xl={8}>
                  <RepoCard
                    name={item.owner.login}
                    avatar={item.owner.avatar_url}
                  />
                </Col>
              ))}
            </Row>
          )}
        </section>
      )}
    </div>
  );
};

const mapState = (state) => ({
  users: state.home.users,
  repos: state.home.repos,
});

const mapDispatch = (dispatch) => ({
  storeUser: (data) => dispatch(home_action.getAllUser(data)),
  storeRepos: (data) => dispatch(home_action.getAllRepos(data)),
});

export default connect(mapState, mapDispatch)(Home);
