function Gallery({data}) {
  console.log(data[0].artist.image);
  return (
    <div>
      {
        data.map(painting => {
          return (
            <p>{painting.name}</p>
          )
        })
      }
      <img src={data[14].artist.image} alt="img" />
    </div>
  );
}

export default Gallery;