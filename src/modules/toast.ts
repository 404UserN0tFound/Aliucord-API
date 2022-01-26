interface ToastMessage {
  content: string;
  source: number;
}

function showToast(message: ToastMessage) {
  window.aliucord.toast.showToast(message);
}

export {
  showToast
}