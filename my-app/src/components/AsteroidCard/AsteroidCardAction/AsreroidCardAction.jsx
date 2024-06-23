import styles from "./Action.module.css"


export const AsteroidCardAction = ({isDangerous}) =>{
    return (<div>
        <div className={StyleSheet.actionGrade}>{`Оценка: {isDangerous ? 'опасен' : 'не опасен'}`}</div>
        <button className={StyleSheet.action}>
            <div className={StyleSheet.actionText}>На уничтожение</div>
        </button>
    </div>)

}
