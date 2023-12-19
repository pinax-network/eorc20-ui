export async function fetcher(pathname: string) {
    const response = await fetch(`https://api.eorc20.io/${pathname}`);
    const json = await response.json();
    return json.data;
}