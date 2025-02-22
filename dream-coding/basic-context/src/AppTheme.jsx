import React, { useContext } from 'react';
import './AppTheme.css';
import { LightModeContext, LightModeProvider} from './context/LightModeContext'

export default function AppTheme() {
  return (
    <LightModeProvider>
      <Header />
      <Main />
      <Footer />
    </LightModeProvider>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { lightMode, toggleMode } = useContext(LightModeContext);

  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {lightMode ? (
          <span style={{ backgroundColor: 'grey', color: 'dark' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
