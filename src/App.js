import './App.css';
import Banner from "./components/Banner";
import Header from "./components/Header";
import CardProfissionais from "./components/CardProfissionais";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <div className="grid">
            <CardProfissionais nome="Dutch van der Linde" tamImg="165px" img="/Dutch.jpg" Ocupacao="Lider" Status="Morto"></CardProfissionais>
            <CardProfissionais nome="Hosea Matthews" img="/Hosea.webp"  Ocupacao="Segundo em comando" Status="Morto"></CardProfissionais>
            <CardProfissionais nome="Arthur Morgan" img="/Arthur.png"  Ocupacao="Cobrador" Status="Morto"></CardProfissionais>
        </div>
        <Footer></Footer>

    </div>
  );
}

export default App;
