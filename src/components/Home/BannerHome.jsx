import React from 'react';
import Banner from '../Layout/Banner';
import bannerHome from '../../styles/img/bannerHome-kasa.webp'

const BannerHome = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={bannerHome}
        />
    )
}

export default BannerHome;