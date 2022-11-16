import { useParams } from 'react-router-dom';
import housings from '../../datas/logements.json'
import Collapse from '../Layout/Collapse';

const HousingPage = () => {
    const { id } = useParams()

    return (
        <> {housings.map((housing, i) => ( <>
            {id === housing.id &&
                <div key={housing.id}>
                    <div className="banner">
                        <img src={housing.cover} alt='banniere-kasa' className='banner_img' />
                    </div>
                    <div>
                        <h1>{housing.title}</h1>
                        <h2>{housing.location}</h2>
                        {housing.tags.map((tag, i) => (
                            <p>{tag}</p>
                        ))}
                    </div>
                    <div>
                        <p>{housing.host.name}</p>
                        <img src={housing.host.picture} alt='host-cover'/>
                        <p>{housing.rating}</p>
                    </div>
                    <Collapse
                        title='Description'
                        content={housing.description}
                    />
                    <Collapse
                        title='Équipements'
                        content={housing.equipments}
                    />
                </div>
            }
        </> ))} </>
    )
}

export default HousingPage;