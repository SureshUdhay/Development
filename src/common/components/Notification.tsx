import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStateType } from "../../store/models/root.interface";
import { INotification } from "../../store/models/notification.interface";
import { removeNotification } from "../../store/actions/notifications.action";

const Notifications: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const notifications: INotification[] = useSelector((state: IStateType) =>
    state.notifications.notifications);

  function closeNotification(id: number) {
    dispatch(removeNotification(id));
  }

  const notificationList = notifications.map(notification => {
    return (
      <div className="toast" key={`notification_${notification.id}`}>
        
      </div>
    )
  });

  return (
    <div className="toast-wrapper">
      {notificationList}
    </div>
  );
};

export default Notifications;
