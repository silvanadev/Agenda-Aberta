import "./logo.css";

function Logo(props) {
  return (
        <img
          className="logo"
          src={props.logo}
          alt="Agenda Aberta" 
        />
  );
}

export default Logo;