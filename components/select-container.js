import styles from "./select-container.module.css"

const SelectContainer = ({children}) => {
    return <div className={styles.container}>
        {children}
    </div>
}

export default SelectContainer