import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'

const DonePage = () => {
  return (
    <>
      <Head>
        <title>DonePage</title>
      </Head>
      <Header />
      <div>DonePage</div>
    </>
  )
}

export default DonePage

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.info('REQUEST INCOMING: ', '/done')
  return { props: {} }
}
