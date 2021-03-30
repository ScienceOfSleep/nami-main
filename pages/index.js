import { connectToDatabase } from '../util/mongodb'
import {useState, useEffect} from "react"
import OpponentSelect from "../components/opponent-select";
import Header from "../components/header";
import Footer from "../components/footer";
import Title from "../components/title";
import StatsContainer from "../components/stats-container";
import Layout from "../components/layout";
import AllySelect from "../components/ally-select";
import SelectContainer from "../components/select-container";

export default function Home({supports}) {
    const [ opponent, setOpponent ] = useState("Swain")
    const [ opponentObject, setOpponentObject] = useState([])
    const [ ally, setAlly ] = useState("Nami")
    const [ allyObject, setAllyObject] = useState([])

    useEffect(() => {
        setOpponentObject([])

        supports.map((support) => {
            if (support.name === opponent){
                setOpponentObject(support)
            }
        }),
        [opponent, opponentObject]
    })

    useEffect(() => {
        setAllyObject([])

        supports.map((support) => {
            if (support.name === ally){
                setAllyObject(support)
            }
        }),
        [ally, allyObject]
    })

    return (
      <main>
        <Header/>
        <Layout>
        <Title/>
        <SelectContainer>
            <AllySelect supports={supports} setAlly={setAlly}/>
            <OpponentSelect supports={supports} setOpponent={setOpponent}/>
        </SelectContainer>
        <StatsContainer supports={supports} opponentObject={opponentObject} allyObject={allyObject}/>
        </Layout>
        <Footer/>
      </main>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase();
    const supports = await db
        .collection("Supports")
        .find({})
        .sort({name: 1})
        .toArray();
    return {
        props: {
            supports: JSON.parse(JSON.stringify(supports)),
        },
    };
}