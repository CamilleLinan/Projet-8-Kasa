import bannerImg from '../../styles/img/banner-kasa.webp'

const Banner = () => {
    return(
        <div className="banner">
            <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
            <img src={bannerImg} alt='banniere-kasa' className='banner_img' />
        </div>
    )
}

export default Banner