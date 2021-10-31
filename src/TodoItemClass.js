import React from "react";
class TodoItem extends React.Component {
  state = {
    value: "",
  };

  handleChange=(e)=> {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { b } = this.props;
    if (this.state.value.trim()) {
      b(this.state.value.trim());
      this.setState({ value: "" });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoItem;
