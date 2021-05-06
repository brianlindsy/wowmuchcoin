import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Title from './Title';
import NewsListItem from './NewsListItem.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
    overflowX: 'auto'
  },
  gridList: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    flexDirection: 'row'
  }
}));

const tileData = [
{
  img: '/static/images/chino.jpeg',
  title: 'MAY 5th DOGE UPDATE FROM CHINO',
  content: "TODAY DOGECOIN WENT UP AND THEN IT WENT DOWN AND THEN I GOT A TREAT BECAUSE AM GOOD BOI."
}
];

export default function HorizontalScrollBlog() {
  const classes = useStyles();

  return (
    <>
    <Title>DAILY DOGECOIN UPDATE FROM OUR GOOD BOI REPORTER CHINO THE DOGGO</Title>
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {tileData.map((newsItem) => (
          <NewsListItem newsItem={newsItem}/>
        ))}
      </GridList>
    </div>
    </>
  );
}