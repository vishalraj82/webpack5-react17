import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";

const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Webpack5  React17  SCSS</div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
