import path from 'path';
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.render('home', {});
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/age-to-storage', (req: Request, res: Response) => {
  res.render('age-to-storage', { title: 'Age to Storage' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
