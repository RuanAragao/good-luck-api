import { NextApiRequest, NextApiResponse } from 'next'
import randomNumber from './utils/random-number'

interface Data {
  number?: string;
  message?: string;
}

const number = (_req: NextApiRequest, res: NextApiResponse<Data>): boolean => {
  if (_req.method === 'POST') {
    const number: string = randomNumber(8).toString()
    res.status(200).json({ number: number })
    return true
  }
  res.status(400).json({ message: 'Method Not Allowed' })
}

export default number
