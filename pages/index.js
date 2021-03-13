import { connectToDatabase } from '../util/mongodb'

export default function Home({supports}) {
  return (
      <main>
        <h1>
          Nami Main
        </h1>
        <ul>
            {supports.map((support) => (
                <li>
                    <h2>{support.name}</h2>
                    <h3>MS: {support.ms}</h3>
                    <p>AA: {support.range.aa} Q: {support.range.q} W: {support.range.w} E: {support.range.e} R: {support.range.r}</p>
                    <p>{support.notes}</p>
                </li>
            ))}
        </ul>
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