interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};

export default Layout;
