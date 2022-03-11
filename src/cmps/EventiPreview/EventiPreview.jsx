
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment'
import ImgContainer from './ImgContainer'
import NotificationAlert from './NotificationAlert'
import RateStar from './RateStar';
import PreviewTxt from './previewTxt';

const EventiPreview = ({ eventi, isEventiAdmin = false }) => {
    const navigate = useNavigate();
    const [org, setOrg] = useState(null)
    useEffect(() => {
        if (eventi?.byOrg) {
            const orgId = eventi.byOrg._id
            setOrg(eventi.byOrg)
        }
    }, [eventi])

    return (
        <li
            className={"eventi-preview card-preview flex-column"}
            onClick={() => navigate('/openDetails')}
        >
            <ImgContainer eventi={eventi} />
            {org && <NotificationAlert notifications={eventi.notifications} isEventiAdmin={isEventiAdmin} />}
            <section className={"mini-details-top flex space-between"}>
                {eventi.reviews?.length &&
                    <RateStar value={eventi.rate} reviewAmount={eventi.reviews.length} />
                    || <h5><i className={"star fas fa-star"}></i>New</h5>}
                <h5 className="time">{moment(eventi.startAt).format("DD/MM/YYYY")}</h5>
            </section>
            <PreviewTxt eventi={eventi} />
        </li >

    )
}

export default EventiPreview
