import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//   console.log('Tabela apagada!')
// })

sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log('Tabela criada!')
})
// O sql é uma função que usa a funcionalidade de template strings do JS,
// que é uma função onde não é necessário usar parênteses para chamar ela,
// usando diretamente a crase