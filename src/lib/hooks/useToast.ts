import { useState, useCallback } from 'react';
import { ToastProps } from '../../components/ui/Toast';

interface Toast extends Omit<ToastProps, 'onClose'> {
  id: string;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showSuccess = useCallback((message: string) => {
    addToast({ message, type: 'success' });
  }, [addToast]);

  const showError = useCallback((message: string) => {
    addToast({ message, type: 'error' });
  }, [addToast]);

  const showInfo = useCallback((message: string) => {
    addToast({ message, type: 'info' });
  }, [addToast]);

  const showWarning = useCallback((message: string) => {
    addToast({ message, type: 'warning' });
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
  };
}