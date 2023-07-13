import { useState } from "react"

export function TwitterFollowCard({children, username}){  

    const [isFollowing, setIsFollowing]= useState(false)
    

    const text = isFollowing ? 'Stop Following' : 'Follow'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const userName = `@${username}`
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
             alt= "el avatar" src={`https://unavatar.io/${username}`} />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className= 'tw-followCard-infoUsername'>{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text} 
            </button>
        </aside>
    </article>
    )
}