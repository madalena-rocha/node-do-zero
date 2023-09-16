import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
  #videos = new Map() // chave privada (informação visível somente dentro dessa classe)

  // Estruturas de dados Set e Map
  // O Set é como se fosse um array no JS, mas não aceita valores duplicados
  // O Map é como se fosse um objeto no JS, mas com algumas particularidades

  list() {
    return this.#videos.values()
  }

  create(video) {
    const videoId = randomUUID()

    this.#videos.set(videoId, video)
    // O método set serve para adicionar uma informação dentro do Map
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }
}