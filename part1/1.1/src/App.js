const Header = () => {
  const course = "Half Stack application development";
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = () => {
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const excercises1 = 10;
  const excercises2 = 7;
  const excercises3 = 14;
  return (
    <div>
      <p>{part1} {excercises1}</p>
      <p>{part2} {excercises2}</p>
      <p>{part3} {excercises3}</p>
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
      <Header course={Header} />
      <Content content={Content} />
      <Total total={Total} />
    </div>
  )
}

export default App;


