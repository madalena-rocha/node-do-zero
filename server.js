import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
  return 'Hello World'
})

server.get('/hello', () => {
  return 'Hello Rocketseat'
})

server.get('/node', () => {
  return 'Hello Node.js'
})

server.listen({
  port: 3333,
})