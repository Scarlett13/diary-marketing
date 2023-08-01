/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import logger from '@/lib/logger';

import Button from './buttons/Button';
import Input from './forms/Input';

import { FormFields } from '@/types';

const SurveyFormFields: FormFields[] = [
  {
    labelText: 'Kode Referral',
    labelFor: 'referral_code',
    id: 'referral_code',
    name: 'referral_code',
    type: 'text',
    autoComplete: 'referral_code',
    isRequired: false,
    placeholder: 'Masukkan kode referral jika ada',
    titlekey: 'title_referral_code',
  },
];

type SurveyFormType = {
  referral_code: string;
};

export default function SurveyForm() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);

  const [referral, setReferral] = useState<string>('');
  const [value] = useDebounce(referral, 1000);

  const [data, setData] = useState<any>();

  useEffect(() => {
    const checkReferral = async (refquery: string) => {
      setLoading(true);

      if (!refquery || refquery === '') {
        setValid(true);
        setLoading(false);
        return;
      }
      // get the data from the api
      fetch(
        `https://1ofvmntj4g.execute-api.ap-southeast-3.amazonaws.com/dev/referralcode/survey1/${refquery}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });

      setLoading(false);

      setValid(data?.success ? data.success : false);

      logger(data?.success);
    };

    checkReferral(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (!valid) {
      setError('referral_code', {
        message:
          'Referral code tidak valid, silahkan masukkan referral code lain atau biarkan kosong!',
        type: 'custom',
      });

      return;
    } else {
      clearErrors('referral_code');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valid]);

  const methods = useForm<SurveyFormType>({
    mode: 'onTouched',
  });

  async function onSubmit(data: SurveyFormType) {
    // logger({ data });
    const rc = !data.referral_code ? 'norfc' : data.referral_code;

    router.push(`/survey/early-surveys?rc=${rc}`);
  }

  const { handleSubmit, setError, clearErrors } = methods;

  return (
    <div className='grid-col grid items-center py-4 md:flex md:flex-row md:justify-center md:gap-x-4'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-2/4'>
          {SurveyFormFields.map((field) => {
            return (
              <Input
                key={field.titlekey}
                id={field.id}
                type={field.type}
                label={null}
                placeholder={field.placeholder}
                helperText={field.helpertext ? field.helpertext : undefined}
                containerClassName='py-4'
                onChange={(e) => {
                  setReferral(e.target.value);
                }}
                disabled={loading}
              />
            );
          })}
        </form>
      </FormProvider>
      <Button
        type='submit'
        className='mb-4 border bg-primary-500 text-center shadow-sm md:mb-0 md:w-2/5'
        disabled={loading}
        onClick={handleSubmit(onSubmit)}
      >
        Isi survey
      </Button>
    </div>
  );
}
