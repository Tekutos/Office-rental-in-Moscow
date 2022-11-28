import "./PopularOffices.scss";

function PopularOffices() {
  const base = "offices";
  return (
    <div className={`${base}`}>
      <span className={`${base}_span1`}>RELEVANT</span>
      <span className={`${base}_span2`}>Popular offices</span>
      <div className={`${base}_adressList`}>
        <ul>
          <li>1155 Avenue of the Americas</li>
          <li>One Five One</li>
          <li>401 Rutland RD</li>
          <li>20 Grand Ave</li>
          <li>69 Stratford Rd</li>
          <li>8305 Bergenline Ave</li>
          <li>825 Third Ave</li>
        </ul>
      </div>
      <div className={`${base}_img1`}></div>
      <div className={`${base}_img2`}></div>
      <div className={`${base}_backgroundDescription`}></div>
      <div className={`${base}_description`}>
        <p>A 45-storey Class A business center</p> in the center of Manhattan.
        Available in more than 40 offices and open space space
      </div>
      <div className={`${base}_arrow1`}>
        <i className="arrow right"></i>
      </div>
      <div className={`${base}_arrow2`}>
        <i className="arrow left"></i>
      </div>
    </div>
  );
}

export default PopularOffices;
