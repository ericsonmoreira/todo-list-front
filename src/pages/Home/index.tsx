import { AddTask as AddTaskIcon } from '@mui/icons-material';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import AddTodoModal from '../../components/AddTodoModal';
import TodoItem from '../../components/TodoItem';
import useTodos from '../../hooks/useTodos';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const { todos, loading } = useTodos();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddTaskIcon />}
        onClick={handleOpen}
      >
        Add TODO
      </Button>
      <AddTodoModal open={open} onClose={handleClose} />
      {loading ? (
        <CircularProgress />
      ) : (
        <Stack spacing={4} p={2}>
          <Typography variant="h4">TODOs</Typography>
          {todos.map((todo) => (
            <TodoItem data={todo} key={todo.id} />
          ))}
        </Stack>
      )}
    </div>
  );
};

export default Home;
