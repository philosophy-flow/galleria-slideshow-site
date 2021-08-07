import './Gallery.css';

import {Link} from "react-router-dom";

function Gallery({data}) {
  return (
    <div className="gallery-container">
      {
        data.map(painting => {
          return (
            <Link to={`/${painting.name}`} key={painting.name} >
              <div 
                className="gallery-item" 
                onClick={() => console.log(painting.name)}
              >
                <img src={painting.images.thumbnail} alt="gallery-pic" />
                <div className="item-info">
                  <div>
                    <h2>{painting.name}</h2>
                    <h5>{painting.artist.name}</h5>
                  </div>
                </div>
              </div>
            </Link>
   
          )
        })
      }
    </div>
  );
}

export default Gallery;