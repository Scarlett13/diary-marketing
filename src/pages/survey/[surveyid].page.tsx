/* eslint-disable @typescript-eslint/no-explicit-any */
import { Widget } from '@typeform/embed-react';
import { useRouter } from 'next/router';

import Layout from '@/components/layout/Layout';
import { MainNav } from '@/components/layout/main-nav';
import { SiteFooter } from '@/components/layout/site-footer';
import Seo from '@/components/Seo';

import { dashboardConfig } from '@/config/dashboard';
import { getLocalSurveyId } from '@/config/surveys-config';

import NotFoundPage from '../404.page';

export default function EmbedSurveyFormPage() {
  const router = useRouter();
  const { surveyid, rc } = router.query;

  if (!surveyid) {
    return <NotFoundPage></NotFoundPage>;
  }

  const formData = getLocalSurveyId(surveyid as string);

  if (!formData.success) {
    return <NotFoundPage></NotFoundPage>;
  }

  return (
    <Layout>
      <Seo
        templateTitle={`${formData.title ?? 'Survey Diary'}`}
        date={Date()}
      />
      <div className='flex min-w-full flex-col items-center text-black'>
        <header className='z-40 hidden min-w-full flex-col items-center bg-white md:flex'>
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
        <div className='w-full'>
          <Widget
            id={formData.formId ?? 'not-found'}
            medium='diary-surveys'
            className='h-screen md:-mb-14 md:-mt-20'
            hidden={{ referralcode: rc as string }}
            transitiveSearchParams={['referralcode']}
            iframeProps={{ title: formData.title ?? 'not-found' }}
          />
        </div>
        <SiteFooter className='z-40 mt-2 hidden border-t text-black md:flex' />
      </div>
    </Layout>
  );
}

//opsi lain, pakai getserversideprops
// type EmbedSurveyFormProps = {
//   formId: string | boolean;
//   referralcode?: string;
// };

// export async function getServerSideProps(context: any) {
//   const data = getLocalSurveyId(context.query.surveyid);
//   const referralcode = context.query.rc;

//   const repo = { data: data, referralcode: referralcode ?? 'not-found' };

//   if (!repo.data.success || !repo.data.formId) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { repo } };
// }

// export default function EmbedSurveyForm({
//   repo,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   console.log(repo);
//   return <></>;
// }
