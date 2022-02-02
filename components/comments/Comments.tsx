import styles from "./Comments.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
interface Props{
    date:string;
    author:string;
    content:string;
}
function Comments(props:Props){
    return(
        <div className={styles.Comment__box}>
            <div className={styles.Author__section}>
                <AccountCircleIcon className={styles.Account__icon} />
                    <div className={styles.Author__details}>
                    <h5 className={styles.Author__name}>{props.author}</h5>
                    <h6 className={styles.Comment__date}>{props.date}</h6>
                </div>
            </div>
            <div className={styles.Comment__content}>{props.content}</div>
            <div className={styles.Vote__section}>
                <ThumbUpIcon className={styles.Up__icon}/>
                <ThumbDownIcon className={styles.Down__icon}/>
            </div>
        </div>
    );
}
export default Comments;