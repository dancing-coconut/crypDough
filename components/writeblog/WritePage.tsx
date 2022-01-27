import NavigationBar from "../NavigationBar";
import styles from "./WritePage.module.css"

function WriteBlog() {
  return (
    <div className={styles.PostPage__div}>
      <NavigationBar itemcolor="#FFFFFF" bgcolor="#5B10A8" />
      <h4 className={styles.Post__title}>Create a Post</h4>
      <hr className={styles.Post__line} />
      <select className={styles.Post__topic}>
        <option value="none" selected disabled hidden>
          Choose a Topic
        </option>
        <option>Investments</option>
        <option>Transactions</option>
        <option>Bitcoin Mining</option>
      </select>
      <div className={styles.Postbox__container}>
        <div className={styles.PostBox}>
          <input type="text" placeholder="Title" className={styles.PostTitle}></input>
          <div className={styles.Post__Additions}>
            <button className={styles.Post}>Post</button>
            <button className={styles.Post__options}>Photos</button>
            <button className={styles.Post__options}>Links</button>
            <button className={styles.Post__options}>Polls</button>
          </div>
          <textarea
            className={styles.Post__area}
            placeholder="Text (optional)"
          ></textarea>
          <div className={styles.Post__buttons}>
            <button className={styles.Posting__options}>Save</button>
            <button className={styles.Posting__options}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteBlog;