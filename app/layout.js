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
    'Portfolio of Rajesh Botla, a Software Engineer specializing in Full-Stack Web Applications, Distributed Systems, Microservices, and Multimodal GenAI/RAG platforms.',
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
