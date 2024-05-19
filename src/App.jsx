import React,{useState} from 'react';
import Header from '../Content/Header'
import Card from '../Content/Card'
import Footer from '../Content/Footer'
import Navbar from '../Content/Navbar';
function App() {
let [cart,setcart] = useState(0);
  return<>
    <Navbar cart = {cart}/>
      <Header/>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card setcart = {setcart}/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
}

export default App;
