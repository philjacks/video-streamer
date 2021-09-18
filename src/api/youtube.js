import axios from 'axios'

const KEY = 'AIzaSyD3bjVP4-8K9R3MMg1gyv94Ja5o7xnvmWE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})