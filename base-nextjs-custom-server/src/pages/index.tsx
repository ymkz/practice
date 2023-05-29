import { GetServerSideProps } from 'next'
import NextHead from 'next/head'
import { Header } from '../components/header'

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} }
}

const IndexPage = () => {
  return (
    <>
      <NextHead>
        <title>IndexPage</title>
      </NextHead>
      <Header />
      <div>
        <h1>IndexPage</h1>
      </div>
    </>
  )
}

export default IndexPage
