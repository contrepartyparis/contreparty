import "./globals.css";

export const metadata = {
  title: "Contreparty",
  description: "Collectif techno & house basé à Paris",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}