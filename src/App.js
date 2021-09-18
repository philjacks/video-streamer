import React from 'react'
import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import youtube from './api/youtube'


function App() {
  const [videos, setVideos] = useState([])



  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    setVideos(videos => ([...videos, response.data.items]))
    console.log(term)
    console.log(videos)
  }

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
    </div>
  );
}

export default App;
