interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <>
            <h1>홈 레이아웃</h1>
            <h1>{children}</h1>
        </>
    );
};

export default Layout;
