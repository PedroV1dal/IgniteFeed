import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, content, publishedAt }) {

  // Estado, o comment é a variável e o setComents é a função para atualizar
  const [comment, setComents] = useState(['Post muito bacana, hein?'])

  const [newCommentText, setNewCommentText] = useState('')

  // Uma forma de formatas datas no js
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  // Uma forma de formatas datas no js 
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true //adiciona o 'há' antes
  })

  function handleCreateNewComment() {
    event.preventDefault()
    
    
    //imutabilidade
    setComents([...comment, newCommentText])
    setNewCommentText('') // aqui reseta o valor do estado (para limpar a textarea)
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value) //aqui está pegando o valor da textarea
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        {/* Apenas colocar as funções formatadas*/}
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
     
      <div className={styles.content}> 
       {/* realiza o varrimento dos componentes e identifca seus tipos */}
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p>
                <a href="">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

       {/* adiciona a função que vai atualizar os valores */}
       {/* o onSubmit vai executar a criação de um novo comentário em qualquer ação de envio */}
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        {/* o value sempre vai manter o valor do estado, o onChange é justamente para alterar o texto */}
        <textarea onChange={handleNewCommentChange} value={newCommentText} name="comment" placeholder="Deixe seu comentário" />

        <footer>
          <button type="sumbit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
         {/* Lê o array de comentários */}
        {comment.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  )
}
