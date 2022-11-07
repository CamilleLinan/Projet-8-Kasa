import housings from '../../datas/logements.json'
import HousingItem from './HousingItem'

const DisplayHousings = () => {
    return(
        <section className='housings_container'>
            <ul className='housings_list'>
                {housings.map(({ id, title, cover }) => (
                    <HousingItem
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default DisplayHousings