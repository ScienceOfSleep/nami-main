import { connectToDatabase } from '../util/mongodb'
import {useState, useEffect} from "react"

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
        <h1>
          Nami Main
        </h1>
        <h2>Nami</h2>
        {supports.map((support) =>{
            if (support.name === "Nami"){
                return <div>
                    <h3>MS: {support.ms ?? '0'}</h3>
                    <p>AA: {support.range.aa ?? '0'} Q: {support.range.q ?? '0'} W: {support.range.w ?? '0'} E: {support.range.e ?? '0'} R: {support.range.r ?? '0'}</p>
                </div>
            }
        })}
        <form>
            <label htmlFor="opponent">Opponent</label>
            <select
                id="opponent"
                defaultValue="Swain"
                onChange={event => setOpponent(event.target.value)}
                onBlur={event => setOpponent(event.target.value)}
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
          {opponentObject.length === 0 ? <h2>Opponent</h2> :
              <div>
                  <h2>{opponentObject.name ?? '0'}</h2>
                  <h3>MS: {opponentObject.ms ?? '0'}</h3>
                  <p>AA: {opponentObject.range.aa || '0'} Q: {opponentObject.range.q ?? '0'} W: {opponentObject.range.w} E: {opponentObject.range.e} R: {opponentObject.range.r}</p>
                  <p>{opponentObject.notes}</p>
              </div>
          }
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