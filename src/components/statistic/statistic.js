import './statistic.css'

const statistic=require('components/statistic/statistic.json')




export const Statistic = ({stat}) => (
    <>
    <section class="statistics">
    <h2 class="title">Stat</h2>
    <ul>
        {statistic.map(stat => (
            <li key={stat.id}>{stat.label} {stat.percentage}%</li>
        ))}
    </ul>
    </section>
    </>
)




export default Statistic;
