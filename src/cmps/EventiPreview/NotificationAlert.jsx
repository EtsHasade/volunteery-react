const NotificationAlert = ({ notifications, isEventiAdmin }) => {
    return (
        <section className={"details-org-section flex align-center"}>
            {(notifications > 0 && isEventiAdmin) &&
                <h4 >
                    <i style={{ color: 'red' }} className={"fas fa-circle"}></i>
                    {notifications} notifications
                </h4>}
        </section>
    )
}

export default NotificationAlert
