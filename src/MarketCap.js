import { getMarketCap } from './utils.js';
import { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Ticker() {

	const [marketCap, setMarketCap] = useState('');
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
    getMarketCap()
    .then((result) => {
      result.map((coin, index) => {
        if(coin.id === "dogecoin"){
          setMarketCap(index);
        }
      });
      setLastUpdated(new Date().toLocaleString());
    });
  }

	useInterval(() => {
    update();
  }, 60000);

  const useStyles = makeStyles({
  		title: {
    		fontSize: 14,
  		}
	});

	const classes = useStyles();

  	return (
    	<Card className={classes.root}>
      		<CardContent>
        		<Typography color="primary">
          			Dogecoin is currently number <h1>{marketCap}</h1> crypto coin by market capitilization (wow)
        		</Typography>
            <Typography variant="caption">Last Updated: {lastUpdated} </Typography>
      		</CardContent>
    	</Card>
  	);
}

export default Ticker;