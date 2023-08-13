import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: xx-large;
  font-weight: 700;
  margin: 12px 4px;
`;

interface Props extends ComponentPropsWithRef<'h1'> {
  children: React.ReactNode;
  ref: Ref<HTMLHeadingElement>;
}

const Heading = ({ children, ...rest }: Props) => {
  return <H1 {...rest}>{children}</H1>;
};

export default forwardRef(Heading);
