import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    { name: 'test', email: 'test@test.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json({users})
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: { name: 'test', email: 'test@test.com' },
            message: {body: 'body',subject: 'subject'}
    })
        return res.send('sucess')
    }
}