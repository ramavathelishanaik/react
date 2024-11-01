import Gallery from './Gallery';
import Searchform from './Searchform';
import Theme from './Theme';
import { useGlobalContext } from './context';


const App = () => {
 const {greet}= useGlobalContext()
  return <main>
<h2>{greet}</h2>
    <Theme/>
    <Searchform/>
    <Gallery/>
    </main>;
};
export default App;
