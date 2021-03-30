import styles from "./select.module.css"

const AllySelect = ({supports, setAlly}) =>{
    return <form className={styles.container}>
        <label htmlFor="opponent" className={styles.label}>Your Support:</label>
        <select
            id="opponent"
            defaultValue="Nami"
            onChange={event => setAlly(event.target.value)}
            onBlur={event => setAlly(event.target.value)}
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

export default AllySelect