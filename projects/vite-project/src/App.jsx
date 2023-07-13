import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App()
{
 
    const axeldo = {isFollowing : true, username: 'axeld0'}
    const elonmusk = {isFollowing : false, username: 'elonmusk'}
    return (
        <section className="App">
        <TwitterFollowCard {...axeldo}>
            Axel Dominguez
        </TwitterFollowCard>


        <TwitterFollowCard{...elonmusk}>
            Elon Musk
        </TwitterFollowCard>
           
        </section>

    )
}