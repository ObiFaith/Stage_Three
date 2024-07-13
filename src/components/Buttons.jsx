import { Link } from "react-router-dom";

export const Btn = ({name, to}) => <Link to={to} className="btn">{name}</Link>
export const Button = ({name}) => <button type="submit" className="btn">{name}</button>