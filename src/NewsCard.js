import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <GridListTile>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.story.imageUrl}
          title={props.story.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.story.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.story.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={props.story.url} target="_blank">Follow Story</Button>
      </CardActions>
    </Card>
    </GridListTile>
  );
}
