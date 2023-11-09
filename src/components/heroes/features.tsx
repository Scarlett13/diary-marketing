import Image from 'next/image';

export default function FeatureHero() {
  return (
    <div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <div className='max-w-xl overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12'>
          <div className='flex items-center text-blue-500'>
            <p className='text-sm font-bold uppercase'>
              Jejak Progres yang Personal untuk Buah Hati Anda
            </p>
          </div>

          <h2 className='mt-4 text-3xl font-semibold text-slate-800'>
            Personalisasikan Dasbor Anda, Bentuk Masa Depan Mereka
          </h2>

          <p className='mt-4 text-lg text-slate-600'>
            Sambut petualangan belajar yang bebas untuk menyesuaikan dan
            memvisualisasikan jalur pembelajaran anak Anda, memastikan mereka
            tetap berada di jalur yang tepat dan mencapai <b>potensi penuh</b>{' '}
            mereka.
          </p>

          <div className='mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125'>
            <Image
              src='/svg/dashboard.svg'
              width={400}
              height={400}
              className='mt-10 h-auto'
              alt='dashboard'
            />
          </div>
        </div>

        <div className='max-w-xl overflow-hidden rounded-2xl bg-pink-50 p-4 lg:p-12'>
          <div className='flex items-center text-pink-500'>
            <p className='text-sm font-bold uppercase'>
              Data Anda, Keputusan Anda
            </p>
          </div>

          <h2 className='mt-4 text-3xl font-semibold text-slate-800'>
            Pribadi atau Publik, Informasi Anda, Aturan Anda
          </h2>

          <p className='mt-4 text-lg text-slate-600'>
            Di Project Diary, data Anda adalah milik Anda. Kami memberi Anda
            kendali penuh atas privasi Anda. Pilih untuk merahasiakan data Anda
            atau membagikannya dengan orang lain – pilihan ada di tangan Anda.
          </p>

          <div className='mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125'>
            <Image
              src='/svg/data-control.svg'
              width={400}
              height={400}
              className='mt-10 h-auto'
              alt='data-control'
            />
          </div>
        </div>

        <div className='overflow-hidden rounded-2xl bg-green-50 p-4 lg:col-span-2 lg:p-12'>
          <div className='flex items-center text-green-500'>
            <p className='text-sm font-bold uppercase'>
              Ciptakan Ingatan yang Abadi
            </p>
          </div>

          <h2 className='mt-4 text-3xl font-semibold text-slate-800'>
            Project Diary: Catatan Kejadian dalam Bentuk Data dan Konteks
          </h2>

          <p className='mt-4 max-w-4xl text-lg text-slate-600'>
            Ingat kembali memori Anda dengan jelas dan akurat. Project Diary
            membantu Anda menyimpan catatan kejadian dengan data dan konteks
            yang lengkap.
          </p>

          <div className='mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125'>
            <Image
              src='/svg/graph.svg'
              width={400}
              height={400}
              className='mt-10 h-auto'
              alt='graph'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
