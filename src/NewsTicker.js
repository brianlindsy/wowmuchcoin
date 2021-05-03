import React, { useState, useEffect, useRef } from 'react'
import {getDogeStories} from './utils.js'
import Ticker from 'react-ticker'
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar'
import NewsCard from './NewsCard.js'
 
function NewsTicker() {
  	const [newsStories, setNewsStories] = useState(new Array());

  	const cardsArray = newsStories.map((story, index) => (
    	<NewsCard story={story} id={index}/>
  	));

    function update(){
    	getDogeStories()
    	.then((result) => {
    		console.log("Current stories: " + JSON.stringify(result));
      		setNewsStories(result);
    	});
  	}

  	useEffect(() => {
    	update();
  	}, []);
 
  	return (
  		<>
  			{cardsArray}
  		</>
  	);
}
 
export default NewsTicker;