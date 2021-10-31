import React from 'react';
const TodoItem = ({b}) => {
  const [value, setValue] = React.useState('');
  const handleChange = (e) =>{
      setValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(value.trim()){
        b(value.trim());
        setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoItem;