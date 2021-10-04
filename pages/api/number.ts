import { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  number?: string;
  message?: string;
}

const number = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (_req.method === 'POST') {
    res.status(200).json({ number: '001031' })
    return true
  }
  res.status(400).json({ message: 'Method Not Allowed' })
}

export default number
