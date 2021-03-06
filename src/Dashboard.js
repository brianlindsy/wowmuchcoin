import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Chart from './Chart';
import Toolbar from '@material-ui/core/Toolbar';
import Ticker from './Ticker.js';
import NewsTicker from './NewsTicker.js';
import Avatar from '@material-ui/core/Avatar';
import ExchangeChart from './ExchangeChart.js';
import HorizontalScrollBlog from './HorizontalScrollBlog.js';
import MarketCap from './MarketCap.js';

function Copyright() {
  return (
    <div>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://wowmuchdogecoin.com/">
        Wow Much Coin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      Powered by CoinGecko API
    </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    spacing: 4
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  fixedHeightTable: {
    height: 480,
  },
  fixedHeightNewsScroll: {
    height: 250,
  },
  gridList: {
  	"width": 'auto',
    "height": 'auto',
    "overflowY": 'auto',
    "display": 'flex'
  }
}));

export default function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightTable = clsx(classes.paper, classes.fixedHeightTable);
  const fixedHeightNewsScroll = clsx(classes.paper, classes.fixedHeightNewsScroll);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Avatar alt="Dogecoin Picture" src="/static/images/Dogecoin_logo.jpeg" />
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            wowmuchdogecoin.com
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightNewsScroll}>
                <HorizontalScrollBlog />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <MarketCap />
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Price Ticker */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Ticker />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightTable}>
                <ExchangeChart />
              </Paper>
            </Grid>
            <Grid item xs={12} >
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                WOW MUCH NEWS
              </Typography>
            	<GridList className={classes.gridList} cols={3}>
          			<NewsTicker />
          		</GridList>
          	</Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
