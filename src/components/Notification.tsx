interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export const Notification = ({ message, type, onClose }: NotificationProps) => {
  return (
    <div
      className={`fixed top-6 right-6 p-5 rounded-xl shadow-2xl z-50 max-w-md transform transition-all duration-500 animate-in slide-in-from-right-5 ${
        type === "success"
          ? "bg-gradient-to-r from-emerald-500 to-green-600 border border-emerald-200 text-white"
          : "bg-gradient-to-r from-red-500 to-rose-600 border border-red-200 text-white"
      }`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {type === "success" ? (
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a2 2 0 012-2v6a2 2 0 01-2 2H9a2 2 0 00-2-2v-6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Success!</p>
                <p className="text-sm opacity-90">{message}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 0v4M0 0V8m0 6a2 2 0 100 4 2 2 0 000-4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15l-2-2m0 0l2 2"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Error!</p>
                <p className="text-sm opacity-90">{message}</p>
              </div>
            </div>
          )}
        </div>
        <div className="ml-auto pl-4">
          <button
            onClick={onClose}
            className="inline-flex text-white hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg transition-all duration-200"
          >
            <span className="sr-only">Dismiss notification</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
