import styles from "./stats-container.module.css"

const StatsContainer = ({supports, opponentObject}) =>{
    return <div className={styles.container}>
        <div className={styles.champ}>
            <h2>Nami</h2>
            {supports.map((support) =>{
                if (support.name === "Nami"){
                    return <ul className={styles.list}>
                        <li>MS: {support.ms}</li>
                        <li>AA: {support.range.aa}</li>
                        <li>Q: {support.range.q}</li>
                        <li>W: {support.range.w}</li>
                        <li>E: {support.range.e}</li>
                        <li>R: {support.range.r}</li>
                    </ul>
                }
            }
            )}
        </div>
        <h2 className={styles.vs}>VS</h2>
        {opponentObject.length === 0 ? <h2>Opponent</h2> :
            <div className={styles.champ}>
                <h2>{opponentObject.name}</h2>
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