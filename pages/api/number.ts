import { NextApiRequest, NextApiResponse } from 'next'
import randomNumber from './utils/random-number'

interface Data {
  number?: string;
  message?: string;
}

const number = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  const number:Number  = randomNumber()
  if (_req.method === 'POST') {
    res.status(200).json({ number: number.toString() })
    return true
  }
  res.status(400).json({ message: 'Method Not Allowed' })
}

export default number
