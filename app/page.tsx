import { fetcher } from './fetcher'

export default async function Home() {
  const supply = await fetcher('supply');
  const holders = await fetcher('holders');

  return (
    <div>
      <h1>supply</h1>
      <p>{JSON.stringify(supply, null, 2)}</p>
      <h1>holders</h1>
      <p>{JSON.stringify(holders, null, 2)}</p>
    </div>
  )
}
