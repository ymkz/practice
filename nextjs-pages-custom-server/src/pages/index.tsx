import { incrementHelloCounter } from '~/utils/metrics'

export const getServerSideProps = () => {
  incrementHelloCounter()
  return { props: {} }
}

// biome-ignore lint/nursery/noDefaultExport: nextjs pages required default export
export default function Page() {
  return (
    <>
      <div>Page</div>
    </>
  )
}
