import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Rajesh Botla — Software Engineer',
  description:
    'Portfolio of Rajesh Botla, a software engineer focused on backend systems, distributed architecture, and applied AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[var(--bg)] font-sans text-[var(--text)] antialiased">
        {children}
      </body>
    </html>
  );
}
