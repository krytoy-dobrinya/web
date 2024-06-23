import { Header } from "../../components/header/Header"
import styles from "./Asteroids.module.css"
import { AsteroidCard } from "../components/AsteroidCard/AsteroidCard"
import { useEffect, useState } from "react"

export const Asteroids = ()=>{
    const [asteroids, setAsteroids] = useState<{type AsteroidCardProps = {
        name: string;
        date: string;
        distance: {
            kilometers: number;
        },
        size: number;
        id: string;
        isDangerous: boolean
    }[]>([]);

    const [onlyDangerous, setOnlyDangerous] = useState(false);

     useEffect(()=> {
        try {
            const result = fetch("https://api.nasa.gov/planetary/apod?api_key=YwZ6qlqhjQWr0uKQyFu52KfVgg1abjzzNaXBU4fn").then((res)=>{
                return res.json()
            }).then((response)=> {
                const rawAsteroids = []
                for(const data in response.near_earth_objects) {
                    rawAsteroids.concat(response.near_earth_objects[data])
                }
                const asteroids = rawAsteroids.map(item=>{
                    const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + estimated_diameter_min) / 2);
                    const close = item.close_approach_data[0]

                    return {
                        name: item.name, date: close.close_approach_date,
                        size, distance: {kilometers: close.miss_distance.kilometers}, 
                        isDangerous: item.is_potentially_hazardous_asteroid, id: item.id
                    }
                })
                return result
            })
            setAsteroids(result)
        } catch(err) {
            console.log(err)
        }
     }, [])

    return <div>
        Home
        <div className={styles.showDangerousOnly} >
            <input type="checkbox" value={onlyDangerous as string} onChange = {()=> setOnlyDangerous(!onlyDangerous)}>
            </input> Показать только опасные
        </div>
        <div className={styles.distanceMode}>
            Расстояние<button className={styles.distanceChooser}> в км
            </button></div>
        { onlyDangerous ?
            asteroids.filter((it)=>it.isDangerous).map((item)=>
            <AsteroidCard key={item.id} {...item}/>) : asteroids.map((item)=>
            <AsteroidCard key={item.id} {...item}/>)
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
        result.push({name,date,size,distance,isDangerous,id: name})
    }
    return result;
}