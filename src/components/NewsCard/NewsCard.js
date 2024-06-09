import React from 'react';
import './NewsCard.css';

const NewsCard = ({newsItem}) => {
    // console.log(newsItem)
    const date = newsItem.publishedAt.slice(0,10)
    const time = newsItem.publishedAt.slice(11,-1)
  return (
    <div className="body">
    <div className='newsCard'>
      <div className="imgg"><img alt={newsItem.title} src={newsItem.urlToImage ? newsItem.urlToImage : newsItem.url} className='newsImage'></img></div>
      {/* <div className="data"></div> */}
      <div className='newsText'>
        <div>
            <span className='title'><b>{newsItem.title}</b></span>
        </div>
        <span className='desc'>
            
                {newsItem.description}<b><a target='_blank' href={newsItem.url}>Read More..</a></b>
            

        </span>
        <div className="date">
          <p>Date Posted : {date}</p>
          <p>Time : {time}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewsCard
