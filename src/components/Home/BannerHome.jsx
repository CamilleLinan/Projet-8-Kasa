import bannerHome from '../../styles/img/bannerHome-kasa.webp'

const BannerHome = () => {
    return(
        <div className="banner">
            <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
            <img src={bannerHome} alt='banniere-kasa' className='banner_img' />
        </div>
    )
}

export default BannerHome;