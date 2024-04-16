import ButtonRed from '../../../components/ButtonRed';
import { useNavigate, Link } from 'react-router-dom';

export default function ChildrenNavBar(props) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">LaLakid</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active xtext" aria-current="page" to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}
