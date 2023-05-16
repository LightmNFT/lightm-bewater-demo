import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { graphClient } from "./lib/graphRequests.ts";

ReactDOM.createRoot(document.body as HTMLElement).render(
  <ApolloProvider client={graphClient}>
    <App />
  </ApolloProvider>
);
