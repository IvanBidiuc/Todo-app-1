import React, { useCallback, useContext, useState, FormEvent } from 'react';
import { TodoContext } from 'components/context/TodoContext';
import dayjs from 'dayjs';
import 'components/molecules/EditCategory/EditCategory.css';

export const EditCategory = () => {
  const { newcategory, setNewcategory } = useContext<any>(TodoContext);
  const [editTodo, setEditTodo] = useState<any>([]);
  const [editDescription, setEditDescription] = useState<any>([]);
  const [editCatValue, setEditCatValue] = useState<any>([]);

  const editTime = () => {
    let today = new Date();
    let dateTime = dayjs(today).format('MMM D, YYYY h:mm A');
    return dateTime;
  };
  const EditCategory = (newcategory: any) => (event: any) => {
    event.preventDefault();
    console.log(newcategory.id);
  };
  // const EditCategory = useCallback(
  //   (newcategory: any, index: any) => (event: FormEvent<HTMLFormElement>) => {
  //     const editCat = [...newcategory];
  //     editCat.splice(index, 1, {
  //       ...newcategory,
  //       id: Math.round(Math.random() * 10000),
  //       title: editTodo,
  //       description: editDescription,
  //       done: false,
  //       priority: editCatValue,
  //       date: editTime()
  //     });
  //     setNewcategory(editCat);
  //   },
  //   [newcategory, editTodo, editDescription, editTime, editCatValue]
  // );

  const setTodo = useCallback(
    (event) => {
      setEditTodo(event.target.value);
    },
    [editTodo]
  );

  const setDesc = useCallback(
    (event) => {
      setEditDescription(event.target.value);
    },
    [editDescription]
  );

  const editValue = useCallback(
    (event: any) => {
      setEditCatValue(event.target.value);
    },
    [editCatValue]
  );

  const hideBox = () => {
    let x: any = document.getElementById('edit');
    x.style.display === 'none'
      ? (x.style.display = 'block')
      : (x.style.display = 'none');
  };

  return (
    <div className="form_box_edit__cat" id="edit" style={{ display: 'none' }}>
      <span onClick={hideBox}>X</span>
      <form onSubmit={EditCategory} className="add_form">
        <h3>Priority level:</h3>
        <select onChange={editValue} className="priority_select">
          <option value="none">none</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <br />
        <input
          type="text"
          onChange={setTodo}
          value={editTodo}
          placeholder="Add Todo"
        />
        <br />
        <input
          type="text"
          onChange={setDesc}
          value={editDescription}
          placeholder="Add Description"
        />
        <br />
        <button className="btn_add">Add</button>
      </form>
    </div>
  );
};