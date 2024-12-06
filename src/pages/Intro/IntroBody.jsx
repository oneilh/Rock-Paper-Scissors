import { Link } from "react-router";

const IntroBody = () => {
  return (
    <section className="landing_page">
      <div>
        <h1>Rock Paper Scissors</h1>
        <p>5 game series</p>
      </div>
      <Link to='/register' className="btn">Start</Link>
    </section>
  );
};

export default IntroBody;
