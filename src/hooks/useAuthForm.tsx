import { useEffect, useState } from 'react';

import { signIn, signUp } from '@/apis/auth/auth';
import { AuthPostRequest } from '@/apis/auth/types';
import { FormType } from '@/components/domain/auth/AuthForm';
import { isValidEmailInput, isValidPasswordInput } from '@/utils/auth/validate';
import { useNavigate } from 'react-router-dom';

type FormInput = AuthPostRequest;

const useAuthForm = (type: FormType) => {
  const [form, setForm] = useState<FormInput>({ email: '', password: '' });
  const [isValidForm, setIsValidForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isValidEmailInput(form.email) && isValidPasswordInput(form.password)) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [form]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof FormInput;
    const inputValue = e.target.value;

    setForm({ ...form, [inputName]: inputValue });
  };

  const onSubmit = () => {
    if (type === 'signin') {
      signIn(form)
        .then((res) => {
          localStorage.setItem('access_token', res.data.access_token);
          navigate('/todo');
        })
        .catch((err) => window.alert(err.response.data.message));
    }
    if (type === 'signup') {
      signUp(form)
        .then((res) => {
          window.alert('회원가입에 성공했습니다.');
          navigate('/signin');
        })
        .catch((err) => window.alert(err.response.data.message));
    }
  };

  return [form, onInputChange, isValidForm, onSubmit] as const;
};

export default useAuthForm;
