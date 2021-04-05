import styles from "./header.module.css"
import Image from 'next/image'
import Layout from "./layout";

const Header = () => {
    return<header className={styles.header}>
        <Image
            src="/Nami-Main-full-clear.png"
            alt="Nami Main logo. Vector drawing of the head of the Tidecaller's staff."
            width={100}
            height={100}
        />
    </header>
}

export default Header