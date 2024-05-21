import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MainLayout } from "./layouts/main-layout";

export const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  );
};
