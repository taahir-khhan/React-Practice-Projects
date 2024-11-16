import React, { useState } from "react";
import data from "./data";

function Accordion() {
  const [selectedID, setSelectedID] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleIDs, setmultipleIDs] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelectedID(currentId === selectedID ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
    // Copy of usestate multileIDs array
    let copyOfMultipleIDs = [...multipleIDs];
    const findIndexOfCurrentId = copyOfMultipleIDs.indexOf(currentId);

    if (findIndexOfCurrentId === -1) copyOfMultipleIDs.push(currentId);
    else copyOfMultipleIDs.splice(findIndexOfCurrentId, 1);

    setmultipleIDs(copyOfMultipleIDs);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white h-[80vh]">
      <button
        className="py-3 px-6 bg-red-600 text-white rounded-lg mb-8 font-medium border-none outline-none"
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        {enableMultipleSelection ? "Disable" : "Enable"} Multiple Selection
      </button>

      <div className="flex flex-col items-center justify-center gap-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultipleSelection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="w-[600px] flex flex-col items-center justify-center py-3 px-6 bg-yellow-400 rounded-sm cursor-pointer border-2 border-black transition-colors duration-300 hover:bg-yellow-600 hover:border-white"
            >
              <div className="w-full flex justify-center items-center mb-4">
                <h3 className="text-xl">{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multipleIDs.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selectedID === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}

              {/* {selectedID === dataItem.id ||
              multipleIDs.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found !</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
