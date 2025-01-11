interface Props {
    children: React.ReactNode
};

export default function AfterLoginLayout({children}: Props) {
    return (
        <div>
            애프터로그인
            {children}
        </div>
    )
}
