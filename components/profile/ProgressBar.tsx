import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BarChartIcon from "@mui/icons-material/BarChart";

const iconStyles = {
  descIcon: {
    fontSize: "50px",
    color: "#5B10A8",
  },
};

const percentage = 20;

function ProgressBar() {
  return (
    <div className="myblogs__div">
      <BarChartIcon style={iconStyles.descIcon} />
      <span className="myblogs__text">Progress</span>
      <div className="progressBar__div">
        <div className="progressBar__div--investments">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `#5B10A8`,
              textColor: "#5B10A8",
              trailColor: "#FFF",
            })}
          />
          <p className="progressBar__descText">INVESTMENTS</p>
        </div>
        <div className="progressBar__div--transactions">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `#5B10A8`,
              textColor: "#5B10A8",
              trailColor: "#FFF",
            })}
          />
          <p className="progressBar__descText">TRANSACTIONS</p>
        </div>
        <div className="progressBar__div--mining">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `#5B10A8`,
              textColor: "#5B10A8",
              trailColor: "#FFF",
            })}
          />
          <p className="progressBar__descText">MINING</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;