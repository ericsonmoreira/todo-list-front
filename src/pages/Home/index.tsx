import { Button } from '@material-ui/core';
import { useState } from 'react';
import AddTodoModal from '../../components/AddTodoModal';
import { Add } from '@material-ui/icons';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button startIcon={<Add />} onClick={handleOpen}>
        Add TODO
      </Button>
      <AddTodoModal open={open} onClose={handleClose} />
    </div>
  );
};

export default Home;
