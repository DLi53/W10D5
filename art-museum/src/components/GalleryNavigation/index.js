import React from "react";
import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = (props) => {
   // console.log(galleries);
   props.galleries.map(gallery => {
      return (
         <div key={`${gallery.gallerynumber}`}>
            <NavLink className="gallery" to={`/galleries/${gallery.gallerynumber}`}>{`${gallery.name}`}
            </NavLink>
         </div>
      )
   })

   return(
      <nav>
         <NavLink exact to="/" key="galleries">Galleries</NavLink>
         {/* {galleryNavs} */}
      </nav> 
      
   );
   

}

export default GalleryNavigation;