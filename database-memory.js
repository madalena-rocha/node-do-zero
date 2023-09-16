import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
  #videos = new Map() // chave privada (informação visível somente dentro dessa classe)

  // Estruturas de dados Set e Map
  // O Set é como se fosse um array no JS, mas não aceita valores duplicados
  // O Map é como se fosse um objeto no JS, mas com algumas particularidades

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        // Array.from converte uma estrutura de dados que não é um array para um array
        // O entries, diferente do value, retorna o id do vídeo separado do restante das informações do vídeo
        // Retorna um array com vários arrays dentro, onde cada um dos arrays representa um vídeo, 
        // onde a primeira chave do array é o id, e a segunda chave é o restante das informações

        const id = videoArray[0]
        const data = videoArray[1]

        return {
          id,
          ...data,
        }
      })
      .filter(video => {
        if (search) {
          return video.title.includes(search)
        }

        return true
        // O método filter espera retornar true caso queira manter o vídeo dentro da listagem
        // ou false caso queira retirar o vídeo da listagem
      })
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