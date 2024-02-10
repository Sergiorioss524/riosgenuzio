
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
      <div className='min-h screen'>
      <main>
    <div className='container mx-auto px-5'>
      <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
        <h1 className='text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>RiosGenuzio</h1>
        <h4 className='text-center md:text-left text-lg mt_5 md:pl-8'> Empresa consultora con mas de 20 años de experiencia en La Paz, Bolivia</h4>
      </section>
      <section>
        <div className='mb-8 md:mb-16'>
          <div className='sm:mx-0'>
            <div className='display:block;overflow:hidden;position:relative;box-sizing:border-box;margin:0'>
              <div className='display:block;box-sizing:border-box;padding-top:50%'></div>
            </div>
            <div className="relative block mx-auto" style={{ height:'300px', paddingTop: '50%'}}>
              <Image
                  src="/image.jpg"
                  alt="RiosGenuzio"
                  layout="fill" // This tells Next.js to fill the parent element
                  objectFit="cover" // This scales the image nicely to cover the area
                  className="absolute inset-0 w-full"
              />
            </div>

          </div>

        </div>

      </section>
    </div>
      </main>
      </div>
  );
}
