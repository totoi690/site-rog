import Header from './Estrutural/header'
import Body from './Estrutural/body'
import Footer from './Estrutural/footer'
import Navegation from './Estrutural/navegation'
import "./custom.scss"
 
const App = () => {
    return (
      <div className="app">
        <Navegation />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
 
export default App;
