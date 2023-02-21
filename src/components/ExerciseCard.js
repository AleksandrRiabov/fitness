import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ExerciseCard({ exercise }) {
  const { name, difficulty, equipment, instructions, muscle, type } = exercise;

  return (
    <Card sx={{
      maxWidth: 345, width: '22%',
      margin: "1rem",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: '#fafafa'
    }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" mb='5px'>
          <strong> Dificulty </strong>: {difficulty}
        </Typography>
        <Typography variant="body2" mb='5px'>
          <strong> Muscle </strong>: {muscle}
        </Typography>
        <Typography variant="body2" mb='5px'>
          <strong> Equipment </strong>: {equipment}
        </Typography>
        <Typography variant="body2" mb='5px'>
          <strong> Type </strong>: {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong> Description: </strong>
          {instructions.substring(0, 100) + '..'}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: 'auto' }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}