import ButtonRed from '../../../components/ButtonRed';
import { useNavigate } from 'react-router-dom';

export default function ExploreNavBar(props) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">LaLakid</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <select className="btn btn-light dropdown-toggle" value={props.value} onChange={props.onChange}>
            {props.sections.map((section, index) => (
              <option key={index} value={index}>{section.name}</option>
            ))}
          </select>

        </div>
        <ButtonRed onClick={goBack} name=" Back" type="button" />
      </div>
    </nav>
  );
}
