import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/todo">Todo</Link>
      </div>
      <div>
        <Link to="/movie">movie</Link>
      </div>
      <div>
        <Link to="/coin">coin</Link>
      </div>
    </div>
  );
}
