// import app css
import './App.css';

// import component 1
import MyHeader from './components/MyHeader';

// import product component
import Products from './components/Products';

function App() {
  // data products json
  const data = require('./products.json');

  return (
    // app
    <div className="App">
      {/* my header */}
      <MyHeader/>

      {/* main */}
      <main>
        {/* product */}
        <Products products={data.products}/>
      </main>
    </div>
  );
}

export default App;
