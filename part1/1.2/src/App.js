const part1 = "Fundamentals of React";
const part2 = "Using props to pass data";
const part3 = "State of a component";
const excercises1 = 10;
const excercises2 = 7;
const excercises3 = 14;

const Header = () => {
  const course = "Half Stack application development";
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = ({ part, excercise }) => {
  return (
    <div>
    <p>
      {part} {excercise}
    </p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part part={part1} excercise={excercises1} />
      <Part part={part2} excercise={excercises2} />
      <Part part={part3} excercise={excercises3} />
    </div>
  );
};

const Total = () => {
  const excercises1 = 10;
  const excercises2 = 7;
  const excercises3 = 14;
  return (
    <div>
      <p>Number of excercises {excercises1 + excercises2 + excercises3}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;