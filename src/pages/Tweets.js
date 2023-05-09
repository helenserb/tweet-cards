import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThreeDots } from "react-loader-spinner";

import {
  addFollowing,
  removeFollowing,
} from "redux/isFollowing/isFollowingSlice";
import {
  changeQuantityFollower,
  fetchUsers,
} from "redux/users/usersOperations";

import { Dropdown } from "components/Dropdown";
import { CardList } from "components/CardList";
import { LoadMoreBtn } from "components/LoadMoreBtn";
import { BackBtn } from "components/BackBtn";

import { useUsers } from "hooks";
import { filterUsers } from "adds";

const Tweets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [userPerPage] = useState(3);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { visibleUsers, followingsUsersList, isLoading, error } = useUsers();
  const lastIdx = currentPage * userPerPage;
  const filter = searchParams.get("filter") ?? "all";
  const totalPage = Math.ceil(
    filterUsers(filter, visibleUsers).length / userPerPage
  );
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setCurrentUsers(filterUsers(filter, visibleUsers).slice(0, lastIdx));
  }, [filter, lastIdx, visibleUsers]);

  const handleClickBtn = ({ id, followers }) => {
    const inFollowers = followingsUsersList.includes(id);

    if (inFollowers) {
      dispatch(removeFollowing(id));
      dispatch(changeQuantityFollower({ id, followers: followers - 1 }));
    }
    if (!inFollowers) {
      dispatch(addFollowing(id));
      dispatch(changeQuantityFollower({ id, followers: followers + 1 }));
    }
  };

  const nextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const handleChangeValue = ({ value }) => {
    setSearchParams({ filter: value });
    setCurrentPage(1);
  };

  return (
    <>
      <BackBtn location={location} />
      <Dropdown filter={filter} handleChangeValue={handleChangeValue} />

      {!error && (
        <CardList currentUsers={currentUsers} handleClickBtn={handleClickBtn} />
      )}
      {totalPage !== currentPage && !isLoading && !error && (
        <LoadMoreBtn nextPage={nextPage} />
      )}
      {isLoading && (
        <ThreeDots
          height="200"
          width="200"
          radius="9"
          color="#5cd3a8"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: "300px",
            left: "50%",
            transform: "translate(-50%)",
          }}
          wrapperClassName=""
          visible={true}
        />
      )}
    </>
  );
};

export default Tweets;
