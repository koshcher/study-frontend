class HttpService {
  base = 'https://www.anapioficeandfire.com/api'

  get = async (url) => {
    const res = await fetch(url)

    if (!res.ok) throw Error(`Can't find ${url} - status ${res.status}`)

    return await res.json()
  }

  getCharecters = async () => {
    const chars = await this.get(`${this.base}/characters?page=6&pageSize=20`)
    return chars.map(char => ({ name: char.name, url: char.url }))
  }

  getCharecter = async (id) => await this.get(`${this.base}/characters/${id}`)

}

export default HttpService