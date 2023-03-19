import { useSelector } from "react-redux"
const facts = ['прообразом Чубакки стал пёс режиссёра', 'актёрам разрешили подобрать любимый цвет для своих световых мечей;', 'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину;', 'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу;', 'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок.']
export default function FactsList(){
    const count = useSelector(state=>state.countSlice.count);
    console.log(count);
    console.log(facts.slice(0, count));
    return (
        <ul>
            {facts.slice(0, count).map(fact=>(
                <li key={self.crypto.randomUUID()}>{fact}</li>
            ))}
        </ul>
    )
}