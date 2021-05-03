import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Delta(props) {
  const RedTextTypography = withStyles({
    root: {
      color: "#BE2525"
    }
  })(Typography);

  const GreenTextTypography = withStyles({
    root: {
      color: "#19BE16"
    }
  })(Typography);

  const delta = props.delta;

  if(delta < 0){
    return (<RedTextTypography gutterBottom variant="h4">
              <ArrowDownwardIcon/>{props.delta}% (24h)
            </RedTextTypography>);
  } else {
    return (<GreenTextTypography gutterBottom variant="h4">
              <ArrowUpwardIcon/>{props.delta}% (24h)
            </GreenTextTypography>);
  }
}

export default Delta;