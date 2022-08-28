import React from 'react';

const SignInAdmin = () => {
  return import React from 'react';
  import { Link } from 'react-router-dom';
  import { Label } from '../components/label';
  import Input from '../components/input/Input';
  import FormGroup from '../components/common/FormGroup';
  import { useForm } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  import * as yup from 'yup';
  import IconEyeToggle from '../components/icons/IconEyeToggle';
  import useToggleValue from '../hooks/useToggleValue';
  import Button from '../components/button/Button';
  import LayoutAuthentication from '../layout/LayoutAuthentication';
  const schema = yup.object({
    email: yup.string().email('').required('This field is required'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'Password must be 8 character'),
  });
  const SignInPage = () => {
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
      useToggleValue();
    const {
      handleSubmit,
      control,
      formState: { isValid, isSubmitting, errors },
    } = useForm({
      mode: 'onSubmit',
      resolver: yupResolver(schema),
    });
    const handleSignIn = (values) => {};
    return (
      <LayoutAuthentication heading="Welcome Back!">
        <p className="text-center lg:text-sm text-xs font-normal text-text3 lg:mb-8 mb-6">
          Dont have an account?
          <Link to="/sign-up" className="text-primary font-medium underline">
            {' '}
            Sign up
          </Link>
        </p>
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
          <FormGroup>
            <div className="text-right">
            <span className="text-primary inline-block text-sm font-medium">
              Forgot password
            </span>
            </div>
          </FormGroup>
          <Button kind="primary" className="w-full" type="submit">
            Sign in
          </Button>
        </form>
      </LayoutAuthentication>
    );
  }
export default SignInAdmin;
