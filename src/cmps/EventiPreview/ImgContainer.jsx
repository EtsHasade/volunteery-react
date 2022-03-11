
import { useState, useEffect } from 'react';

const ImgContainer = ({ eventi }) => {
    console.log({ eventi });
    const [imgIdx, setImgIdx] = useState(0);
    const [imgUrl, setImgUrl] = useState('');
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    useEffect(() => {
        if (eventi?.imgUrls) {
            const idx = (imgIdx % eventi.imgUrls.length) ;
            setImgUrl(eventi.imgUrls.at(idx));
        }
    }, [eventi, imgIdx]);

    return (
        <div className={'img-squer-container'}>
            {!isImgLoaded && <div className={'loading flex center'}>LOADING...</div>}
            <img hidden={!isImgLoaded} onLoad={() => setIsImgLoaded(true)} src={imgUrl} alt={''} />

            <p className={'country preview-card-country'}>{eventi.location?.country}</p>
            <button className={'btn-img-nav next'} onClick={(ev) => {
                ev.stopPropagation()
                setImgIdx(imgIdx + 1)
            }}>
                <i className={'fas fa-arrow-circle-right'}></i>
            </button>
            <button className={'btn-img-nav prev'} onClick={(ev) => {
                ev.stopPropagation()
                setImgIdx(imgIdx - 1)
            }} >
                <i className={'fas fa-arrow-circle-left'}></i>
            </button >
        </div >
    )
}

export default ImgContainer
