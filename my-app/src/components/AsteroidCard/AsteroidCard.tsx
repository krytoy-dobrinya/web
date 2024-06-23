import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction"
import { AsteroidCardContent } from "./AsteroidCardAction/AsteroidCardContent"
import { AsteroidCardImage } from "./AsteroidCardAction/AsteroidCardImage"

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
    },
    size: number;
    isDangerous: boolean;
    distanceMode: boolean
}


export const AsteroidCard = (props: AsteroidCardProps) =>{
    const {isDangerous, size, distance, name, date} = props;

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
