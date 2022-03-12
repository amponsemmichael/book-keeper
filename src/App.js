
import {Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>BookKeeper! </h1>
      <nav
      style={{
        borderBottom:"solid 1px",
        paddingBottom: "1rem",
      }}
      >
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="expenses">Expenses</Link>  | {" "}
        <Link to="docs">Docs</Link>           | {" "}
      </nav>
      <Outlet />
    </div>
  );
}

