interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const HomeLayout = ({ children, modal }: Props) => {
  return (
    <>
      비포 로그인 레이아웃
      {children}
      {modal}
    </>
  );
};

export default HomeLayout;
