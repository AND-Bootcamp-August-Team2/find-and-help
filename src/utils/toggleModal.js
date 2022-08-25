const ToggleModal = (parentModalId, open) => {
  console.log(parentModalId);
  document.getElementById(parentModalId).checked = open;
};

export default ToggleModal;
