import { AsteroidCardAction } from "./AsteroidCardAction/AsreroidCardAction"
import { AsteroidCardContent } from "../AsteroidCardAction/AsreroidCardContent"
import { AsteroidCardImage } from "../AsteroidCardAction/AsreroidCardImage"




export const AsteroidCard = (props) =>{
    const {name, date, distance, size, isDangerous} = props;

    return (<div className={styles.card}>
        <div className={isDangerous ? styles.cardRed : styles.regularCard}></div>
        <AsteroidCardImage/>
        <AsteroidCardContent name={"First"} date={"22 april 2024"} distance={120000} size={200} />
        <AsteroidCardAction/>
        <AsteroidCardAction/>
        <AsteroidCardAction/>
        <AsteroidCardAction/>
    </div>)
}
