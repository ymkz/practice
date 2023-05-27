import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>IndexPage</title>
      </Head>
      <Header />
      <h3>IndexPage</h3>
    </>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.info('REQUEST INCOMING: ', '/')
  return { props: {} }
}
