import styles from "./stats-container.module.css"
import ChampName from "./champ-name";

const StatsContainer = ({supports, opponentObject, allyObject}) =>{
    return <div className={styles.container}>
            {allyObject.length === 0 ? <h2>Opponent</h2> :
                <div className={styles.champ}>
                    <ChampName name={allyObject.name}/>
                    <ul className={styles.list}>
                        <li>MS: {allyObject.ms}</li>
                        <li>AA: {allyObject.range.aa}</li>
                        <li>Q: {allyObject.range.q}</li>
                        <li>W: {allyObject.range.w}</li>
                        <li>E: {allyObject.range.e}</li>
                        <li>R: {allyObject.range.r}</li>
                    </ul>
                    <p>{allyObject.notes}</p>
                </div>
            }
        <h2 className={styles.vs}>VS</h2>
        {opponentObject.length === 0 ? <h2>Opponent</h2> :
            <div className={styles.champ}>
                <ChampName name={opponentObject.name}/>
                <ul className={styles.list}>
                    <li>MS: {opponentObject.ms}</li>
                    <li>AA: {opponentObject.range.aa}</li>
                    <li>Q: {opponentObject.range.q}</li>
                    <li>W: {opponentObject.range.w}</li>
                    <li>E: {opponentObject.range.e}</li>
                    <li>R: {opponentObject.range.r}</li>
                </ul>
                <p>{opponentObject.notes}</p>
            </div>
        }
    </div>
}

export default StatsContainer