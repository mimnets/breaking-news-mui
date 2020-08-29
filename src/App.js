import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([])
  console.log(news);
  useEffect(() => {
    const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=7f0156c232c4429a80c5c302fc0cbd7a'
    fetch(url)
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  return (
    <div>
      {
        news.map(bnews => <News news ={bnews}></News>)
      }
    </div>
  );
}

export default App;
