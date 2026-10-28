import { Button } from '@/components/ui/button'
import { LockKeyhole, Mail, ShieldCheck } from 'lucide-react'

function AppleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px] fill-current">
      <path d="M17.05 12.54c-.02-2.24 1.83-3.32 1.92-3.37a4.13 4.13 0 0 0-3.26-1.76c-1.38-.14-2.72.82-3.43.82-.72 0-1.82-.8-2.99-.78a4.4 4.4 0 0 0-3.7 2.25c-1.6 2.78-.4 6.86 1.15 9.1.76 1.1 1.65 2.32 2.82 2.27 1.14-.05 1.57-.73 2.95-.73 1.37 0 1.76.73 2.96.7 1.23-.02 2-1.1 2.75-2.2a9.05 9.05 0 0 0 1.25-2.55 3.95 3.95 0 0 1-2.42-3.75ZM14.8 5.94a3.96 3.96 0 0 0 .9-2.85 4.02 4.02 0 0 0-2.6 1.34 3.75 3.75 0 0 0-.93 2.73 3.3 3.3 0 0 0 2.63-1.22Z" />
    </svg>
  )
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px]">
      <path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.23a4.47 4.47 0 0 1-1.94 2.93v2.44h3.14c1.84-1.7 2.92-4.2 2.92-7.24Z" />
      <path fill="#34A853" d="M12 21.7c2.63 0 4.84-.87 6.45-2.35l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.52A9.74 9.74 0 0 0 12 21.7Z" />
      <path fill="#FBBC05" d="M6.53 13.8A5.85 5.85 0 0 1 6.22 12c0-.63.11-1.24.31-1.8V7.68H3.29A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.32l3.24-2.52Z" />
      <path fill="#EA4335" d="M12 6.17c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.27 14.63 2.3 12 2.3a9.74 9.74 0 0 0-8.71 5.38l3.24 2.52C7.3 7.89 9.46 6.17 12 6.17Z" />
    </svg>
  )
}

function ShieldMark() {
  return (
    <div className="relative flex size-[82px] items-center justify-center rounded-[26px] bg-[#071c17] shadow-[0_0_0_1px_rgba(0,255,136,.35),0_0_35px_rgba(0,255,136,.22),inset_0_0_24px_rgba(0,255,136,.10)]">
      <div className="absolute inset-[-9px] rounded-[31px] border border-[#00ff88]/10" />
      <ShieldCheck className="size-[48px] text-[#00ff88]" strokeWidth={1.25} />
      <Mail className="absolute size-[17px] text-[#0A0A0F]" strokeWidth={2.5} />
    </div>
  )
}

export default function Page() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0A0A0F] px-5 py-10 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-180px] size-[420px] -translate-x-1/2 rounded-full bg-[#00ff88]/[0.055] blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-200px] right-[-170px] size-[420px] rounded-full bg-[#134d5a]/[0.12] blur-[100px]" />

      <section className="animate-rise relative z-10 flex w-full max-w-[390px] flex-col items-center">
        <div className="animate-rise [animation-delay:80ms] [animation-fill-mode:backwards]"><ShieldMark /></div>

        <div className="mt-9 text-center animate-rise [animation-delay:160ms] [animation-fill-mode:backwards]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#00ff88]/80">Privacy, by default</p>
          <h1 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-white">
            Track your subscriptions.<br />
            <span className="text-white/90">Keep your bank data private.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[340px] text-[15px] leading-6 text-[#8c929b]">
            No bank linking required. We use a private email alias to automatically track your trials and bills.
          </p>
        </div>

        <div className="mt-8 w-full rounded-[26px] border border-white/[0.09] bg-white/[0.045] p-3 shadow-[0_18px_70px_rgba(0,0,0,.28)] backdrop-blur-xl animate-rise [animation-delay:240ms] [animation-fill-mode:backwards]">
          <div className="flex flex-col gap-3">
            <Button className="h-14 w-full rounded-[17px] bg-[#050507] text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#15151a] active:bg-[#222229]" aria-label="Continue with Apple">
              <AppleMark />
              Continue with Apple
            </Button>
            <Button className="h-14 w-full rounded-[17px] bg-white text-[15px] font-medium text-[#15161a] shadow-[0_4px_16px_rgba(0,0,0,.12)] hover:bg-[#ededed] active:bg-[#d9d9d9]" aria-label="Continue with Google">
              <GoogleMark />
              Continue with Google
            </Button>
            <Button variant="outline" className="h-14 w-full rounded-[17px] border-[#00ff88]/55 bg-transparent text-[15px] font-medium text-[#00ff88] hover:border-[#00ff88] hover:bg-[#00ff88]/[0.08] active:bg-[#00ff88]/[0.14]" aria-label="Sign up with Email">
              <Mail data-icon="inline-start" />
              Sign up with Email
            </Button>
          </div>
        </div>

        <p className="mt-7 flex max-w-[310px] items-start justify-center gap-2 text-center text-[11px] leading-[1.55] text-[#666c76] animate-rise [animation-delay:320ms] [animation-fill-mode:backwards]">
          <LockKeyhole className="mt-0.5 size-3.5 shrink-0 text-[#00ff88]/75" />
          <span>We will <strong className="font-medium text-[#8d929a]">NEVER</strong> ask for your bank password or financial credentials.</span>
        </p>
      </section>
    </main>
  )
}
