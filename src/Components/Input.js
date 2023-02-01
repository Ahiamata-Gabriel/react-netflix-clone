function Input() {
  return (
    <div className="Input--container">
      <input className="Input" type="text" placeholder="Email address"></input>
      <button className="Input--btn">
        Get started{' '}
        <img
          className="forward-icon"
          src="./images/forward.png"
          alt="forward-icon"
        ></img>{' '}
      </button>
    </div>
  );
}

export default Input;
