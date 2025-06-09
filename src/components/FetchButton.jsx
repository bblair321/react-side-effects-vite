// Step 1: Accept `fetchJoke` as a prop

const FetchButton = ({ fetchJoke }) => {
  return (
    <button onClick={fetchJoke}>Get a New Joke</button>
  );
};

export default FetchButton;

