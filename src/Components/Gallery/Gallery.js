import './Gallery.css';

function Gallery({data}) {
  return (
    <div className="gallery-container">
      {
        data.map(painting => {
          return (
            <div className="gallery-item">
              <img src={painting.images.thumbnail} alt="gallery-pic" />
              <div className="item-info">
                <div>
                  <h2>{painting.name}</h2>
                  <h5>{painting.artist.name}</h5>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Gallery;