import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/65179606?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Vidal</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                
                <time title='11 de maio as 13:13' dateTime='2022-05-11 13:13:00 '>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Blablablalbalbalbalbalablablablabl</p>
                <p>👉 <a href="#">vidal.design/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto </a> 
                    <a href='#'>#nlw </a>
                    <a href='#'>#rocketseat</a>  
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='sumbit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}