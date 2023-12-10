import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import data from "./data";

export default function App(){


    const cards = data.map((item) => {
      return <Card key={item.id} {...item} />;
    });
    
    
   

    return(

    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}