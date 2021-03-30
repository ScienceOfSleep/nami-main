import styles from "./champ-name.module.css"

const ChampName = ({name}) => {
    return <div className={styles.container}>
        <h2 className={styles.name}>{name}</h2>
        <svg viewBox="0 0 500 5" className={styles.underline}>
            <path strokeWidth="100" d="M 0,3 L 500,3"/>
        </svg>
    </div>
}

export default ChampName