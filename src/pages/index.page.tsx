import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { MainNav } from '@/components/layout/main-nav';
import { SiteFooter } from '@/components/layout/site-footer';
import Seo from '@/components/Seo';
import SurveyForm from '@/components/survey-form';
import Typography from '@/components/typography/Typography';

import { dashboardConfig } from '@/config/dashboard';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Landing Page' date={Date()} />
      <div className='flex min-w-full flex-col items-center text-white'>
        <header className='z-40 flex min-w-full flex-col items-center bg-firsthero'>
          <div className='mx-8 flex h-20 items-center justify-between py-6 md:mx-10 lg:mx-12'>
            <MainNav items={dashboardConfig.mainNav} />
            {/* <nav>
              <a
                target='_blank'
                href='https://dev.projectdiary.id/'
                rel='noopener noreferrer'
                className={clsxm('')}
              >
                Diary App
              </a>
            </nav> */}
          </div>
        </header>
        <section className='min-w-full bg-firsthero md:h-[43vh]'>
          <div className='layout relative flex min-h-full w-1/2 flex-col items-start justify-center py-12 text-left'>
            <Typography variant='j1' color='white' font='inter'>
              Project Diary: lebih dari sekedar catatan sekolah siswa
            </Typography>
            <Typography
              variant='h2'
              color='white'
              font='averta'
              className='mt-4'
            >
              Project Diary adalah platform komunikasi untuk guru, siswa, dan
              orang tua: segalanya tersedia dalam satu tempat, dapat dicari, dan
              diakses kapanpun anda membutuhkannya
            </Typography>
          </div>
        </section>
        <section className='min-w-full bg-secondhero md:h-[43vh]'>
          <div className='layout relative flex min-h-full flex-col items-center justify-center py-12 md:w-1/2'>
            <Typography variant='h1' color='white' font='averta'>
              Bantu kami dengan mengisi survey:
            </Typography>
            <div className='flex min-w-full flex-col px-2 text-typo'>
              <SurveyForm />
            </div>
            <Typography variant='s1' color='white' font='averta'>
              3 Kelas yang terpilih akan mendapatkan akses ke platform kami
              secara gratis untuk 1 semester
            </Typography>
          </div>
        </section>
        <SiteFooter className='mt-2 border-t text-black' />
      </div>
    </Layout>
  );
}
