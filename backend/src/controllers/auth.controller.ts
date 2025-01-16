import express from 'express'


export const signup = (req: express.Request, res: express.Response) => {
    res.json('signup route')
}
export const signin = (req: express.Request, res: express.Response) => {
    res.json('signin route')
}
export const logout = (req: express.Request, res: express.Response) => {
    res.json('logout route')
}