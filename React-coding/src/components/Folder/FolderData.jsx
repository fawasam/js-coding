/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.css";
const FolderData = ({
  explorerData,
  handleInsertNode,
  handleDelete,
  handleUpdate,
}) => {
  const [expand, seteExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    seteExpand(true);
    e.stopPropagation();
    setShowInput({ visible: true, isFolder });
  };

  const handleAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value.trim() !== "") {
      const folderName = e.target.value;
      handleInsertNode(explorerData.id, folderName, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const updateNode = (e) => {
    e.stopPropagation();
    const folderName = prompt("Enter new name", explorerData.name);
    if (folderName) {
      handleUpdate(explorerData.id, { name: folderName });
    }
  };

  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => seteExpand(!expand)}>
          <span>📁{explorerData.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <span onClick={(e) => updateNode(e)}>📝</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(explorerData.id);
              }}
            >
              ❌
            </span>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                // value={showInput.value}
                onKeyDown={handleAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorerData.items.length &&
            explorerData.items.map((exp) => {
              return (
                <FolderData
                  explorerData={exp}
                  key={exp.id}
                  handleInsertNode={handleInsertNode}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              );
            })}
        </div>
      </div>
    );
  } else {
    // eslint-disable-next-line react/prop-types
    return (
      <div className="file">
        📄{explorerData.name} <span onClick={(e) => updateNode(e)}>📝</span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(explorerData.id);
          }}
        >
          ❌
        </span>
      </div>
    );
  }
};

export default FolderData;
