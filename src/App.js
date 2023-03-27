import './style/App.scss'
import {
    Header,
    Home,
    About,
    Menu,
    ChefInfo,
    Awards,
    Gallery,
    FindUs,
    Footer,
} from './components/index'

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Menu />
            <ChefInfo />
            <Awards />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    );
}

export default App;
