import styles from "./title.module.css"

const Title = () => {
    return <div className={styles.container}>
        <h1 className={styles.title}>Nami Main</h1>
        <svg viewBox="0 0 500 5" className={styles.underline}>
            <path strokeWidth="100" d="M 0,3 L 500,3"/>
        </svg>
    </div>
}

export default Title