import React from "react";

const Message = ({variant = "info", children}) => {
    return <div className={`alert ${variant}`}>{children}</div>
};

Message.defaultProps = {
    variant: "alert-info",
};

export default Message;