import React from 'react';
import Login from 'views/auth/Login.js';

export default function Auth() {
  return (
    <>
      <main>
        <section className='relative w-full h-full  min-h-screen flex items-center justify-center'>
          <div
            className='absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full'
            style={{
              backgroundImage:
                'url(' + require('assets/img/register_bg_2.png').default + ')',
            }}></div>
          <Login />
        </section>
      </main>
    </>
  );
}
