import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/componentes/Header/header";
import Mensagem from "@/componentes/Mensagem/mensagem";
import Contador from "@/componentes/State/state";
import Produtos from "./pages/Produtos/page";

export default function Home(){
    return(
        <>
        <h2>Inico</h2>
        <Header />
        <p>---------------------------------------</p>
        <div>
            <h2>Props</h2>
            <Mensagem nome="Christian" />
        </div>
        <p>---------------------------------------</p>
        <div className={styles.contar}>
            <h2>State</h2>
            <Contador />
        </div>
        </>
    )
}