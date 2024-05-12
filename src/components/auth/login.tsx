import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { z } from "zod";
import { Button } from '../ui/button';
import { Form, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
})

export default function Login() {

  const navigateToRegister = () => {
    location.href = '/register'
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const login = () => {
    console.log('login');
    console.log(form.getValues());
    location.href = '/'
  }
  return (
    <div
      className='w-screen h-screen relative flex items-center justify-center'
    >
      <img src="/background.png" alt="background" className="w-full h-full absolute" />
      <Form
        {...form}
      >
        <div
          className='h-[612px] pt-[20px] flex flex-col px-[69px] z-[999] w-1/3 bg-white/opacity-20 rounded-[20px] shadow backdrop-blur-sm'
          style={{
            boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)'
          }}
        >
          <div className="text-[26px] font-normal flex w-full justify-center mb-[36px]">Đăng nhập</div>
          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[24px]'>

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='flex flex-col gap-2'>
                    <label htmlFor='email' className='text-gray-800/opacity-90 text-[18px] font-medium tracking-wide'>Email</label>
                    <Input width="374px bg-neutral-50 rounded-lg border border-black/opacity-40 text-[16px]"
                     id='email' 
                     placeholder='Example@Something.com' {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='flex flex-col gap-2'>
                    <label htmlFor='password' className='text-gray-800/opacity-90 text-[18px] font-medium tracking-wide'>Mật khẩu</label>
                    <Input
                      type="password"
                      width="w-[374px] bg-neutral-50 rounded-lg border border-black/opacity-40"
                      id='password' 
                      placeholder='Enter your password'
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-row gap-1 items-center'>
                <input type='checkbox' className='bg-zinc-300 opacity-80 w-4 h-4' />
                <div className='text-black text-sm font-normal tracking-wide'>Duy trì đăng nhập</div>
              </div>

              <div className='text-red-600 text-sm font-normal hover:underline leading-[20px]'>
                Quên mật khẩu ?
              </div>
            </div>
          </div>
          <Button onClick={login} type="submit" variant="submit" className='mt-[20px] mb-[30px] w-full text-white text-2xl font-normal'>
            Đăng nhập
          </Button>
          <div className='w-full justify-center items-center text-center text-sm font-normal mb-[30px]'>
            hoặc tiếp tục với
          </div>
          <div className='flex w-full lg:gap-0 gap-[10px] justify-between items-center lg:flex-row mb-[36px] flex-wrap flex-col'>
            <img src="/google.png" alt="google" className='w-[136px] h-[40px]' />
            <img src="/facebook.png" alt="facebook" className='w-[136px] h-[40px]' />
          </div>
          <div className='font-normal w-full text-center'>
            Bạn không có tài khoản ? <span className='text-[16px] font-bold hover:text-accent-700' onClick={navigateToRegister}>Đăng ký</span>
          </div>
        </div>
      </Form>
    </div>
  )
}