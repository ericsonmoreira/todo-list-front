import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Todo } from '../../hooks/useTodos';

interface TodoItemProps {
  data: Todo;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { data } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          {data.todo}
        </Typography>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          {data.data}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Remove</Button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
