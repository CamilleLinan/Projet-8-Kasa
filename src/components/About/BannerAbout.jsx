import bannerAbout from '../../styles/img/bannerAbout-kasa.webp'

const BannerAbout = () => {
    return(
        <div className="banner">
            <h1 className="banner_title">À propos</h1>
            <img src={bannerAbout} alt='banniere-kasa' className='banner_img' />
        </div>
    )
}

export default BannerAbout;