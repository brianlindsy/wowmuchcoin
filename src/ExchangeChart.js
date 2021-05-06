import { getDogeExchanges } from './utils.js';
import { useState, useEffect, useRef } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function ExchangeChart() {

	const [data, setData] = useState([]);
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
    getDogeExchanges()
    .then((result) => {
      var exchanges = result[0].tickers;
      setLastUpdated(new Date().toLocaleString());
      setData(exchanges.splice(0, 10));
    });
  }

	useInterval(() => {
    update();
  }, 60000);

  	return (
      <div>
      <Typography variant="caption" gutterBottom>Last Updated: {lastUpdated} </Typography>
      <Title>TO THE MOON</Title>
    	<TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Exchange Top 10</TableCell>
            <TableCell>DOGE Vs Currency</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>24h Volume</TableCell>
            <TableCell>Trust Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.timestamp}>
              <TableCell>
                <Avatar variant="square">
                  <img alt="Market logo" src={row.market.logo} />
                </Avatar>
                <Link target="_blank" href={row.market.trade_url}>{row.market.name}</Link>
              </TableCell>
              <TableCell>{row.base}/{row.target}</TableCell>
              <TableCell>${row.last}</TableCell>
              <TableCell>${row.volume}</TableCell>
              <TableCell>{row.trust_score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  	);
}

export default ExchangeChart;