import './Painting.css';

function Painting({painting}) {
  return (
    <div>
      <div className="main-container">
        <section className="title-container">
          <img src={painting.images.hero.large} alt="hero" />
          <div className="title-text-container">
            <h1>Starry Night</h1>
            <h5>Vincent Van Gogh</h5>
          </div>
        </section>
        <section className="content-container"></section>
      </div>

      <footer></footer>
    </div>
  );
}

export default Painting;