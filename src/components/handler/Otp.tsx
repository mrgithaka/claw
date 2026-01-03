'use client';

import { Section } from '@components/layout';
import { Form, Input, Message } from '@components/ui';
import { useOtp } from '@library/hooks';

export default function Otp() {
  const { formData, handleChange, handleSubmit, message, loading, fieldError } =
    useOtp();

  return (
    <Section
      id='otp'
      className='flex flex-col items-center h-full justify-center'
    >
      <Form
        method={handleSubmit}
        loading={loading}
      >
        {message && <Message>{message}</Message>}
        <Input
          type='text'
          placeholder='3DYRLM'
          id='otp'
          label='OTP'
          value={formData.otp}
          method={handleChange}
          fieldError={fieldError}
        />
        <Input
          type='submit'
          value='Submit'
        />
      </Form>
    </Section>
  );
}
