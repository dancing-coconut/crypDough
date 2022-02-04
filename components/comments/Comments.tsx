import styles from "./Comments.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
interface Props{
    date:string;
    author:string;
    content:string;
}
function Comments(props:Props){
    function display(){
        if(document.getElementById("Add__Comment").style.display === "none"){
            document.getElementById("Add__Comment").style.display = "flex";
        }else{
            document.getElementById("Add__Comment").style.display = "none";
        }
    }
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
                <KeyboardArrowDownIcon className={styles.Dropdown}/>
                <button type="button"className={styles.Reply__button} onClick={display}>
                    <CommentIcon className={styles.Reply__icon}/>
                </button>
            </div>
            <div className={styles.Comment__write} id="Add__Comment">
                <AccountCircleIcon className={styles.Account__icon} />
                <div className={styles.Comm__container}>
                    <textarea placeholder="Reply" cols="50" rows="5" className={styles.Write__comment}></textarea>
                    <div className={styles.Comment__options}>
                        <button className={styles.Comment__submit}>Submit</button>
                        <button className={styles.Comment__preview}>Preview</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Comments;