import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';

function App() {
  
  const galleries = GalleryNavigation(harvardArt.records);
  console.log(galleries);
  return (
    <div>
      <h1>Hello from App</h1>
      <nav className="galleries">
        {galleries}
      </nav>
    </div>
    

  );
}

export default App;
