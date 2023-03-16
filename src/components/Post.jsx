import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/65179606?v=4" className={styles.avatar}/>
                    <div className={styles.authorInfo}>
                        <strong>Pedro Vidal</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                
                <time title='11 de maio as 13:13' dateTime='2022-05-11 13:13:00 '>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">vidal.design/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto </a> 
                    <a href='#'>#nlw </a>
                    <a href='#'>#rocketseat</a>  
                </p>
            </div>
        </article>
    )
}