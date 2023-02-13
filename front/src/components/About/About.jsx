import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css"
export default function About () {
    return(
        <div className={styles.me}>
                <div className={styles.ab}>
                    <p>Mi Nombre es Dayhana Saldarriaga y hago parte de la cohorte 10b de Henry y esta app está creada
                        con CSS, HTML, JS Y REACT. consume la Api de Rick and Morty.<br></br><br></br>
                    </p>
                <Link to={`/home`}><h3 className={styles.like}>I hope you enjoy it!</h3>
                </Link>
                </div><br></br>
        </div>
    )
}