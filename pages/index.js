import { connectToDatabase } from '../util/mongodb'
import {useState, useEffect} from "react"

export default function Home({supports}) {
    const [ opponent, setOpponent ] = useState("Swain")
    const [ opponentObject, setOpponentObject] = useState([])

    useEffect(() => {
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
        <form>
            <label htmlFor="opponent">Opponent</label>
            <select
                id="opponent"
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
          <div>
              <h2>{opponentObject.name}</h2>
              <h3>MS: {opponentObject.ms}</h3>
              <p>AA: {opponentObject.range.aa} Q: {opponentObject.range.q} W: {opponentObject.range.w} E: {opponentObject.range.e} R: {opponentObject.range.r}</p>
              <p>{opponentObject.notes}</p>
          </div>
        {/*<ul>*/}
        {/*    {supports.map((support) => (*/}
        {/*        <li key={support.name}>*/}
        {/*            <h2>{support.name}</h2>*/}
        {/*            <h3>MS: {support.ms}</h3>*/}
        {/*            <p>AA: {support.range.aa} Q: {support.range.q} W: {support.range.w} E: {support.range.e} R: {support.range.r}</p>*/}
        {/*            <p>{support.notes}</p>*/}
        {/*        </li>*/}
        {/*    ))}*/}
        {/*</ul>*/}
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