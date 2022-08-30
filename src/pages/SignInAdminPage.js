import React from 'react';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import FormGroup from '../components/common/FormGroup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import IconEyeToggle from '../components/icons/IconEyeToggle';
import Button from '../components/button/Button';
import useToggleValue from '../hooks/useToggleValue';
import LayoutAuthentication from '../layout/layoutAuthentication';
const schema = yup.object({
  email: yup.string().email('Invalid email').required('This field is required'),
  password: yup.string().required('This field is required'),
});
const SignInAdminPage = () => {
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleSignIn = async (values) => {};
  return (
    <LayoutAuthentication heading="Log In">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder="Enter Password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Button kind="primary" className="w-full" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};
export default SignInAdminPage;
