interface LoadingSpinnerProps {
  title: string;
}

export function LoadingSpinner({ title }: LoadingSpinnerProps) {
  return (
    <div className="h-full flex justify-center items-center p-4 flex-col gap-20">
      <div className="font-large text-3xl text-gray-500">
        {title}
      </div>
      <div className=" w-40 h-40 border-10 border-gray-200 border-t-10 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
