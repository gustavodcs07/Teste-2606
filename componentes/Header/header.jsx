import Link from "next/link";
import styles from './Header.module.css';

export default function Header(){
    return(
        <>
        <header className={styles.header}>
            <nav>
                <Link href="/">Home</Link>
                <Link href="pages/Produtos">página de produtos</Link>
            </nav>
        </header>
        </>
    );
}