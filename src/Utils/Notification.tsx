import { notification } from 'antd';


export const Notify = (message, description, type = "") => {
   
   switch(type){
      case "warn": {
         notification.warning({
            message: message,
            description: description,
         });
         break;
      } 
      case "success" : {
         notification.success({
            message: message,
            description: description,
         });
         break;
      }

      default : {
         notification.open({
            message: message,
            description: description,
         });
      }

   }
   

}