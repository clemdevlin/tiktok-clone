"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";

// ------------------
// Type Definitions
// ------------------
type ToastType = "success" | "error" | "warning" | "info" | "custom";

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

interface ToastContextType {
  success: (msg: string) => void;
  error: (msg: string) => void;
  warning: (msg: string) => void;
  info: (msg: string) => void;
  custom: (msg: string) => void;
}

// ------------------
// Context
// ------------------
const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((type: ToastType, message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const toast: ToastContextType = {
    success: (msg) => addToast("success", msg),
    error: (msg) => addToast("error", msg),
    warning: (msg) => addToast("warning", msg),
    info: (msg) => addToast("info", msg),
    custom: (msg) => addToast("custom", msg),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}

// ------------------
// Toast UI Components
// ------------------
function ToastContainer({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} type={toast.type} message={toast.message} />
      ))}
    </div>
  );
}

function ToastItem({ type, message }: { type: ToastType; message: string }) {
  const colors: Record<ToastType, string> = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
    custom: "bg-purple-100 border-purple-500 text-purple-700",
  };

  const icons: Record<ToastType, string> = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
    custom: "✨",
  };

  return (
    <div
      className={`flex items-center gap-3 border-l-4 p-4 rounded-md shadow-sm transition-all duration-300 w-80 ${
        colors[type]
      }`}
    >
      <span>{icons[type]}</span>
      <p className="flex-1 text-sm font-medium">{message}</p>
    </div>
  );
}

