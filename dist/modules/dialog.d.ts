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
declare function show(options?: DialogOptions): void;
export { show };
