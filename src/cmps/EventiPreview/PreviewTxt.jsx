
import { Fragment } from 'react';

const PreviewTxt = ({ eventi }) => {
    const { title, desc, price } = eventi
    return (
        <Fragment>
            <div className={"preview-details flex-column"}>
                <p className={"card-desc flex-g1"}>
                    <span className={"card-title"}>{title}</span><br />
                    {desc}
                </p>
            </div >
            <section className={"price mr16"}>
                {(price > 0) &&
                    <p><span className={"bold"}>${price}</span> / week</p>
                    || <p >Free, just come!</p>}
            </section>
        </Fragment>
    )
}

export default PreviewTxt
