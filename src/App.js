import "./App.css";
import React from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoItemClass from "./TodoItemClass";

export default class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: "react", done: false },
      { id: 2, title: "angular", done: true },
      { id: 3, title: "vue", done: false },
    ],
    title: "Todo title",
    // inputValue: "",
  };
  addTodo = (inputValuePassed) => {
    const todos = this.state.todos;
    const todo = {
      id: Date.now(),
      title: inputValuePassed,
      done: false,
    };
    todos.push(todo);
    this.setState({ todos });
  };

  handleSubmit = (a) => {
    // a.preventDefault();
    // console.log(a);
    this.addTodo();
    // this.setState({ inputValue: "" });
  };
  handleChange = (a) => {
    this.setState({ inputValue: a.target.value });
    console.log(a.target.value);
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <TodoItem b={this.addTodo} />
        <TodoItemClass b={this.addTodo} />
        <TodoList x={this.state.todos} />
      </div>
    );
  }
}

// const todosItem = this.state.todos.map((el, index)=>{
//   return (
//     <li key={index}>
//       {el.title},
//       {el.id}
//     </li>
//   )
// })
