import React from 'react'

function alert(props) {
    return (
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center text-light}`} role="alert">
                <strong>{props.alert.message}</strong>
            </div>
    )
}

export default alert
