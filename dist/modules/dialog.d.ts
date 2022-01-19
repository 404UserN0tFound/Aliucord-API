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
declare function show(options?: DialogOptions): void;
export { show };
