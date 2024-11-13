import './App.css';
import Area from './Area';

function App() {
  return (
    <div id='container'>
      <Area id={"a"} url={"https://picsum.photos/id/51/800/800"} />
      <Area id={"b"} url={"https://picsum.photos/id/11/800/800"} />
      <Area id={"c"} url={"https://picsum.photos/id/15/800/800"} />
      <Area id={"d"} url={"https://picsum.photos/id/20/800/800"} />
    </div>
  );
}

export default App;