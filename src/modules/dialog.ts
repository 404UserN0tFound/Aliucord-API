const dialogModule = getModule((m) => m.default?.show).default;

interface DialogOptions {
  title: string;
  body?: string;
  confirmText?: string;
  confirmColor?: string;
  secondaryConfirmText?: string;
  cancelText?: string;
  
  onConfirm?: () => {};
  onSecondaryConfirm?: () => {};
  onCancel?: () => {};
}

/**
 * Show a dialog box
 */
function show(options: DialogOptions = { title: "Default dialog" }) {
  dialogModule.show(options);
}

export {
  show
}