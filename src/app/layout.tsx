import "./globals.css";

export const metadata = {
  title: "OBSIDIAN",
  description: "A 3D Web Experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}
