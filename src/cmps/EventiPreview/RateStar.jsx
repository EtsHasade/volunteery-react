const RateStar = ({ value, reviewAmount = 0 }) => {
    return (
        <h5>
            <i className={'star fas fa-star'}></i>
            {value}
            <span className={'reviews-countvalue'}>({reviewAmount})</span>
        </h5>
    )
}

export default RateStar
