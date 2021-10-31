const TodoList = ({ x }) => {
  return (
    <ul>
      {x.map((el, index) => {
        return <li key={index}>{el.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
