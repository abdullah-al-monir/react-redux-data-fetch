import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";
const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  return (
    <div>
      <h1>Todos App</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h4>
                  {todo.id}. {todo.title}
                </h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
