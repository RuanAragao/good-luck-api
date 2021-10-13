import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

import randomNumber from './utils/random-number'

interface Data {
  number?: string;
  message?: string;
}

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

const number = async (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Run cors
  await cors(_req, res)

  if (_req.method === 'POST') {
    const number: string = randomNumber(8).toString()
    res.status(200).json({ number: number })
    return true
  }
  res.status(400).json({ message: 'Method Not Allowed' })
}

export default number
