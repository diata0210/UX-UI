import HelpIcon from '@/assets/icons/help';
import MailIcon from '@/assets/icons/mail';
import * as React from 'react';

interface IHeaderLandingProps {
}

export const HeaderLanding: React.FC<IHeaderLandingProps> = () => {
    return (
      <div className="h-[80px] w-full py-[19px] flex justify-between items-center relative">
        <img src='/logo.png' className='h-[60px] opacity-80 '/>

        <div className='flex items-center gap-[40px]'>
          <div className='flex text-[16px] items-center gap-[4px]'>
            <MailIcon width='14' height='16'/>
            <div>Liên hệ với chúng tôi:</div> 
            <div className='text-red-500 cursor-pointer hover:opacity-90'>
              <a href='mailto:gr8@gmail.com'>gr8@gmail.com</a>
            </div>
          </div>
          <div className='flex text-[16px] items-center gap-[4px]'>
            <HelpIcon width='18' height='18'/>
            <div>Tôi cần trợ giúp</div>
          </div>
        </div>
      </div>
    );
};
