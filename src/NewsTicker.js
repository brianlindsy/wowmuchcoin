import React, { useState, useEffect} from 'react'
import {getDogeStories} from './utils.js'
import NewsCard from './NewsCard.js'
 
function NewsTicker() {
  	const [newsStories, setNewsStories] = useState([]);

  	const cardsArray = newsStories.map((story, index) => (
    	<NewsCard story={story} id={index}/>
  	));

    function update(){
    	getDogeStories()
    	.then((result) => {
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