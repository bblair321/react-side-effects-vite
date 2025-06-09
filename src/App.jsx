import { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchJoke() {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke('Failed to load a joke.');
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  );
}

export default App;