import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 300
  }
});

export default function NewsListItem(props) {
  const classes = useStyles();

  return (
    <GridListTile cols={2}>
    <Card className={classes.root}>
      <CardActionArea>
        <Avatar src="/static/images/Chino_Bowtie_2.jpeg"
          alt="Chino Bowtie"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.newsItem.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.newsItem.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </GridListTile>
  );
}