import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export default function SettingLayout({ children }: Props) {
    return <div>
        <div>세팅 헤더</div>
        {children}
    </div>
}
