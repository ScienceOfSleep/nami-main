import { connectToDatabase } from '../util/mongodb'

export default function Home({isConnected}) {
  return (
      <main>
        <h1>
          Nami Main
        </h1>
        {isConnected ? (
            <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
            <h2 className="subtitle">
                You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
                for instructions.
            </h2>
        )}
      </main>
  )
}

export async function getServerSideProps(context) {
    const { client } = await connectToDatabase()

    const isConnected = await client.isConnected()

    return {
        props: { isConnected },
    }
}