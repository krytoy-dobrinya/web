import { Header } from "../../components/header/Header"
import styles from "./Asteroids.module.css"
import { AsteroidCard } from "../components/AsteroidCard/AsteroidCard"
import { useState } from "react"

export const Asteroids = ()=>{
    const [asteroids] = useState(generateAsteroids());

    const [onlyDangerous, setOnlyDangerous] = useState(false);

    return <div>
        Home
        <div className={styles.showDangerousOnly} >
            <input type="checkbox" value={onlyDangerous} onChange = {()=> setOnlyDangerous(!onlyDangerous)}>
            </input> Показать только опасные
        </div>
        <div className={styles.distanceMode}>
            Расстояние<button className={styles.distanceChooser}> в км
            </button></div>
        { onlyDangerous ?
            asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard {...item}/>) :
            asteroids.map((item)=><AsteroidCard {...item}/>)
        }
    </div>
}


const generateAsteroids = ()=>{
    const month = [
        'декабрь', 'январь', 'февраль',
        'март', 'апрель', 'май',
        'июнь', 'июль', 'август',
        'сентябрь', 'октябрь', 'ноябрь',
    ]
    const characters = "ABCDEFG";
    const result = [];

    for(let i = 0; i < 10; i++) {
        const name = characters[(Math.random()*7).toFixed(0)] + characters[(Math.random()*7).toFixed(0)];
        const date = `&{(Math.random()*27 + 1).toFixed(0)} &{month(Math.random()*11 + 1).toFixed(0)} 2024`
        const size = (Math.random() * 90000000000 + 10).toFixed(0);
        const isDangerous = Math.random() >= 0.5;
        result.push({name,date,size,distance,isDangerous})
    }
    return result;
}