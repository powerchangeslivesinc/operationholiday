import { Request, Response } from 'express';
//add new applicant
//method name: createApplicant
export const createApplicant = async (req: Request, res: Response) => {
    try {
        const {name, email} = req.body;
        if (!name || !email){
            res.status(400).json({message: "Need name and email"});
        }
    } catch (error:any){
        console.error(error);
        res.status(500).json({ message: "Server error"});
    }
}

//get all applicants
//method name: getApplicants

export const getApplicants = async (req: Request, res: Response) => {
    try {
        res.status(200).json({message: "All applicants fetched successfully"});

    } catch(error){
        res.status(500).json({ message: "Server error"});
    }
}