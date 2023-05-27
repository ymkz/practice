import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Form, useForm } from 'react-hook-form'
import { Header } from '../components/header'

const SimpleFormPage = () => {
  const router = useRouter()
  const { control, register } = useForm<{
    name: string
  }>()

  const handleSuccess = () => {
    router.push('/done')
  }

  return (
    <>
      <Head>
        <title>SimpleFormPage</title>
      </Head>
      <Header />
      <h3>SimpleFormPage</h3>
      <Form
        action="/api/submit"
        method="post"
        encType="application/json"
        control={control}
        onSuccess={handleSuccess}
      >
        <div>
          <label>name: </label>
          <input type="text" {...register('name')} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </Form>
    </>
  )
}

export default SimpleFormPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.info('REQUEST INCOMING: ', '/simple')
  return { props: {} }
}
