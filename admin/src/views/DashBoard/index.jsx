import React, { useCallback, useEffect, useState } from "react";
import DashBoard from "../../components/DBoard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPage } from "../../Store/Action/Dashboard";

const Dashboard = () => {
  const [usePage, setUsePage] = useState("1");
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    return state.Dashboard.listPage;
  });

  const fetchPage = useCallback(() => {
    dispatch(fetchUserPage(usePage));
  }, [usePage, dispatch]);

  useEffect(() => {
    fetchPage();
  }, [usePage, dispatch]);

  return (
    <div>
      <DashBoard user={users} setUsePage={setUsePage} />
    </div>
  );
};

export default Dashboard;
