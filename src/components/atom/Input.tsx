import { ComponentPropsWithRef, Ref, forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border-radius: 12px;
  border: 1px solid #bbb;
  padding: 10px 16px;
  font-size: medium;

  &::placeholder {
    color: #cccccc;
  }
`;

interface Props extends ComponentPropsWithRef<'input'> {}

const Input = ({ ...rest }: Props, ref: Ref<HTMLInputElement>) => {
  return <StyledInput ref={ref} {...rest} />;
};

export default forwardRef(Input);
