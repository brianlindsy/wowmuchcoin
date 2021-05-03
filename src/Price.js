import Typography from '@material-ui/core/Typography';

function Price(props) {
  return (
    <Typography gutterBottom variant="h4">
      ${props.price}
    </Typography>
  );
}

export default Price;