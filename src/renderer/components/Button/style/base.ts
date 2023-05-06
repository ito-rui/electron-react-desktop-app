import styled from 'styled-components';
import type { BaseButtonType } from '../../../types/components/Button';

const BaseButtonStyle = styled.button<BaseButtonType>`
    color: ${({ theme, color }) => color ?? theme.colors.systemColors.black[400]};
    width: ${({ theme, width }) => width ?? theme.sizes.box.full};
    background: ${({ theme, background }) => background ?? theme.colors.systemColors.white[400]};
    background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.colors.systemColors.white[400]};
    padding: ${({ theme, padding }) => padding ?? theme.sizes.space[2]};
    border: ${({ theme, border }) => border ?? `${theme.sizes.radii.sm} solid ${theme.colors.systemColors.black[200]}`};
    border-radius: ${({ theme, borderRadius }) => borderRadius ?? theme.sizes.radii.md};
    font-size: ${({ theme, fontSize }) => fontSize ?? theme.fonts.sizes.base};
    font-weight: ${({ theme, fontWeight }) => fontWeight ?? theme.fonts.weights.normal};
    line-height: ${({ theme, lineHeight }) => lineHeight ?? theme.sizes.lineHeights.shorter};
    text-align: ${({ textAlign }) => textAlign ?? 'center'};
    text-decoration: ${({ textDecoration }) => textDecoration ?? 'none'};
    white-space: ${({ whiteSpace }) => whiteSpace ?? 'nowrap'};
    cursor: ${({ cursor }) => cursor ?? 'pointer'};
    transition: ${({ transition }) => transition ?? 'all 0.3s ease'};
    &:hover {
        background-color: ${({ theme, hoverBgColor }) => hoverBgColor ?? theme.colors.systemColors.black[50]};
    }
    &:disabled {
        background-color: ${({ theme, disabledBackgroundColor }) =>
            disabledBackgroundColor ?? theme.colors.systemColors.white[50]};
        color: ${({ theme, disabledColor }) => disabledColor ?? theme.colors.systemColors.black[50]};
        cursor: ${({ disabledCursor }) => disabledCursor ?? 'not-allowed'};
    }
`;

export default BaseButtonStyle;
