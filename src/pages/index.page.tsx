import * as React from 'react';
import TextTransition, { presets } from 'react-text-transition';

import FeatureHero from '@/components/heroes/features';
import Layout from '@/components/layout/Layout';
import { MainNav } from '@/components/layout/main-nav';
import { SiteFooter } from '@/components/layout/site-footer';
import Seo from '@/components/Seo';
import SurveyForm from '@/components/survey-form';
import Typography from '@/components/typography/Typography';

import { dashboardConfig } from '@/config/dashboard';

export default function HomePage() {
  const texts = ['Kolaboratif', 'Terhubung', 'Penuh Makna'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Layout>
      <Seo date={Date()} />
      <div className='flex min-w-full flex-col items-center text-white'>
        <header className='z-40 flex min-w-full flex-col items-center bg-newprimarybg'>
          <div className='mx-8 flex h-20 items-center justify-between py-6 md:mx-10 lg:mx-12'>
            <MainNav items={dashboardConfig.mainNav} />
          </div>
        </header>
        <main className='container w-full'>
          <section className='w-full bg-newprimarybg md:h-[43vh]'>
            <div className='layout w-fullmx-4 relative flex min-h-full flex-col items-center justify-center py-12 text-center lg:w-1/2'>
              <Typography
                variant='b1'
                color='white'
                font='inter'
                className='mb-8 text-2xl lg:text-4xl'
              >
                Ciptakan Lingkungan Sekolah yang
              </Typography>
              <TextTransition
                springConfig={presets.wobbly}
                className='text-3xl font-bold text-newprimary lg:text-5xl'
              >
                {texts[index % texts.length]}
              </TextTransition>
            </div>
          </section>
          <section className='min-w-full bg-newsecondarybg md:h-[65vh]'>
            <div className='layout w-fullmx-4 relative flex min-h-full flex-col items-center justify-center py-12 text-center lg:w-1/2'>
              <Typography
                variant='j1'
                color='primary'
                font='inter'
                className='mb-8 text-2xl text-newsecondary lg:text-4xl'
              >
                Dukung Pertumbuhan Siswa Secara Tepat dengan Buku Penghubung
                dari Project Diary.
              </Typography>
              <Typography
                variant='b1'
                color='primary'
                font='inter'
                className='mt-8 text-2xl text-newsecondary'
              >
                Pantau Progres Kemajuan Siswa, Bekerjasama dalam Menyelesaikan
                Tugas, dan Saling Berbagi Informasi Antar Sesama.
              </Typography>
            </div>
          </section>
          <section className='flex flex-wrap items-center justify-center bg-newsecondarybg p-4 lg:p-12'>
            <FeatureHero />
          </section>
          <section className='w-full bg-secondhero md:h-[43vh]'>
            <div className='layout relative flex min-h-full flex-col items-center justify-center py-12 md:w-1/2'>
              <Typography variant='h1' color='white' font='averta'>
                Bantu kami dengan mengisi survey:
              </Typography>
              <div className='flex min-w-full flex-col px-2 text-typo'>
                <SurveyForm />
              </div>
              <Typography
                variant='s1'
                color='white'
                font='averta'
                className='flex w-full items-center justify-center text-center'
              >
                3 Kelas yang terpilih akan mendapatkan akses ke platform kami
                secara gratis untuk 1 semester
              </Typography>
            </div>
          </section>
        </main>

        <SiteFooter className='flex w-full items-center justify-center bg-secondhero p-4 text-white' />
      </div>
    </Layout>
  );
}
