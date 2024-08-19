import { ReactNode } from "react";
import "../../styles/global.css";
import ClientLayout from "./ClientLayout";
// import favicon from "../public/favicon/favicon.ico";

export const metadata = {
  title: "Smart Management",
  description: "Smart Management Solutions",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body style={{ overflowY: "auto" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
