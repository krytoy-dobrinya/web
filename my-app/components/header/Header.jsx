import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export const Header = ()=>{
    return <div className={"container"}>
        <div>
            <h1>Armaggedon V</h1>
            <div>Сервис мониторинга и уничтожения</div>
        </div>
        <div>
            <Link to = {"/asteroids"}>Астероиды</Link>
            <Link to = {"/destroyment"}>Уничтожение</Link>
        </div>
    </div>
}