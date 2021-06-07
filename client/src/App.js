import Navigation from './components/Navigation';
import ContextWrap from './components/ContextWrap';
import './styles/base.css';

function App() {
  return (
    <div>
      <ContextWrap>
        <Navigation />
      </ContextWrap>
    </div>
  );
}

export default App;
