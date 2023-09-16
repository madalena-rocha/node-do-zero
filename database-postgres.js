import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
  async list(search) {
    let videos

    if (search) {
      videos = await sql`select * from videos where title ilike ${'%' + search + '%'}`
      // ilike para verificar se o título contém uma string de forma case insensitive
      // '%' + search + '%' para verificar se o título contém uma string em qualquer lugar do título
    } else {
      videos = await sql`select * from videos`
    }

    return videos
  }

  async create(video) {
    const videoId = randomUUID()
    const { title, description, duration } = video

    await sql`insert into videos (id, title, description, duration) values (${videoId}, ${title}, ${description}, ${duration})`
  }

  async update(id, video) {
    const { title, description, duration } = video

    await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`
  }

  async delete(id) {
    await sql`delete from videos where id = ${id}`
  }
}