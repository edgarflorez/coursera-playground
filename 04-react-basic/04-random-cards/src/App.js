import Card from './Card'
import './App.css';

const randNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
  return (
    <>
      <h1>Task: ad three Card elements</h1>
      <Card num={randNum()}/>
      <Card num={randNum()}/>
      <Card num={randNum()}/>
    </>
  );
}

export default App;
