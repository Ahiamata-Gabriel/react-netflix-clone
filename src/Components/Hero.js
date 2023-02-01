function Hero() {
  return (
    <div className="Hero">
      <header className="Header">
        <img className="Logo" src="./images/logo-1.png" alt="Logo"></img>
        <button className="Header-btn">Sign In</button>
      </header>

      <div className="Hero--text">
        <h1 className="Hero--text-h1">Unlimited movies, TV</h1>
        <h1 className="Hero--text-h1">shows, and more.</h1>
        <h3 className="Hero--text-h3">Watch anywhere. Cancel anytime.</h3>
        <h5 className="Input--h5">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
      </div>

      <div className="Input--container">
        <input
          className="Input"
          type="text"
          placeholder="Email address"
        ></input>
        <button className="Input--btn">
          Get started{' '}
          <img
            className="forward-icon"
            src="./images/forward.png"
            alt="forward-icon"
          ></img>{' '}
        </button>
      </div>
    </div>
  );
}

export default Hero;
