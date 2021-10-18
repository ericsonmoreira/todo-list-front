import { Button } from '@mui/material';
import { useState } from 'react';
import AddTodoModal from '../../components/AddTodoModal';
import { AddTask as AddTaskIcon } from '@mui/icons-material';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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
    </div>
  );
};

export default Home;
