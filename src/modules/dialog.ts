import { getModule } from "./module";

const dialogModule = getModule((m) => m.default?.show).default;

interface DialogOptions {
  title: string;
  body?: string;
  confirmText?: string;
  confirmColor?: string;
  secondaryConfirmText?: string;
  cancelText?: string;
  
  onConfirm?: () => void;
  onSecondaryConfirm?: () => void;
  onCancel?: () => void;
}

/**
 * Show a dialog box
 */
function show(options: DialogOptions = { title: "Default dialog" }) {
  window["aliucord"].dialog.show(options);
}

export {
  show
}