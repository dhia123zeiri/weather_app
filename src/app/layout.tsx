import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Weather App - Current Weather Information",
  description:
    "Get current weather information for any city worldwide with our modern weather application.",
  keywords: "weather, forecast, temperature, humidity, wind speed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
