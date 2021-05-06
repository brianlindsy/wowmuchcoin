import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: '100%'
  }
});

export default function NewsListItem(props) {
  const classes = useStyles();

  return (
    <GridListTile className={classes.root} cols={2}>
    <Card>
      <CardActionArea>
        <Avatar src="/static/images/Chino_Bowtie_2.jpeg"
          alt="Chino Bowtie"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
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