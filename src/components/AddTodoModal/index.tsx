import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Modal,
  TextField,
  CardActions,
  Button,
} from '@material-ui/core';

interface AddTodoModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = (props) => {
  const { open, onClose, onConfirm } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
        }}
      >
        <CardHeader
          title="Criar #todo"
          subheader="Criando uma nova tarefa 🔥"
        />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField fullWidth label="Descrição" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="datetime-local"
                label="Data"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" color="error" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="outlined" onClick={onConfirm}>
            Confirmar
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default AddTodoModal;
