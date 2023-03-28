import { Redirect, useHistory } from "react-router-dom";

function Stocks() {
  const loggedIn = true;
  let history = useHistory();
  if (!loggedIn) {
    return <Redirect to="/not-logged-in" />;
  }
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
