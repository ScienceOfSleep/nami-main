import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const supports = await db
        .collection("Supports")
        .find({})
        .toArray();

    res.json(supports);
};