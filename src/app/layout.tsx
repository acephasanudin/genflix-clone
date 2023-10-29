import "~/styles/main.css";

import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
export const metadata = {
    title: "Genflix Clone",
    description: "Genflix Clone using Next.js and Tailwind CSS",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="style-0">
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
            </body>
        </html>
    );
}
