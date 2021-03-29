import styles from "./opponent-select.module.css"

const OpponentSelect = ({supports, opponent, setOpponent}) =>{
    return <form className={styles.container}>
        <label htmlFor="opponent" className={styles.label}>Opponent:</label>
        <select
            id="opponent"
            defaultValue="Swain"
            onChange={event => setOpponent(event.target.value)}
            onBlur={event => setOpponent(event.target.value)}
            className={styles.select}
        >
            {supports.map((support) =>
                <option
                    value={support.name}
                    key={support.name}
                >
                    {support.name}
                </option>
            )}
        </select>
    </form>
}

export default OpponentSelect