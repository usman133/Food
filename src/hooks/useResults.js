import { useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {

const [results, setResults] = useState([]);
const [errorMessage, setErrroMessage] = useState('');

const searchApi = async searchTerm => {
  console.log('Hi there');
  try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'San Jose'
    }
  })

  setResults(response.data.businesses);
} catch (err) {
  setErrroMessage('Something went wrong');

}
}

// Call searchApi when component is first rendered
useEffect (() => {
    searchApi('pasta');
}, [])

return [searchApi, results, errorMessage]

}