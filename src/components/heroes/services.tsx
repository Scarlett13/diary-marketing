/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icons } from '../icons';
import UnstyledLink from '../links/UnstyledLink';
import Typography from '../typography/Typography';

export default function ServiceHero({ servicesitems }: any) {
  return (
    <div className='my-8 inline-flex flex-col items-center justify-center p-4'>
      <Typography variant='j1' color='white' className='mb-8 text-secondhero'>
        Our Services
      </Typography>

      <ul className='grid place-content-center gap-8 sm:grid-cols-2'>
        {servicesitems &&
          servicesitems.map((item: any) => {
            if (item.id < 6) {
              return (
                <li className='flex' key={item.id}>
                  <Typography
                    variant='b1'
                    color='white'
                    className='px-4 text-5xl font-extralight text-secondhero'
                  >
                    {item.numbering}
                  </Typography>
                  <div>
                    <div className='text-xl font-bold text-secondhero'>
                      {item.title}
                    </div>
                    <p className='max-w-xs py-2 text-sm text-secondhero'>
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            } else {
              return (
                <li className='flex' key={item.id}>
                  <Typography
                    variant='b1'
                    color='white'
                    className='px-4 text-5xl font-extralight'
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                  <div>
                    <UnstyledLink
                      href={item.href || '#'}
                      className='mt-4 flex flex-row gap-4'
                    >
                      <div className='text-xl font-bold text-secondhero'>
                        {item.title}
                      </div>
                      <Icons.arrowRight className='mr-4 h-8 w-10 text-secondhero' />
                    </UnstyledLink>
                  </div>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}
