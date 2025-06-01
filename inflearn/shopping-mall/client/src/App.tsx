import { getQueryClient } from "./queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { router } from "./router"
import { RouterProvider } from "react-router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
