export type LoadingSpinnerProps = JSX.IntrinsicElements["span"];

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return <span className="loading loading-spinner loading-lg" />;
};
