import React from "react";

const AlertBox = ({ message, type }) => {
  let colorClasses = "bg-blue-500 border-blue-700 text-white";
  console.log(type, message);

  if (type === "error") {
    colorClasses = "bg-red-500 border-red-700 text-white";
  } else if (type === "success") {
    colorClasses = "bg-green-500 border-green-700 text-white";
  } else if (type === "warning") {
    colorClasses = "bg-yellow-500 border-yellow-700 text-white";
  } else if (type === "info") {
    colorClasses = "bg-blue-500 border-blue-700 text-white";
  }

  return (
    <div className="flex relative items-center justify-center">
      <div
        className={`flex absolute font-semibold items-center mt-40 p-4 border-2 w-fit rounded mb-4 ${colorClasses}`}
      >
        {message}
      </div>
    </div>
  );
};

export default AlertBox;
