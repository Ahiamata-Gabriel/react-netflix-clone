function SecondMain(props) {
  return (
    <div className="Main">
      <div className="Second">
        <div className="Second--img-container">
          <img className="Second--img" src={props.image} alt="TV"></img>
        </div>
        <div className="Second--text-container">
          <h1 className="Second-h1">{props.header}</h1>
          <h5 className="Second-h5">{props.phrase}</h5>
        </div>
      </div>
    </div>
  );
}

export default SecondMain;
