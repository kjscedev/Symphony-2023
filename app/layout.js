import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className='gradient-dark background-image'>{children}</body>
  </html>
);

export default RootLayout;