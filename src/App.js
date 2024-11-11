import './App.css';
import Area from './Area';

function App() {
  return (
    <div id='container'>
      <div className="area-a">
        <Area url="https://picsum.photos/id/5/200/200" />
      </div>
      <div className="area-b">
        <Area url="https://picsum.photos/id/10/200/200" />
      </div>
      <div className="area-c">
        <Area url="https://picsum.photos/id/15/200/200" />
      </div>
      <div className="area-d">
        <Area url="https://picsum.photos/id/20/200/200" />
      </div>
    </div>
  );
}

export default App;
