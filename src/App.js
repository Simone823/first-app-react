// import app css
import './App.css';

// import component 1
import MyHeader from './components/MyHeader';

// import product component
import Product from './components/Product';

function App() {
  return (
    // app
    <div className="App">
      {/* my header */}
      <MyHeader/>

      {/* main */}
      <main>
        {/* product */}
        <Product/>
      </main>
    </div>
  );
}

export default App;
