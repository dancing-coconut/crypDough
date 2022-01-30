import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import styles from "./ProgressBar.module.css"

const iconStyles = {
  descIcon: {
    fontSize: "50px",
    color: "#5B10A8",
  },
};

const percentage = 20;

function ProgressBar() {
  return (
    <div className={styles.myprogress__div}>
      <BarChartIcon style={iconStyles.descIcon} />
      <span className={styles.myprogress__text}>Progress</span>
      <div className={styles.progressBar__div}>
        <div className={styles.progressBar__div__investments}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `#5B10A8`,
              textColor: "#5B10A8",
              trailColor: "#FFF",
            })}
          />
          <p className={styles.progressBar__descText}>INVESTMENTS</p>
        </div>
        <div className={styles.progressBar__div__transactions}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `#5B10A8`,
              textColor: "#5B10A8",
              trailColor: "#FFF",
            })}
          />
          <p className={styles.progressBar__descText}>TRANSACTIONS</p>
        </div>
        <div className={styles.progressBar__div__mining}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `#5B10A8`,
              textColor: "#5B10A8",
              trailColor: "#FFF",
            })}
          />
          <p className={styles.progressBar__descText}>MINING</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;