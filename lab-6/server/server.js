import express from 'express';
import cors from 'cors';
import tripRoutes from './routes/trips.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    // res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
    res.status(200).sendFile(path.resolve(__dirname, '../client/web103_unit6_lab-main/public/index.html'))
});

app.use('/trips', tripRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
