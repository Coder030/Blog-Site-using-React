import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <img src={require('./images/not.png')} alt="" />
      <Link to="/" className="link"><p className="link-content">Homepage</p></Link>
    </div>
  );
}
 
export default NotFound;