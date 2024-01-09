import { incrementHelloCounter } from '~/utils/metrics'

export const getServerSideProps = () => {
  incrementHelloCounter()
  return { props: {} }
}

export default function Page() {
  return (
    <>
      <div>Page</div>
    </>
  )
}
