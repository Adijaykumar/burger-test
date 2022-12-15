import './App.css';
import Layout from './component/layout/layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';


function App() {
  return (
    <div className="App">
       <Layout> <BurgerBuilder/></Layout>
    </div>
  );
}

export default App;
