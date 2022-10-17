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
    name: 'Pc Dell OptiPlex 3000 8GB DDR4-SDRAM 512GB SSD Nero',
    price: '799.99',
    image: 'https://it.crucial.com/content/dam/crucial/articles/for-pc-builders/new025-how-to-upgrade-your-pc/modern-gaming-pc.jpg.transform/medium-jpg/img.jpg'
  },

  {
    name: 'Pc Dell OptiPlex 8000 32GB DDR4-SDRAM 512GB SSD Nero',
    price: '950.99',
    image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/products/desktops-and-all-in-ones/optiplex/5400-aio/media-gallery/optiplex-5400aio-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=2000&hei=2000&qlt=100,1&resMode=sharp2&size=2000,2000&chrss=full&imwidth=5000'
  },
];

export default App;
