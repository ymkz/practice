import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  console.info('REQUEST INCOMING', '/api/submit')
  console.info('REQUEST BODY: ', req.body)

  return res.status(200).json({ status: 'ok' })
}

export default handler
