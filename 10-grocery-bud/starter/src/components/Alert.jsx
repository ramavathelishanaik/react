import { useEffect } from "react";

const Alert = ({ type, msg, show, removeAlert, list }) => {
  //when alert components, useEffect is triggered and after 3 sec alert is disapper...

  //NOTE: no need to pass dependency bcz,  we need to clear
  // the alert right...so useEffect run onces and CLEARS THE ALERT...
  useEffect(() => {
    let id = setTimeout(() => {
      //no need to pass false , type, msg bcz if you dont pass anything it will take its default values
      removeAlert();
    }, 3000);
    return () => {
      clearInterval(id);
    };
    //if any changes in list alert will be shown for 3 sec
  }, [list]);

  return (
    <div className="alerttext">
      <p className={`alert  alert-${type}`}>{msg}</p>
    </div>
  );
};
export default Alert;
