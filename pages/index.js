import { connectToDatabase } from '../util/mongodb'
import {useState, useEffect} from "react"
import OpponentSelect from "../components/opponent-select";
import Header from "../components/header";
import Footer from "../components/footer";
import Title from "../components/title";
import StatsContainer from "../components/stats-container";

export default function Home({supports}) {
    const [ opponent, setOpponent ] = useState("Swain")
    const [ opponentObject, setOpponentObject] = useState([])

    useEffect(() => {
        setOpponentObject([])

        supports.map((support) => {
            if (support.name === opponent){
                setOpponentObject(support)
            }
        }),
        [opponent, opponentObject]
    })

    return (
      <main>
        <Header/>
        <Title/>
        <OpponentSelect supports={supports} opponent={opponent} setOpponent={setOpponent}/>
        <StatsContainer supports={supports} opponentObject={opponentObject}/>
        <Footer/>
      </main>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase();
    const supports = await db
        .collection("Supports")
        .find({})
        .toArray();
    return {
        props: {
            supports: JSON.parse(JSON.stringify(supports)),
        },
    };
}