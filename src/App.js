import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

function App() {
  const products = [
          {
            "name": "iPhone 14 Pro Max",
            "unit_price": 5000,
            "stock": 5,
            "type": "technology"
          },
          {
            "name": "Timon Racing Carrera",
            "unit_price": 8000,
            "stock": 2,
            "type": "technology"
          },
          {
            "name": "Control joystick inalámbrico",
            "unit_price": 1000,
            "stock": 1,
            "type": "technology"
          },
          {
            "name": "Bicicicleta Roadmaster",
            "unit_price": 1800,
            "stock": 1,
            "type": "sport"
          },
          {
            "name": "Bicicleta Todo Terreno",
            "unit_price": 200,
            "stock": 0,
            "type": "sport"
          },
          {
            "name": "Balon De Futbol",
            "unit_price": 120,
            "stock": 6,
            "type": "sport"
          },
          {
            "name": "Ducha Electrica",
            "unit_price": 120,
            "stock": 8,
            "type": "building"
          },
          {
            "name": "Gabinete De Baño",
            "unit_price": 650,
            "stock": 10,
            "type": "building"
          },
          {
            "name": "Mueble Sanitario",
            "unit_price": 900,
            "stock": 2,
            "type": "building"
          } 
        ]
      
  return (
    <div className="App">
      <Header/>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
