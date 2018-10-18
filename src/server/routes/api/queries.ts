import * as express from 'express';
import { Queries } from '../../db';

const router = express.Router();

router.get('/commitnumber/:id', async (req, res, next) => {

    try {
        res.json(await Queries.GetCommitNum(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/interviewresults/:id', async (req, res, next) => {
    try {
        res.json(await Queries.GetInterviewResults(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numberintweek/:id/:start/:end', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumIntWeek(req.params.id, req.params.start, req.params.end));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numberjobapps/:id', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumJobApp(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numbermockint/:id', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumMockInt(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/numbernetact/:id', async (req, res, next) => {
    try {
        res.json(await Queries.GetNumNetworkAct(req.params.id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;