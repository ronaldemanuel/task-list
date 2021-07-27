import Head from 'next/head';
import MainCard from '../src/components/MainCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Task List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <MainCard check={true} />
    </>
  )
}
