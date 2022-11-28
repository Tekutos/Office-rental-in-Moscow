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
      <div className={`${base}_ellipse1`}></div>
      <span className={`${base}_span3`}>o renti one</span>
      <span className={`${base}_span4`}>8 years of impeccable reputation</span>
      <span className={`${base}_span5`}>
        <p>
          We help entrepreneurs from the CIS countries to find office space in
          New York, mainly in the central part of the city.
        </p>
        Among our clients there are both small startups of 4-6 people, and large
        businesses with thousands of employees. Therefore, we can help any
        company, regardless of the scale.
      </span>
      <span className={`${base}_span6`}>Go to the catalog</span>
      <div className={`${base}_ellipse2`}></div>
      <div className={`${base}_arrow3`}>
        <i className="arrow right1"></i>
      </div>
      <span className={`${base}_span7`}>89</span>
      <span className={`${base}_span8`}>646</span>
      <span className={`${base}_span9`}>
        Properties in Brooklyn, Manhattan, the Bronx and Queens
      </span>
      <span className={`${base}_span10`}>
        Current tenants in Twenty One today
      </span>
    </div>
  );
}

export default PopularOffices;
