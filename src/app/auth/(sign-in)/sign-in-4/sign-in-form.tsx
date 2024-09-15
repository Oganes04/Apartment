'use client';

import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';
import { Password, Checkbox, Button, Input, Text } from 'rizzui';
import { useMedia } from '@/hooks/use-media';
import { Form } from '@/components/ui/form';
import { routes } from '@/config/routes';
import { loginSchema, LoginSchema } from '@/utils/validators/login.schema';

const initialValues: LoginSchema = {
  email: 'admin@admin.com',
  password: 'admin',
  rememberMe: true,
};

export default function SignInForm() {
  const isMedium = useMedia('(max-width: 1200px)', false);
  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="email"
              size={isMedium ? 'lg' : 'xl'}
              label="Email"
              placeholder="Введите email"
              className="[&>label>span]:font-medium"
              {...register('email')}
              error={errors.email?.message}
            />
            <Password
              label="Пароль"
              placeholder="Введите пароль"
              size={isMedium ? 'lg' : 'xl'}
              className="[&>label>span]:font-medium"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between pb-1">
              <Checkbox
                {...register('rememberMe')}
                label="Запомнить меня"
                className="[&>label>span]:font-medium"
              />
              <Link
                href={routes.auth.forgotPassword4}
                className="h-auto p-0 text-sm font-semibold text-gray-700 underline transition-colors hover:text-primary hover:no-underline"
              >
                Забыли пароль?
              </Link>
            </div>

            <Button
              className="w-full"
              type="submit"
              size={isMedium ? 'lg' : 'xl'}
            >
              Войти
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
        Еще нет аккаунта?{' '}
        <Link
          href={routes.auth.signUp4}
          className="font-semibold text-gray-700 transition-colors hover:text-primary"
        >
          Зарегистрироваться
        </Link>
      </Text>
    </>
  );
}
