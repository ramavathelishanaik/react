import { useEffect, useState } from "react";
import { rgbToHex } from "../utils/rgbtohex";
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  let bcg = rgb.join(",");
  let external_hexcolor = rgbToHex(...rgb); //from function stackover flow
  let hexValue = `#${hexColor}`; //library itself

  const [alert, setAlert] = useState(false);

  const handleCopiedColor = (hexValue) => {
    navigator.clipboard.writeText(hexValue);
    setAlert(true);
  };

  useEffect(() => {
    let timeid = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearInterval(timeid);
    };
  }, [alert]);

  return (
    <div
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => handleCopiedColor(hexValue)}
    >
      <p className="">{weight}%</p>
      <p className={`${index > 10 ? "text-white" : "text-black"}`}>
        {hexValue}
      </p>
      {alert && (
        <p className="text-center mt-auto p-2 bg-gray text-white">copied</p>
      )}
    </div>
  );
};
export default SingleColor;
