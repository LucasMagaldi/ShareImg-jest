import express, {Router} from 'express';

const server = express();
const router = Router();

server.use(express.json());

router.get('/', (req, res) => {
    return res.status(200)
})

server.listen(3000, () => {
    console.log("***** RUNNING AT 3000 *****");
})