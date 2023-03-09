import React from "react";
import AddForm from "../components/AddForm";
import DoneListContainer from "../components/DoneListContainer";
import DoneTitleLine from "../components/DoneTitleLine";
import Header from "../components/Header";
import TodoListContainer from "../components/TodoListContainer";
import WorkingTitleLine from "../components/WorkingTitleLine";


const Home = () => {
  return (
    <>
    <Header />
    <AddForm />
    <WorkingTitleLine />
    <TodoListContainer />
    <DoneTitleLine />
    <DoneListContainer />
    </>



  );
};

export default Home;
