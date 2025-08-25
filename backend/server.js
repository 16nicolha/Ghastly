const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 5000; // backend runs on port 5000

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection string
const uri = "mongodb+srv://hnicolas:n4jkmhLkJlKQZo8J@cluster0.uxeafsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB Atlas");

        const db = client.db("Ghastly");
        const recommendations = db.collection("Recommendations");

        // API endpoint: fetch recommendations by tier
        app.get("/recommendations", async (req, res) => {
            const { tier } = req.query;
            try {
                const results = await recommendations
                    .find({ tier: Number(tier) })
                    .toArray();
                res.json(results);
            } catch (err) {
                console.error("❌ Error fetching recommendations:", err);
                res.status(500).json({ error: err.message });
            }
        });

        // Start server after DB is connected
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });

    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err);
    }
}

run().catch(console.dir);
