import React from 'react';
import { Route } from 'react-router';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { useParams } from "react-router-dom";


function App() {
  
  // const galleries = GalleryNavigation(harvardArt.records);
  const galleryNum = harvardArt.records.gallerynumber
  console.log(harvardArt.records);

  const { galleryID } = useParams();

  // console.log(galleries.gallerynumber);
  return (
    <div>
      <h1>Hello from App</h1>
      <nav className="galleries">
        <GalleryNavigation galleries={harvardArt.records}/>
      </nav>

      
      
      <Route path="/galleries/:galleryID">
        <GalleryView galleries={harvardArt.records}/>
      </Route>



    </div>
    

  );
}

export default App;
