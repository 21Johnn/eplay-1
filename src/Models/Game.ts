class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    id: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.system = system
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Game
