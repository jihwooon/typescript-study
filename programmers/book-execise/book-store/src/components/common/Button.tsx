import {styled} from "styled-components";
import {ButtonScheme, ButtonSize} from "../../style/theme";
import {ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({children, size, scheme, disabled, isLoading, onClick}: Props) {
    return <ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading} onClick={onClick}>{children}</ButtonStyle>
}

const ButtonStyle = styled.button<Omit<Props, "children">>`
    font-size: ${({theme, size}) => theme.button[size].fontSize};
    padding: ${({theme, size}) => theme.button[size].padding};
    background-color: ${({ theme, scheme }) => theme.buttonScheme[scheme].backgroundColor};
    color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
    border-radius: ${({theme}) => theme.borderRadius.default};
    opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
    pointer-events: ${({disabled}) => (disabled ? 'none' : 'auto')};
    cursor: ${({disabled}) => (disabled ? 'none' : 'pointer')};
    border: 0;
`

export default Button;
