const Info = (props) => {
  const { name, biography } = props;

  return (
    <div className="card">
      <h2>Hi! I am {name}</h2>
      <p>And this is me: {biography}</p>
    </div>
  );
};

export default Info;
