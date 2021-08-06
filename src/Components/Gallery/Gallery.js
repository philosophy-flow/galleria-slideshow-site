import './Gallery.css';

function Gallery({data}) {
  return (
    <div className="gallery-container">
      {
        data.map(painting => {
          return (
            <img src={painting.images.thumbnail} alt="gallery-pic" />
          )
        })
      }
    </div>
  );
}

export default Gallery;