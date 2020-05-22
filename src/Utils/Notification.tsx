import { notification } from 'antd';


export const Notify = (message, description) => {
   
   notification.warning({
      message: message,
      description:description,
   });

}