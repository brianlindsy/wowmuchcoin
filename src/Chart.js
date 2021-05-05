import React, {useRef, useEffect, useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from './Title';
import { getHistoricalData } from './utils.js';
import Typography from '@material-ui/core/Typography';

export default function Chart() {
  const theme = useTheme();

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
    getHistoricalData()
    .then((result) => {
      setLastUpdated(new Date().toLocaleString());
      setData(result.pointsArray);
    });
  }

  useInterval(() => {
    update();
  }, 60000);

  return (
    <React.Fragment>
      <Title>Wow Very Dogecoin Data</Title>
      <Typography variant="caption">Last Updated: {lastUpdated}</Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis dataKey="time" interval="preserveStartEnd" stroke={theme.palette.text.secondary} />
          <YAxis tick={false} stroke={theme.palette.text.secondary} domain={['dataMin', 'dataMax']} >
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}>
              Price ($)
            </Label>
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}