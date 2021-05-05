import { getData } from './utils.js';
import { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Delta from './Delta.js';
import Price from './Price.js';

function Ticker() {

	const [price, setPrice] = useState('');
	const [delta, setDelta] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    },  [callback]);

    // Set up the interval.
    useEffect(() => {
      update();
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  function update(){
    getData()
    .then((result) => {
      setLastUpdated(new Date().toLocaleString());
      setPrice(result.dogecoin.usd.toFixed(4));
      setDelta(result.dogecoin.usd_24h_change.toFixed(4));
    });
  }

	useInterval(() => {
    update();
  }, 5000);

  const useStyles = makeStyles({
  		root: {
    		maxWidth: 275,
  		},
  		title: {
    		fontSize: 14,
  		},
  		pos: {
    		marginBottom: 6,
  		},
	});

	const classes = useStyles();

  	return (
    	<Card className={classes.root}>
      		<CardContent>
        		<Typography className={classes.title} color="textSecondary" gutterBottom>
          			Dogecoin Price (DOGE)
        		</Typography>
        		<Price price={price}/>
          	<Delta delta={delta}/>
            <Typography variant="caption" gutterBottom>Last Updated: {lastUpdated} </Typography>
      		</CardContent>
    	</Card>
  	);
}

export default Ticker;