// ProjectLoader.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Counter from "../React_Projects/01_Conter/Counter";
import TodoList from "../React_Projects/02_Todo_list/TodoList";
import ApiCalls from "../React_Projects/03_APICall/ApiCalls";
import Calculator from "../React_Projects/04_Calculator/Calculator";
import Toggler from "../React_Projects/05_Toggler/Toggler";
import SearchBar from "../React_Projects/06_HideSearchBar/SearchBar";
import Testimonials from "../React_Projects/07_Testimonials/Testimonials";
import Accordians from "../React_Projects/08_Accordians/Accordians";
import Form from "../React_Projects/09_Form_Validations/Form";

const components = {
  Counter: <Counter />,
  TodoList: <TodoList />,
  ApiCall: <ApiCalls />,
  Calculator: <Calculator />,
  Toggler: <Toggler />,
  SearchBar: <SearchBar />,
  Testimonial: <Testimonials />,
  Accordian: <Accordians />,
  Reactform: <Form />,

};

function Projects() {
  const { ProjectName } = useParams();
  console.log("ProjectName",ProjectName);
  

  const component = components[ProjectName];
  console.log("component",component);
  

  if (!component) {
    return <h2>404: Project "{ProjectName}" not found</h2>;
  }

  return component;
}

export default Projects;
