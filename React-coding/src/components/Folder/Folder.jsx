import { useState } from "react";

import explorer from "../../data/folderData";
import FolderData from "./FolderData";
import useTraverseTree from "../../hooks/useTraverseTree";
const Folder = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode, updateNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finaleTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finaleTree);
  };

  const handleDelete = (folderId) => {
    const finaleTree = deleteNode(explorerData, folderId);
    setExplorerData(finaleTree);
  };
  const handleUpdate = (folderId, item) => {
    const finaleTree = updateNode(explorerData, folderId, item);
    setExplorerData(finaleTree);
  };

  return (
    <div>
      <h2>File Explorer</h2>
      {explorerData ? (
        <FolderData
          explorerData={explorerData}
          handleInsertNode={handleInsertNode}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ) : (
        <h1>Folder is empty</h1>
      )}
    </div>
  );
};

export default Folder;
