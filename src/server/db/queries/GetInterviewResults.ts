import pool from '../pool';

export default (userid: any) => { 
    return new Promise<IQueryGetInterviewResults>((resolve, reject) => {
        pool.query(`
        SELECT
            i.employer_id, i.interview_date, i.challenge_rcvd, i.challenge_due
        FROM 
            interviews i 
        join 
            users u on i.userid = u.id
        WHERE 
            i.userid = ?`,
            userid, 
            (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export interface IQueryGetInterviewResults {
    employer_id?: number;
    interview_date?: Date;
    challenge_rcvd?: Date;
    challenge_due?: Date;
}