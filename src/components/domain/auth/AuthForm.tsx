import { useState } from 'react';
import styled from 'styled-components';

import { Button, Input } from '@/components/atom';

const Form = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 512px;
`;

type Props = {
  type: 'signin' | 'signup';
};

const FORM_DETAILS = {
  signin: {
    BUTTON_LABEL: '로그인',
    BUTTON_ID: 'signin-button',
  },
  signup: {
    BUTTON_LABEL: '회원가입',
    BUTTON_ID: 'signup-button',
  },
};

const AuthForm = ({ type }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form>
      <Input
        data-testid="email-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일을 입력하세요."
      />
      <Input
        data-testid="password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요."
      />
      <Button data-testid={FORM_DETAILS[type].BUTTON_ID} type="submit" disabled>
        {FORM_DETAILS[type].BUTTON_LABEL}
      </Button>
    </Form>
  );
};

export default AuthForm;
