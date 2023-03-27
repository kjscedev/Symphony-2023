import '../../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
    </head>
    <body className='gradient-dark background-image'>{children}</body>
  </html>
);

export default RootLayout;