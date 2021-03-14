import React from "react";
import { useQuery } from "react-query";
import { getUserRepositories } from "../apis";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Skeleton, Button } from "antd";
import RepoCard from "../components/cards/repoCard";
import { home_action } from "../reducers/homeReducer";
import cogoToast from "cogo-toast";

/**
 * Using react-redux hooks instead of connect function.
 */

const Repositories = () => {
  const location = useLocation();

  /**
   * Same as mapStateToProps
   */
  const state = useSelector((state) => state.home.userRepos);

  /**
   * Same as mapDispatchToProps
   */
  const dispatch = useDispatch();

  /**
   * Query to get data.
   */
  const { isFetching } = useQuery(
    "getUserRepos", // key
    () => getUserRepositories(location.state ? location.state.userName : ""), // API
    {
      onSuccess: (data) => {
        console.log("DATA", data);
        dispatch(home_action.getUserRepos(data));
      },
      onError: (error) => cogoToast.error(error),
    }
  );

  return (
    <div className="list">
      <Link to="/">
        <Button>Back</Button>
      </Link>
      <br />
      <br />
      <Skeleton loading={isFetching} active={true}>
        <Row gutter={[12, 12]} align="top" justify="space-around">
          {state.map((item, index) => (
            <Col key={index} xs={24} sm={20} md={12} lg={12} xl={8}>
              <RepoCard
                name={item.name}
                createdAt={item.created_at}
                description={item.description}
                avatar={item.owner.avatar_url}
              />
            </Col>
          ))}
        </Row>
      </Skeleton>
    </div>
  );
};

export default Repositories;
