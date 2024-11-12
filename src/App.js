import './App.css';
import Area from './Area';

function App() {
  return (
    <div id='container'>
      <Area id={"a"} url={"https://picsum.photos/id/51/600/600"} />
      <Area id={"b"} url={"https://picsum.photos/id/11/600/600"} />
      <Area id={"c"} url={"https://picsum.photos/id/15/600/600"} />
      <Area id={"d"} url={"https://picsum.photos/id/20/600/600"} />
    </div>
  );
}

export default App;