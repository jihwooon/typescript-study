'use client'

interface Props {
    children: React.ReactNode
}

export default function ClientComponent({ children }: Props) {
    console.log("클라이언트 컴포넌트 실행")
    return <div>
        {children}
    </div>
}
