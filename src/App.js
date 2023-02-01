import './App.css';
import './Querries.css';
import Hero from './Components/Hero';
import Main from './Components/Main';
import SecondMain from './Components/SecondMain';
import MiddleText from './Components/MiddleText';
import data from './Components/Data';
import { useState } from 'react';
import Input from './Components/Input';
import Footer from './Components/Footer';

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return selected(null);
    }

    setSelected(index);
  };

  return (
    <div className="App">
      <Hero />
      <Main
        image="./images/first-img.png"
        header="Enjoy on your TV."
        phrase=" Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
      players, and more."
      />
      <SecondMain
        image="./images/stranger-things.png"
        header="Download your shows to watch offline."
        phrase="Save your favorites easily and always have something to watch."
      />
      <MiddleText />
      <SecondMain
        image="./images/02.png"
        header="Create profiles for kids."
        phrase="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      />

      <div className="Accordian--container">
        <h1 className="Accordian-h1">Frequently Asked Questions</h1>
        <div className="Accordian">
          {data.map((item, index) => {
            return (
              <div className="Item">
                <div className="Top" onClick={() => toggle(index)}>
                  <div className="Question">{item.question}</div>
                  <span className="Fake-icon">
                    {selected === index ? 'x' : '+'}
                  </span>
                </div>
                <div className={selected === index ? 'Answer show' : 'Answer'}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h5 className="Mustfix">
        Ready to watch? Enter your email to create or restart your membership.
      </h5>
      <Input />
      <div className="Center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
