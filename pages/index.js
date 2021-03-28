import { connectToDatabase } from '../util/mongodb'
import {useState, useEffect} from "react"
import OpponentSelect from "../components/opponent-select";
import Header from "../components/header";
import Footer from "../components/footer";
import Title from "../components/title";
import {Head} from "next/document";

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
          <div>
            <div>
                <h2>Nami</h2>
                {supports.map((support) =>{
                    if (support.name === "Nami"){
                        return <div>
                            <h3>MS: {support.ms}</h3>
                            <p>AA: {support.range.aa} Q: {support.range.q} W: {support.range.w} E: {support.range.e} R: {support.range.r}</p>
                        </div>
                    }
                })}
            </div>
            {opponentObject.length === 0 ? <h2>Opponent</h2> :
                <div>
                    <h2>{opponentObject.name}</h2>
                    <h3>MS: {opponentObject.ms}</h3>
                    <p>AA: {opponentObject.range.aa} Q: {opponentObject.range.q} W: {opponentObject.range.w} E: {opponentObject.range.e} R: {opponentObject.range.r}</p>
                    <p>{opponentObject.notes}</p>
                </div>
            }
          </div>
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