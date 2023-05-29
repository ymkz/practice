import { config } from '@app/config'
import { GetServerSideProps } from 'next'
import NextHead from 'next/head'
import { Header } from '../components/header'
import { logger } from '../server/util/logger'

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (context) => {
  logger.info({ url: context.req.url, config })
  return { props: {} }
}

const HelloPage = () => {
  return (
    <>
      <NextHead>
        <title>HelloPage</title>
      </NextHead>
      <Header />
      <div>
        <h1>HelloPage</h1>
      </div>
    </>
  )
}

export default HelloPage
