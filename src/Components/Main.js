function Main(props) {
  return (
    <div className="Main">
      <div className="First">
        <div className="First--text-container">
          <h1 className="First-h1">{props.header}</h1>
          <h5 className="First-h5">{props.phrase}</h5>
        </div>
        <div className="First--img-container">
          <img className="First--img" src={props.image} alt="TV"></img>
        </div>
      </div>
    </div>
  );
}

export default Main;
