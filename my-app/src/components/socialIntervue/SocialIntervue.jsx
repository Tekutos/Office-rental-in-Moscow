import "./SocialIntervue.scss";

function SocialIntervue() {
  const base = "socialIntervue";
  return (
    <div className={`${base}`}>
      <div className={`${base}_text1`}>Интервью Renti One в Forbes</div>
      <div className={`${base}_line`}>
        <svg
          width="2"
          height="81"
          viewBox="0 0 2 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            opacity="0.3"
            x1="1.29565"
            y1="0.825317"
            x2="1.29565"
            y2="80.8253"
            stroke="#383838"
          />
        </svg>
      </div>
    </div>
  );
}

export default SocialIntervue;
