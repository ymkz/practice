import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Form, useForm } from 'react-hook-form'
import { Header } from '../components/header'

type Item = {
  id: number
  title: string
  status: '0' | '1' | '2'
}

const data: Item[] = [
  { id: 10, title: 'aaa', status: '0' },
  { id: 11, title: 'bbb', status: '1' },
]

const ComplexFormPage = () => {
  const router = useRouter()
  const { control, register } = useForm()

  const handleSuccess = () => {
    router.push('/done')
  }

  return (
    <>
      <Head>
        <title>ComplexFormPage</title>
      </Head>
      <Header />
      <h3>ComplexFormPage</h3>
      <Form
        action="/api/submit"
        method="post"
        encType="application/json"
        control={control}
        onSuccess={handleSuccess}
      >
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <label>status: </label>
                  <input
                    type="hidden"
                    value={item.status}
                    {...register(`${item.id}.prev`)}
                  />
                  <select
                    defaultValue={item.status}
                    {...register(`${item.id}.next`)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button type="submit">submit</button>
        </div>
      </Form>
    </>
  )
}

export default ComplexFormPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.info('REQUEST INCOMING: ', '/complex')
  return { props: {} }
}
