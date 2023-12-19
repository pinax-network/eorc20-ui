"use client";
import { fetcher } from "@/app/fetcher";
import useSWR from "swr";

export default function Tokens({params}: { params: {address: string } }) {
    const { data: tokens } = useSWR("tokens?address=" + params.address, fetcher)
  return (
    <div>
      <h1>tokens</h1>
      <p>{params.address}</p>
      <div>{JSON.stringify(tokens ? tokens[0]: {}, null, 2)}</div>
    </div>
  )
}
