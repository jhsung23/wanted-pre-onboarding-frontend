import { ComponentPropsWithRef, Ref, forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border-radius: 12px;
  border: 0 solid #bbb;
  padding: 10px 16px;
  background-color: rgb(44, 91, 242);
  color: white;
  font-weight: 700;
  font-size: medium;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        background-color: #f2f4f7;
        color: #cccccc;
        cursor: not-allowed;
      `;
    }
    return css`
      &:hover {
        background-color: rgb(67, 139, 255);
        cursor: pointer;
      }
    `;
  }}
`;

interface Props extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: Props, ref: Ref<HTMLButtonElement>) => {
  return (
    <StyledButton ref={ref} {...rest}>
      {children}
    </StyledButton>
  );
};

export default forwardRef(Button);
