import styles from "./select.module.css"

const OpponentSelect = ({supports, setOpponent}) =>{
    return <form className={styles.container}>
        <label htmlFor="opponent" className={styles.label}>Enemy Support:</label>
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