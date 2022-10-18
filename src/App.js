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
        <Product products={products}/>
      </main>
    </div>
  );
}

// products array
const products = [
  {
    "id": 1,
    "name": "Alghe wakame",
    "price": "3",
    "image": "https://delivebo.herokuapp.com/storage/uploads/alghe_wakame.png",
  },
  {
    "id": 2,
    "name": "Pizza 4 Formaggi",
    "price": "6.5",
    "image": "https://delivebo.herokuapp.com/storage/uploads/pizza_4_formaggi.png",
  },
  {
    "id": 3,
    "name": "Pizza ai Funghi",
    "price": "6.5",
    "image": "https://delivebo.herokuapp.com/storage/uploads/pizza_funghi.png",
  },
  {
    "id": 4,
    "name": "Pizza Bresaola e Grana",
    "price": "8",
    "image": "https://delivebo.herokuapp.com/storage/uploads/pizza_breasola_rucola_grana.png",
  },
  {
    "id": 5,
    "name": "Totopos",
    "price": "6",
    "image": "https://delivebo.herokuapp.com/storage/uploads/totopos.png",
  },
  {
    "id": 6,
    "name": "Yasai yaki meshi",
    "price": "6",
    "image": "https://delivebo.herokuapp.com/storage/uploads/yasai_yaki_meshi.png",
  },
];

export default App;
