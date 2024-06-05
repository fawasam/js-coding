const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId) {
      tree.items.unshift({
        id: Math.random().toString(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    // dfs

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  }

  const deleteNode = (tree, folderId) => {
    folderId = folderId.toString();
    if (tree.id === folderId) {
      return null;
    }

    tree.items = tree.items
      .map((item) => deleteNode(item, folderId))
      .filter((item) => item !== null);

    return { ...tree };
  };

  const updateNode = (tree, folderId, newData) => {
    if (tree.id === folderId) {
      return { ...tree, ...newData };
    }
    tree.items = tree.items.map((item) => updateNode(item, folderId, newData));
    return { ...tree };
  };
  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
