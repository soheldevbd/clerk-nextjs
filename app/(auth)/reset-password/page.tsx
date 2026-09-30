'use client'

import React, { Suspense } from 'react'
import ResetPasswordFrom from './reset-password';

const ResetPassword = () => {
  return (
    <div>
      <h2>Reset Password</h2>
      <Suspense fallback="Loading">
      <ResetPasswordFrom/>
      </Suspense>
    </div>
  );
}

export default ResetPassword