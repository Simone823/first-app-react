// import app css
import './App.css';

// import component 1
import MyHeader from './components/MyHeader';

// import product component
import Product from './components/Products';

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
        <Product products={data.products}/>
      </main>
    </div>
  );
}

export default App;
