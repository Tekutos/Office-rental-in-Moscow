import Logo2 from "../Main/Logo/Logo2";
import "./OfficeShowreel.scss";

function OfficeShowreel() {
  const base = `officeShowreel`;

  return (
    <div className={`${base}`}>
      <span className={`${base}_span1`}>89 objects in one video</span>
      <span className={`${base}_span2`}>Office showreel</span>
      <div className={`${base}_img`}>
        <div className={`${base}_ellipse`}>
          <svg
            width="41"
            height="54"
            viewBox="0 0 41 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.19922 1.00684L39.5991 26.6067L1.19922 52.2067V1.00684Z"
              stroke="#E9B0B0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <Logo2 />
      <div className={`${base}_navigationFooter`}>
        <a className="a-1" href="#">
          Popular offices
        </a>
        <a className="a-2" href="#">
          About company
        </a>
        <a className="a-3" href="#">
          Office showreel
        </a>
        <a className="a-4" href="#">
          Contact
        </a>
      </div>
      <span className={`${base}_span3`}>8 800 010 88 12</span>
      <span className={`${base}_span4`}>Toll-free line</span>
      <div className={`${base}_mediaIcon`}>
        <div className={`${base}_mediaYoutube`}></div>
        <div className={`${base}_mediaFacebook`}></div>
        <div className={`${base}_mediaVK`}></div>
      </div>
      <div className={`${base}_footer`}>
        <div className={`${base}_text1`}>Privacy Policy</div>
        <div className={`${base}_text2`}>Processing of personal data</div>
      </div>
    </div>
  );
}

export default OfficeShowreel;
