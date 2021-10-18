import { useEffect, useState } from 'react';
import api from '../api';

export interface Todo {
  id: number;
  todo: string;
  data: Date;
}

export interface CreateTodoData {
  todo: string;
  data: Date;
}

function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);

  const [loading, setLoading] = useState(true);

  const createTodo = async (todo: CreateTodoData) => {
    api.post('/todos', todo);
    feacthTodos();
  };

  const feacthTodos = async () => {
    try {
      const { data } = await api.get('/todos');

      setTodos(data as Todo[]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    feacthTodos();
  }, []);

  return { todos, createTodo, loading };
}

export default useTodos;
