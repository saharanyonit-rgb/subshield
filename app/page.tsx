'use client'

import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Copy,
  ExternalLink,
  Inbox,
  LayoutDashboard,
  Link2,
  CalendarDays,
  Check,
  CircleDollarSign,
  LockKeyhole,
  Mail,
  Plus,
  ReceiptText,
  Search,
  X,
  ScanFace,
  Send,
  Settings,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

function BrandMark() {
  return (
    <div className="relative flex size-[78px] items-center justify-center rounded-[26px] border border-[#00ff88]/30 bg-[#09221a] shadow-[0_0_44px_rgba(0,255,136,.22),inset_0_0_26px_rgba(0,255,136,.1)] animate-pulse-soft">
      <div className="absolute inset-[-9px] rounded-[32px] border border-[#00ff88]/10" />
      <ShieldCheck className="size-12 text-[#00ff88]" strokeWidth={1.8} />
      <Mail className="absolute size-4 text-[#071c14]" strokeWidth={3} />
    </div>
  )
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[19px]" role="img">
      <path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.26Z" />
      <path fill="#34A853" d="M12 21.99c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.99Z" />
      <path fill="#FBBC05" d="M6.54 14.08A5.85 5.85 0 0 1 6.23 12c0-.72.12-1.42.31-2.08V7.39H3.29A9.99 9.99 0 0 0 2.25 12c0 1.66.4 3.23 1.04 4.61l3.25-2.53Z" />
      <path fill="#EA4335" d="M12 5.89c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 2.96 14.63 2 12 2a9.74 9.74 0 0 0-8.71 5.39l3.25 2.53C7.31 7.61 9.46 5.89 12 5.89Z" />
    </svg>
  )
}

function AppleMark({ className = 'size-5' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor" role="img">
      <path d="M17.05 12.54c-.02-2.28 1.86-3.38 1.95-3.43a4.2 4.2 0 0 0-3.3-1.78c-1.39-.15-2.72.83-3.43.83-.72 0-1.82-.81-2.99-.79a4.4 4.4 0 0 0-3.7 2.25c-1.6 2.77-.41 6.85 1.13 9.1.77 1.1 1.66 2.31 2.84 2.27 1.14-.05 1.57-.73 2.95-.73 1.38 0 1.77.73 2.96.7 1.23-.02 2.01-1.1 2.76-2.2a9.04 9.04 0 0 0 1.26-2.55 3.95 3.95 0 0 1-2.43-3.67ZM14.8 5.86a3.98 3.98 0 0 0 .91-2.86 4.06 4.06 0 0 0-2.62 1.36 3.8 3.8 0 0 0-.94 2.75 3.36 3.36 0 0 0 2.65-1.25Z" />
    </svg>
  )
}

function GoogleAccountSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal="true" aria-labelledby="google-account-title">
      <button aria-label="Close account picker" onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-[7px]" />
      <section className="relative w-full max-w-[430px] rounded-t-[28px] bg-white px-6 pb-8 pt-7 text-[#202124] shadow-[0_-12px_60px_rgba(0,0,0,.45)] animate-sheet-up">
        <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-[#dadce0]" />
        <div className="flex flex-col items-center text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-white text-[30px] font-semibold tracking-[-.15em] text-[#4285f4] shadow-[0_1px_4px_rgba(60,64,67,.25)]"><GoogleMark /></div>
          <h2 id="google-account-title" className="mt-4 text-[22px] font-normal tracking-[-.02em]">Choose an account</h2>
          <p className="mt-1 text-sm text-[#5f6368]">to continue to SubShield</p>
        </div>
        <div className="mt-7 flex flex-col gap-1">
          <button onClick={onClose} className="flex w-full items-center gap-4 rounded-xl px-2 py-3 text-left transition-colors hover:bg-[#f1f3f4] active:bg-[#e8eaed]">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#00a878] text-lg font-medium text-white">A</span>
            <span className="min-w-0"><span className="block truncate text-[15px] font-semibold text-[#202124]">Alex Doe</span><span className="mt-0.5 block truncate text-sm text-[#5f6368]">alex.doe@gmail.com</span></span>
          </button>
          <button onClick={onClose} className="flex w-full items-center gap-4 rounded-xl px-2 py-3 text-left transition-colors hover:bg-[#f1f3f4] active:bg-[#e8eaed]"><span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#dadce0] text-[#5f6368]"><Plus className="size-5" /></span><span className="text-[15px] text-[#3c4043]">Use another account</span></button>
        </div>
        <p className="mt-7 border-t border-[#e8eaed] pt-5 text-center text-[11px] leading-[1.45] text-[#80868b]">To continue, Google will share your name and email address with SubShield.</p>
      </section>
    </div>
  )
}

function AppleSignInModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6" role="dialog" aria-modal="true" aria-labelledby="apple-signin-title">
      <button aria-label="Close Apple sign-in" onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-[10px]" />
      <section className="relative w-full max-w-[340px] rounded-[24px] border border-white/[0.08] bg-[#1C1C1E] px-6 pb-5 pt-7 text-white shadow-[0_24px_90px_rgba(0,0,0,.6)] animate-rise">
        <div className="flex flex-col items-center text-center">
          <AppleMark className="size-10 drop-shadow-[0_0_14px_rgba(255,255,255,.28)]" />
          <h2 id="apple-signin-title" className="mt-4 text-[20px] font-semibold tracking-[-.025em]">Sign in with Apple</h2>
          <p className="mt-2 max-w-[260px] text-[13px] leading-[1.4] text-[#98989F]">SubShield wants to use your Apple ID to sign in.</p>
        </div>
        <div className="mt-6 flex items-center gap-3 rounded-[14px] border border-white/[0.07] bg-white/[0.045] px-3.5 py-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#00A878] text-lg font-medium text-white">A</span>
          <div className="min-w-0 text-left"><p className="truncate text-[15px] font-medium text-white">Alex Doe</p><p className="mt-0.5 text-[12px] text-[#98989F]">Hide My Email</p></div>
        </div>
        <div className="mt-5 flex flex-col gap-2.5">
          <button onClick={onClose} className="h-12 rounded-[12px] bg-white text-[15px] font-medium text-black transition-transform hover:bg-[#e7e7e9] active:scale-[.985]">Continue as Alex</button>
          <button onClick={onClose} className="h-12 rounded-[12px] bg-[#2C2C2E] text-[15px] font-medium text-white transition-colors hover:bg-[#3A3A3C] active:scale-[.985]">Cancel</button>
        </div>
        <div className="mt-6 flex justify-center text-[#98989F]"><ScanFace aria-label="Face ID" className="size-7" strokeWidth={1.35} /></div>
      </section>
    </div>
  )
}

function LoginScreen({ onEmail }: { onEmail: () => void }) {
  const [googleOpen, setGoogleOpen] = useState(false)
  const [appleOpen, setAppleOpen] = useState(false)
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0A0A0F] px-5 py-10 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-220px] size-[460px] -translate-x-1/2 rounded-full bg-[#00ff88]/[0.07] blur-[110px]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center">
        <div className="animate-rise"><BrandMark /></div>
        <div className="mt-8 text-center animate-rise [animation-delay:100ms] [animation-fill-mode:backwards]">
          <h1 className="text-[32px] font-semibold leading-[1.06] tracking-[-0.05em]">Track your subscriptions.<br />Keep your bank data private.</h1>
          <p className="mx-auto mt-5 max-w-[340px] text-[14px] leading-5 text-[#9ca3af]">No bank linking required. We use a private email alias to automatically track your trials and bills.</p>
        </div>
        <div className="mt-9 flex w-full flex-col gap-3 animate-rise [animation-delay:180ms] [animation-fill-mode:backwards]">
          <Button onClick={() => setAppleOpen(true)} className="h-14 w-full rounded-[12px] bg-[#050507] text-[14px] font-medium text-white ring-1 ring-white/10 hover:bg-[#111116] active:scale-[.985]"><AppleMark className="size-5" />Continue with Apple</Button>
          <Button onClick={() => setGoogleOpen(true)} className="h-14 w-full rounded-[12px] bg-white text-[14px] font-medium text-[#101116] hover:bg-[#e8ebe9] active:scale-[.985]"><GoogleMark />Continue with Google</Button>
          <Button onClick={onEmail} variant="outline" className="h-14 w-full rounded-[12px] border-[#00ff88]/70 bg-[#00ff88]/[0.035] text-[14px] font-medium text-[#00ff88] hover:bg-[#00ff88]/[0.1] hover:text-[#5affb4] active:scale-[.985]"><Mail data-icon="inline-start" />Sign up with Email<ArrowRight data-icon="inline-end" /></Button>
        </div>
        <p className="mt-8 flex items-center gap-2 text-center text-[11px] leading-4 text-[#737984] animate-rise [animation-delay:280ms] [animation-fill-mode:backwards]"><LockKeyhole className="size-3.5 shrink-0 text-[#00ff88]/80" />We will NEVER ask for your bank password.</p>
      </div>
  {googleOpen && <GoogleAccountSheet onClose={() => setGoogleOpen(false)} />}
      {appleOpen && <AppleSignInModal onClose={() => setAppleOpen(false)} />}
  </main>
  )
}

function EmailScreen({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0F] px-5 py-8 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-250px] size-[480px] -translate-x-1/2 rounded-full bg-[#00ff88]/[0.06] blur-[120px]" />
      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col animate-rise">
        <button onClick={onBack} className="flex w-fit items-center gap-2 text-sm text-[#9ca3af] transition-colors hover:text-white"><ArrowLeft className="size-4" />Back</button>
        <div className="mt-16"><p className="text-sm font-medium text-[#00ff88]">SubShield</p><h1 className="mt-3 text-[32px] font-semibold tracking-[-0.05em]">Welcome to SubShield</h1><p className="mt-3 text-sm text-[#9ca3af]">Enter your email to create an account.</p></div>
        <form onSubmit={(event) => { event.preventDefault(); onContinue() }} className="mt-10 flex flex-col gap-3">
          <label className="flex h-14 items-center gap-3 rounded-[12px] border border-white/10 bg-[#1A1A24] px-4 focus-within:border-[#00ff88]/60"><Mail className="size-5 text-[#737984]" /><span className="sr-only">Email Address</span><input required type="email" placeholder="Email Address" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#737984]" /></label>
          <label className="flex h-14 items-center gap-3 rounded-[12px] border border-white/10 bg-[#1A1A24] px-4 focus-within:border-[#00ff88]/60"><LockKeyhole className="size-5 text-[#737984]" /><span className="sr-only">Password</span><input required type="password" placeholder="Password" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#737984]" /></label>
          <Button type="submit" onClick={onContinue} className="mt-3 h-14 rounded-[12px] bg-[#00ff88] text-sm font-semibold text-[#06120e] hover:bg-[#34ffa3] active:scale-[.985]">Continue<ArrowRight data-icon="inline-end" /></Button>
        </form>
        <div className="my-8 flex items-center gap-4 text-[11px] text-[#737984]"><div className="h-px flex-1 bg-white/10" />OR<div className="h-px flex-1 bg-white/10" /></div>
        <Button variant="outline" className="h-14 rounded-[12px] border-white/15 bg-white/[0.03] text-sm text-white hover:bg-white/[0.08]"><GoogleMark />Continue with Google</Button>
        <p className="mt-8 text-center text-[11px] text-[#737984]">By continuing, you agree to our <span className="text-[#9ca3af] underline underline-offset-2">Terms</span>.</p>
      </section>
    </main>
  )
}

function EmptyVault() {
  return <div className="relative flex size-[142px] items-center justify-center rounded-[36px] border border-[#00ff88]/20 bg-[#0c211a]/80 shadow-[0_0_44px_rgba(0,255,136,.12),inset_0_0_30px_rgba(0,255,136,.06)]"><div className="absolute inset-3 rounded-[28px] border border-dashed border-[#00ff88]/20" /><Inbox className="size-16 text-[#00ff88]/80" strokeWidth={1.2} /></div>
}

function AliasScreen({ onOpenEmail, onLater }: { onOpenEmail: () => void; onLater: () => void }) {
  const [copied, setCopied] = useState(false)
  const copyAlias = async () => {
    await navigator.clipboard?.writeText('alex.trials@subshield.app')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0F] px-5 pb-28 pt-12 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-180px] size-[430px] -translate-x-1/2 rounded-full bg-[#00ff88]/[0.07] blur-[115px]" />
      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center text-center animate-rise">
        <div className="flex size-14 items-center justify-center rounded-full border border-[#00ff88]/30 bg-[#00ff88]/[0.1] text-[#00ff88] shadow-[0_0_30px_rgba(0,255,136,.18)]"><Check className="size-7" strokeWidth={2.5} /></div>
        <h1 className="mt-5 text-[29px] font-semibold tracking-[-0.05em]">Your Private Alias is Ready!</h1>
        <p className="mt-3 max-w-[340px] text-sm leading-5 text-[#9ca3af]">Forward any receipt or free trial confirmation to this address, and we&apos;ll track it automatically.</p>
        <div className="mt-8 w-full rounded-[24px] border border-dashed border-[#00ff88]/60 bg-white/[0.045] p-5 shadow-[0_0_45px_rgba(0,255,136,.08)] backdrop-blur-xl">
          <p className="break-all font-mono text-[15px] font-medium tracking-[-.02em] text-[#00ff88]">alex.trials@subshield.app</p>
          <Button onClick={copyAlias} className="mt-5 h-12 w-full rounded-[12px] bg-[#00ff88] text-sm font-semibold text-[#06120e] hover:bg-[#34ffa3] active:scale-[.985]"><Copy data-icon="inline-start" />{copied ? 'Copied!' : 'Copy Email Address'}</Button>
        </div>
        <div className="mt-8 flex w-full items-center justify-center gap-3 text-[#00ff88]">
          <div className="flex flex-col items-center gap-2"><div className="flex size-11 items-center justify-center rounded-full border border-[#00ff88]/25 bg-[#00ff88]/[0.08]"><Send className="size-5" /></div><span className="text-[11px] text-[#9ca3af]">Forward receipt</span></div>
          <ArrowRight className="size-5 text-[#00ff88]/60" />
          <div className="flex flex-col items-center gap-2"><div className="flex size-11 items-center justify-center rounded-full border border-[#00ff88]/25 bg-[#00ff88]/[0.08]"><ReceiptText className="size-5" /></div><span className="text-[11px] text-[#9ca3af]">We track it</span></div>
        </div>
        <Button onClick={onOpenEmail} className="mt-9 h-14 w-full rounded-[12px] bg-[#00ff88] text-sm font-semibold text-[#06120e] hover:bg-[#34ffa3] active:scale-[.985]">Open My Email App<ExternalLink data-icon="inline-end" /></Button>
        <button onClick={onLater} className="mt-5 text-sm text-[#737984] underline decoration-[#737984]/50 underline-offset-4 hover:text-white">I&apos;ll do it later</button>
      </section>
      <nav aria-label="Main navigation" className="fixed inset-x-0 bottom-0 z-20 border-t border-white/[0.08] bg-[#0A0A0F]/90 px-8 py-4 backdrop-blur-xl"><div className="mx-auto flex max-w-[390px] items-center justify-between"><button className="flex flex-col items-center gap-1 text-[10px] text-[#00ff88]"><LayoutDashboard className="size-5" /><span>Dashboard</span></button><button className="flex flex-col items-center gap-1 text-[10px] text-[#737984]"><ReceiptText className="size-5" /><span>Trials</span></button><button className="flex flex-col items-center gap-1 text-[10px] text-[#737984]"><Settings className="size-5" /><span>Settings</span></button></div></nav>
    </main>
  )
}

function ProcessingScreen({ onSkip }: { onSkip: () => void }) {
  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0A0A0F] px-5 pb-8 pt-12 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88]/[0.035] blur-[100px]" />
      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-1 flex-col items-center text-center animate-rise">
        <div className="relative mt-16 flex size-[178px] items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#00ff88]/20 animate-radar" />
          <div className="absolute inset-5 rounded-full border border-[#00ff88]/25 animate-radar [animation-delay:500ms]" />
          <div className="absolute inset-10 rounded-full border border-[#00ff88]/35 bg-[#00ff88]/[0.06] shadow-[0_0_55px_rgba(0,255,136,.2)]" />
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,255,136,.32)_70deg,transparent_135deg)] animate-spin-slow" />
          <div className="relative flex size-16 items-center justify-center rounded-full border border-[#00ff88]/40 bg-[#0c211a] shadow-[0_0_30px_rgba(0,255,136,.28)]"><Mail className="size-7 text-white" strokeWidth={1.7} /></div>
        </div>
        <h1 className="mt-10 text-[27px] font-semibold tracking-[-0.045em]">Listening for your email...</h1>
        <p className="mt-3 max-w-[330px] text-sm leading-5 text-[#9ca3af]">Forward a receipt to <span className="font-medium text-[#00ff88]">alex.trials@subshield.app</span> and we&apos;ll catch it.</p>
        <div className="mt-8 w-full rounded-[24px] border border-white/[0.09] bg-white/[0.045] p-5 text-left shadow-[0_18px_70px_rgba(0,0,0,.28)] backdrop-blur-xl">
          <div className="flex items-center gap-3"><span className="flex size-7 items-center justify-center rounded-full bg-[#00ff88] text-[#06120e]"><Check className="size-4" strokeWidth={3} /></span><span className="text-sm text-[#d7dbe0]">Email alias created</span></div>
          <div className="my-4 ml-3.5 h-4 border-l border-dashed border-[#00ff88]/25" />
          <div className="flex items-center gap-3"><span className="relative flex size-7 items-center justify-center rounded-full border border-[#737984]"><span className="size-2 rounded-full bg-[#9ca3af] animate-pulse" /></span><span className="text-sm text-white">Waiting for incoming email...</span><span className="ml-auto text-[10px] uppercase tracking-[.14em] text-[#00ff88]/80">Live</span></div>
          <div className="my-4 ml-3.5 h-4 border-l border-dashed border-white/10" />
          <div className="flex items-center gap-3 text-[#737984]"><span className="flex size-7 items-center justify-center rounded-full border border-white/10"><LockKeyhole className="size-3.5" /></span><span className="text-sm">Extracting price and billing date</span></div>
        </div>
      </section>
      <button onClick={onSkip} className="relative z-10 mx-auto mt-8 text-sm text-[#737984] underline decoration-[#737984]/50 underline-offset-4 transition-colors hover:text-white">Skip for now</button>
    </main>
  )
}

function DashboardScreen({ onBack, onGenerate }: { onBack: () => void; onGenerate: () => void }) {
  return <main className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0F] px-5 pb-24 pt-10 text-white"><div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-220px] size-[460px] -translate-x-1/2 rounded-full bg-[#00ff88]/[0.06] blur-[110px]" /><section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col"><button onClick={onBack} className="mb-9 flex w-fit items-center gap-2 text-xs text-[#737984] hover:text-white"><ArrowLeft className="size-4" />Back</button><div className="animate-rise"><p className="text-sm text-[#9ca3af]">Good morning</p><h1 className="mt-1 text-[32px] font-semibold tracking-[-0.05em]">Welcome, Alex!</h1><p className="mt-2 text-sm text-[#9ca3af]">Your dashboard is empty.</p></div><div className="mt-12 flex flex-col items-center text-center animate-rise [animation-delay:100ms] [animation-fill-mode:backwards]"><EmptyVault /><h2 className="mt-7 text-lg font-semibold">Your subscriptions will appear here</h2><p className="mt-2 max-w-[280px] text-sm leading-5 text-[#737984]">Get started by creating your private email alias.</p></div><div className="mt-9 rounded-[24px] border border-white/[0.09] bg-white/[0.045] p-5 shadow-[0_18px_70px_rgba(0,0,0,.28)] backdrop-blur-xl animate-rise [animation-delay:180ms] [animation-fill-mode:backwards]"><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff88]/75">How SubShield works</p><div className="flex flex-col gap-5">{['Generate your private alias','Forward receipts to it','We track your billing dates'].map((label, index) => <div key={label} className="flex items-center gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#00ff88]/[0.1] text-xs font-semibold text-[#00ff88]">{index + 1}</span><span className="text-sm text-[#d7dbe0]">{label}</span><ChevronRight className="ml-auto size-4 text-[#4b535d]" /></div>)}</div><Button className="mt-6 h-12 w-full rounded-[12px] bg-[#00ff88] text-sm font-semibold text-[#06120e] hover:bg-[#34ffa3] active:scale-[.985]">Generate My Private Alias<ArrowRight data-icon="inline-end" /></Button></div></section><nav aria-label="Bottom navigation" className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#0A0A0F]/90 px-5 py-3 backdrop-blur-xl"><div className="mx-auto flex max-w-[390px] items-center justify-around text-[11px]"><button className="flex flex-col items-center gap-1 text-[#00ff88]"><Inbox className="size-5" />Dashboard</button><button className="flex flex-col items-center gap-1 text-[#737984]"><span className="flex size-5 items-center justify-center rounded-full border border-current text-[9px]">T</span>Trials</button><button className="flex flex-col items-center gap-1 text-[#737984]"><span className="flex size-5 items-center justify-center rounded-full border border-current text-[9px]">S</span>Settings</button></div></nav></main>
}

function LiveProcessingScreen({ onDashboard }: { onDashboard: () => void }) {
  const [detected, setDetected] = useState(false)
  useEffect(() => {
    const detectTimer = window.setTimeout(() => setDetected(true), 1500)
    const dashboardTimer = window.setTimeout(onDashboard, 3500)
    return () => {
      window.clearTimeout(detectTimer)
      window.clearTimeout(dashboardTimer)
    }
  }, [onDashboard])

  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0A0A0F] px-5 pb-8 pt-12 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88]/[0.035] blur-[100px]" />
      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-1 flex-col items-center text-center animate-rise">
        <div className="relative mt-16 flex size-[178px] items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#00ff88]/20 animate-radar" /><div className="absolute inset-5 rounded-full border border-[#00ff88]/25 animate-radar [animation-delay:500ms]" /><div className="absolute inset-10 rounded-full border border-[#00ff88]/35 bg-[#00ff88]/[0.06] shadow-[0_0_55px_rgba(0,255,136,.2)]" /><div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,255,136,.32)_70deg,transparent_135deg)] animate-spin-slow" /><div className="relative flex size-16 items-center justify-center rounded-full border border-[#00ff88]/40 bg-[#0c211a] shadow-[0_0_30px_rgba(0,255,136,.28)]"><Mail className="size-7 text-white" strokeWidth={1.7} /></div>
        </div>
        <h1 className="mt-10 text-[27px] font-semibold tracking-[-0.045em]">{detected ? 'Email detected!' : 'Listening for your email...'}</h1>
        <p className="mt-3 max-w-[330px] text-sm leading-5 text-[#9ca3af]">Forward a receipt to <span className="font-medium text-[#00ff88]">alex.trials@subshield.app</span></p>
        <div className="mt-8 w-full rounded-[24px] border border-white/[0.09] bg-white/[0.045] p-5 text-left shadow-[0_18px_70px_rgba(0,0,0,.28)] backdrop-blur-xl">
          <div className="flex items-center gap-3"><span className="flex size-7 items-center justify-center rounded-full bg-[#00ff88] text-[#06120e]"><Check className="size-4" strokeWidth={3} /></span><span className="text-sm text-[#d7dbe0]">Email alias created</span></div>
          <div className="my-4 ml-3.5 h-4 border-l border-dashed border-[#00ff88]/25" />
          <div className="flex items-center gap-3"><span className={detected ? 'flex size-7 items-center justify-center rounded-full bg-[#00ff88] text-[#06120e]' : 'relative flex size-7 items-center justify-center rounded-full border border-[#737984]'}>{detected ? <Check className="size-4" strokeWidth={3} /> : <span className="size-2 rounded-full bg-[#9ca3af] animate-pulse" />}</span><span className="text-sm text-white">{detected ? 'Email detected! Extracting data...' : 'Waiting for incoming email...'}</span></div>
          <div className="my-4 ml-3.5 h-4 border-l border-dashed border-white/10" />
          <div className={detected ? 'flex items-center gap-3 text-[#00ff88]' : 'flex items-center gap-3 text-[#737984]'}><span className="flex size-7 items-center justify-center rounded-full border border-current">{detected ? <Check className="size-4" strokeWidth={3} /> : <LockKeyhole className="size-3.5" />}</span><span className="text-sm">Extracting price and billing date</span></div>
        </div>
      </section>
    </main>
  )
}

function EscapeRouteModal({ onClose, onSaved }: { onClose: () => void; onSaved: () => void }) {
  const [copied, setCopied] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const emailBody = `Dear Adobe Billing Team,\n\nI am writing to formally request the cancellation of my Adobe Creative Cloud subscription, effective immediately.\n\nAccount Email: alex@example.com\nReason: I no longer require this service.\n\nPlease confirm cancellation and ensure no further charges are applied to my account.\n\nThank you,\nAlex`
  const copyTemplate = async () => {
    await navigator.clipboard?.writeText(emailBody)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  const openEmail = async () => {
    await copyTemplate()
    window.location.href = `mailto:billing@adobe.com?subject=${encodeURIComponent('Cancellation Request - Account #12345')}&body=${encodeURIComponent(emailBody)}`
  }
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-[6px]" role="dialog" aria-modal="true" aria-labelledby="escape-route-title">
      <section className="max-h-[92svh] w-full max-w-[430px] overflow-y-auto rounded-t-[26px] border border-white/10 bg-[#12121a] px-5 pb-8 pt-5 text-white shadow-[0_-18px_80px_rgba(0,0,0,.55)] animate-sheet-up">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" />
        <div className="flex items-start gap-3"><span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1473e6] to-[#8b5cf6] text-lg font-bold text-white shadow-[0_0_24px_rgba(59,130,246,.3)]">Ai</span><div className="min-w-0 flex-1"><h2 id="escape-route-title" className="text-[21px] font-semibold tracking-[-.035em]">How to Cancel Adobe Creative Cloud</h2><p className="mt-1 text-sm leading-5 text-[#9ca3af]">Follow these steps to cancel before you&apos;re charged $54.99</p></div><button onClick={onClose} aria-label="Close escape route" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/[.08] text-[#d7dbe0] hover:bg-white/[.14]"><span className="text-xl leading-none">×</span></button></div>
        <div className="mt-4 inline-flex rounded-full bg-[#ff3b30]/15 px-3 py-1.5 text-xs font-semibold text-[#ff6b63]">Hard · Requires Email</div>
        {confirmed ? <div className="flex min-h-[430px] flex-col items-center justify-center text-center animate-rise"><div className="flex size-20 items-center justify-center rounded-full bg-[#00ff88]/15 text-[#00ff88] shadow-[0_0_40px_rgba(0,255,136,.18)]"><Check className="size-10" strokeWidth={2.5} /></div><h3 className="mt-6 text-[28px] font-semibold tracking-[-.05em] text-[#00ff88]">You just saved $54.99!</h3><p className="mt-3 text-sm text-[#9ca3af]">Adobe has been removed from your active trials.</p><Button onClick={onSaved} className="mt-8 h-13 w-full rounded-[12px] bg-[#00ff88] font-semibold text-[#06120e] hover:bg-[#34ffa3]">Back to Dashboard</Button></div> : <><div className="mt-5 rounded-[20px] border border-[#00ff88]/55 bg-[#00ff88]/[.055] p-4 shadow-[0_0_30px_rgba(0,255,136,.07)]"><div className="flex items-start gap-3"><Link2 className="mt-0.5 size-5 shrink-0 text-[#00ff88]" /><div><h3 className="font-semibold">Direct Cancellation Link</h3><p className="mt-1 text-xs leading-4 text-[#9ca3af]">Skip the homepage and go straight to the cancel page</p></div></div><Button onClick={() => window.open('https://account.adobe.com/plan/cancel', '_blank', 'noopener,noreferrer')} className="mt-4 h-12 w-full rounded-[11px] bg-[#00ff88] text-sm font-semibold text-[#06120e] hover:bg-[#34ffa3]">Open Cancellation Page<ExternalLink data-icon="inline-end" /></Button><p className="mt-3 font-mono text-[10px] text-[#737984]">account.adobe.com/plan/cancel</p></div><h3 className="mt-6 text-base font-semibold">Or, send a cancellation email</h3><div className="mt-3 rounded-[18px] border border-white/[.09] bg-white/[.045] p-4"><p className="font-mono text-[11px] text-[#9ca3af]">To: billing@adobe.com</p><p className="mt-2 font-mono text-[11px] text-[#9ca3af]">Subject: Cancellation Request - Account #12345</p><pre className="mt-4 max-h-36 overflow-y-auto whitespace-pre-wrap rounded-xl bg-[#08080c] p-3 font-sans text-xs leading-5 text-[#d7dbe0]">{emailBody}</pre><Button onClick={openEmail} variant="outline" className="mt-3 h-11 w-full rounded-[10px] border-[#00ff88]/60 text-xs text-[#00ff88] hover:bg-[#00ff88]/10">{copied ? 'Copied!' : 'Copy Template & Open Email'}<Copy data-icon="inline-end" /></Button></div><label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-white/[.08] bg-white/[.03] p-3"><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} className="mt-0.5 size-4 accent-[#00ff88]" /><span><span className="block text-sm font-medium">I have successfully canceled Adobe Creative Cloud</span><span className="mt-1 block text-[11px] text-[#737984]">Checking this will remove Adobe from your Trial Quarantine</span></span></label></>}
      </section>
    </div>
  )
}

function AllClearState({ onTrackNew, onDashboard, onShowTrials }: { onTrackNew: () => void; onDashboard: () => void; onShowTrials: () => void }) {
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(127.97)

  useEffect(() => {
    let frame = 0
    const started = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - started) / 900, 1)
      setSaved(127.97 * (1 - Math.pow(1 - progress, 3)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const copyAlias = async () => {
    await navigator.clipboard?.writeText('alex.trials@subshield.app')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0F] px-5 pb-28 pt-8 text-white">
      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col animate-rise">
        <div className="flex items-start justify-between"><div><p className="text-sm text-[#9ca3af]">Total at Risk</p><h1 className="mt-1 text-[38px] font-semibold tracking-[-.06em] text-[#00ff88]">$0.00</h1><p className="mt-1 text-sm text-[#9ca3af]">No charges coming up. You&apos;re safe!</p></div><label className="flex cursor-pointer flex-col items-end gap-1 text-[10px] text-[#737984]"><span>Demo: Show Empty State</span><input type="checkbox" checked aria-label="Demo: Show Empty State" onChange={onShowTrials} className="sr-only peer" /><span className="relative h-5 w-9 rounded-full bg-[#00ff88] after:absolute after:right-0.5 after:top-0.5 after:size-4 after:rounded-full after:bg-[#06120e] after:transition-all" /></label></div>
        <div className="mt-7 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]"><button className="shrink-0 rounded-full bg-white/[0.08] px-4 py-2 text-xs text-[#9ca3af]">Critical</button><button className="shrink-0 rounded-full bg-white/[0.08] px-4 py-2 text-xs text-[#9ca3af]">Warning</button><button className="shrink-0 rounded-full bg-white/[0.08] px-4 py-2 text-xs text-[#9ca3af]">Safe</button></div>
        <div className="mt-9 flex flex-col items-center text-center"><div className="flex size-28 items-center justify-center rounded-full border border-[#00ff88]/30 bg-[#00ff88]/[0.08] text-[#00ff88] shadow-[0_0_55px_rgba(0,255,136,.2)] animate-pulse-soft"><ShieldCheck className="size-16" strokeWidth={1.5} /></div><h2 className="mt-7 text-[29px] font-semibold tracking-[-.05em]">You&apos;re all clear!</h2><p className="mt-3 max-w-[330px] text-sm leading-5 text-[#9ca3af]">No free trials ending soon. Enjoy your peace of mind.</p><p className="mt-2 text-xs text-[#737984]">We&apos;ll keep watching and alert you if anything changes.</p></div>
        <div className="mt-8 rounded-[20px] border border-white/[.09] bg-white/[.045] p-4 backdrop-blur-xl"><div className="flex items-center gap-3"><span className="text-xl">$</span><h3 className="text-sm font-semibold">Total Saved This Month</h3></div><p className="mt-3 text-[32px] font-semibold tracking-[-.05em] text-[#00ff88]">${saved.toFixed(2)}</p><p className="mt-1 text-xs text-[#9ca3af]">From 3 canceled trials</p><p className="mt-3 text-xs text-[#737984]">Keep it up! You&apos;re doing great.</p></div>
        <button onClick={onTrackNew} className="mt-6 h-14 w-full rounded-[12px] bg-[#00ff88] text-sm font-semibold text-[#06120e] transition-transform hover:bg-[#34ffa3] active:scale-[.985]">Track a New Trial</button><button onClick={onDashboard} className="mt-4 text-sm text-[#737984] underline underline-offset-4 hover:text-white">Or go back to Dashboard</button>
        <div className="mt-7 rounded-[18px] border border-white/[.09] bg-white/[.045] p-4"><div className="flex items-start gap-3"><span className="text-lg">i</span><p className="text-xs leading-5 text-[#9ca3af]">Pro tip: Forward your trial confirmation emails to your private alias, and we&apos;ll automatically track them here.</p></div><button onClick={copyAlias} className="mt-3 text-xs font-semibold text-[#00ff88]">{copied ? 'Alias copied!' : 'Copy My Alias'}</button></div>
      </section>
      <nav aria-label="Main navigation" className="fixed inset-x-0 bottom-0 z-20 border-t border-white/[.08] bg-[#0A0A0F]/90 px-8 py-4 backdrop-blur-xl"><div className="mx-auto flex max-w-[390px] items-center justify-between"><button onClick={onDashboard} className="flex flex-col items-center gap-1 text-[10px] text-[#737984]"><LayoutDashboard className="size-5" /><span>Dashboard</span></button><button className="flex flex-col items-center gap-1 text-[10px] text-[#00ff88]"><ReceiptText className="size-5" /><span>Trials</span></button><button className="flex flex-col items-center gap-1 text-[10px] text-[#737984]"><Settings className="size-5" /><span>Settings</span></button></div></nav>
    </main>
  )
}

function TrialQuarantineScreen({ onDashboard, onTrackNew }: { onDashboard: () => void; onTrackNew: () => void }) {
  const [hasActiveTrials, setHasActiveTrials] = useState(true)
  const [showEscapeRoute, setShowEscapeRoute] = useState(false)
  const [removedAdobe, setRemovedAdobe] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const trials = [
    ...(!removedAdobe ? [{ name: 'Adobe Creative Cloud', logo: 'Ai', logoClass: 'bg-[#1473e6]', detail: 'Charges $54.99 in 14 hours!', timer: '14:32:08', tone: 'critical', action: 'Get Escape Route' } as const] : []),
    { name: 'Amazon Prime', logo: 'a', logoClass: 'bg-[#ff9500]', detail: 'Charges $14.99 in 2 days', timer: '2d 08h', tone: 'warning', action: 'Get Escape Route' },
    { name: 'Hulu', logo: 'h', logoClass: 'bg-[#1ce783]', detail: 'Charges $7.99 in 6 days', timer: '6d 04h', tone: 'safe', action: 'Review trial' },
  ] as const

  if (!hasActiveTrials) return <><AllClearState onTrackNew={() => setShowAddModal(true)} onDashboard={onDashboard} onShowTrials={() => setHasActiveTrials(true)} />{showAddModal && <ManualAddModal onClose={() => setShowAddModal(false)} />}</>

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0F] px-5 pb-10 pt-10 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-180px] size-[440px] -translate-x-1/2 rounded-full bg-[#ff3b30]/[0.055] blur-[115px]" />
      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col animate-rise">
        <button onClick={() => setHasActiveTrials(false)} className="mb-4 self-end text-[10px] text-[#737984] underline underline-offset-2 hover:text-[#00ff88]">Demo: Show Empty State</button>
        <div className="flex items-center justify-between"><div><p className="text-sm text-[#9ca3af]">Total at Risk</p><div className="mt-1 flex items-center gap-2"><h1 className="text-[38px] font-semibold tracking-[-0.06em]">$54.99</h1><span className="text-xl text-[#ff9500]" aria-label="Warning">!</span></div><p className="mt-1 text-sm text-[#9ca3af]">will be charged in the next 48 hours</p></div><div className="flex size-11 items-center justify-center rounded-full border border-[#ff9500]/25 bg-[#ff9500]/[0.1] text-xl text-[#ff9500]">!</div></div>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]"><button className="shrink-0 rounded-full bg-[#ff3b30] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(255,59,48,.2)]">Critical (&lt; 24h)</button><button className="shrink-0 rounded-full bg-white/[0.08] px-4 py-2 text-xs text-[#b7bdc5]">Warning (1–3 days)</button><button className="shrink-0 rounded-full bg-white/[0.08] px-4 py-2 text-xs text-[#b7bdc5]">Safe (&gt; 3 days)</button></div>
        <div className="mt-5 flex flex-col gap-3">{trials.map((trial) => { const critical = trial.tone === 'critical'; const warning = trial.tone === 'warning'; const accent = critical ? '#ff3b30' : warning ? '#ff9500' : '#00ff88'; return <article key={trial.name} className="relative overflow-hidden rounded-[20px] border border-white/[0.09] bg-[#1A1A24]/90 p-4 pl-5 shadow-[0_14px_45px_rgba(0,0,0,.22)] backdrop-blur-xl"><div className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: accent }} /><div className="flex items-start gap-3"><span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${trial.logoClass} text-lg font-bold text-white shadow-lg`}>{trial.logo}</span><div className="min-w-0 flex-1"><h2 className="truncate text-sm font-semibold">{trial.name}</h2><p className="mt-1 text-xs font-semibold" style={{ color: accent }}>{trial.detail}</p><p className="mt-3 font-mono text-base font-semibold tracking-[0.08em]" style={{ color: accent }}>{trial.timer}</p><button className="mt-3 rounded-[10px] px-3 py-2 text-[11px] font-semibold text-white transition-transform active:scale-[.97]" style={{ backgroundColor: accent }} onClick={() => trial.action === 'Get Escape Route' && setShowEscapeRoute(true)}>{trial.action}</button></div></div></article> })}</div>
        <p className="mt-6 text-center text-[11px] leading-4 text-[#737984]">SubShield watches the clock so you can stay ahead of unwanted charges.</p>
      </section>
      {showEscapeRoute && <EscapeRouteModal onClose={() => setShowEscapeRoute(false)} onSaved={() => { setRemovedAdobe(true); setShowEscapeRoute(false) }} />}
    </main>
  )
}

function ManualAddModal({ onClose }: { onClose: () => void }) {
  const [service, setService] = useState('')
  const [price, setPrice] = useState('')
  const [frequency, setFrequency] = useState<'Monthly' | 'Yearly' | 'Weekly'>('Monthly')
  const [date, setDate] = useState(() => { const next = new Date(); next.setDate(next.getDate() + 30); return next.toISOString().slice(0, 10) })
  const [notes, setNotes] = useState('')
  const [errors, setErrors] = useState<{ service?: string; price?: string; date?: string }>({})
  const [saved, setSaved] = useState(false)
  const suggestions = ['Netflix', 'Spotify', 'Adobe', 'Amazon', 'Apple', 'YouTube']

  const submit = () => {
    const nextErrors: typeof errors = {}
    if (!service.trim()) nextErrors.service = 'Enter a service name.'
    if (!price || Number.isNaN(Number(price)) || Number(price) <= 0) nextErrors.price = 'Enter a valid price.'
    if (!date) nextErrors.date = 'Choose a billing date.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSaved(true)
    window.setTimeout(onClose, 900)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 px-0 backdrop-blur-[6px]" role="dialog" aria-modal="true" aria-labelledby="manual-add-title">
      <section className="max-h-[88svh] w-full max-w-[430px] overflow-y-auto rounded-t-[26px] border border-white/10 bg-[#12121a] px-5 pb-8 pt-5 text-white shadow-[0_-18px_80px_rgba(0,0,0,.6)] animate-sheet-up">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" />
        <div className="relative text-center"><button onClick={onClose} aria-label="Close add subscription modal" className="absolute right-0 top-0 flex size-9 items-center justify-center rounded-full bg-white/[.08] text-[#d7dbe0] hover:bg-white/[.14]"><X className="size-4" /></button><h2 id="manual-add-title" className="pr-8 text-[21px] font-semibold tracking-[-.035em]">Add Subscription Manually</h2><p className="mt-1 text-sm text-[#9ca3af]">Or forward receipts to your private alias</p></div>
        {saved ? <div className="flex min-h-[430px] flex-col items-center justify-center text-center animate-rise"><div className="flex size-20 items-center justify-center rounded-full bg-[#00ff88]/15 text-[#00ff88] shadow-[0_0_40px_rgba(0,255,136,.18)]"><Check className="size-10" strokeWidth={2.5} /></div><h3 className="mt-5 text-2xl font-semibold text-[#00ff88]">Subscription added</h3><p className="mt-2 text-sm text-[#9ca3af]">{service} is now in your tracker.</p></div> : <div className="mt-7 flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-xs font-medium text-[#d7dbe0]">Service Name<div className="flex h-12 items-center gap-3 rounded-[10px] border border-white/10 bg-[#1A1A24] px-3 focus-within:border-[#00ff88]/60"><Search className="size-4 text-[#737984]" /><input value={service} onChange={(event) => setService(event.target.value)} placeholder="e.g., Netflix, Spotify, Adobe" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#737984]" /></div>{errors.service && <span className="text-[11px] text-[#ff6b63]">{errors.service}</span>}<div className="flex flex-wrap gap-2">{suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => setService(suggestion)} className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-[11px] text-[#b7bdc5] transition-colors hover:border-[#00ff88]/50 hover:text-[#00ff88]">{suggestion}</button>)}</div></label>
          <label className="flex flex-col gap-2 text-xs font-medium text-[#d7dbe0]">Monthly Price<div className="flex h-12 items-center gap-3 rounded-[10px] border border-white/10 bg-[#1A1A24] px-3 focus-within:border-[#00ff88]/60"><CircleDollarSign className="size-4 text-[#737984]" /><input inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="$0.00" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#737984]" /></div>{errors.price && <span className="text-[11px] text-[#ff6b63]">{errors.price}</span>}</label>
          <fieldset className="flex flex-col gap-2"><legend className="text-xs font-medium text-[#d7dbe0]">Billing Frequency</legend><div className="grid grid-cols-3 gap-2">{(['Monthly', 'Yearly', 'Weekly'] as const).map((option) => <button type="button" key={option} onClick={() => setFrequency(option)} className={`rounded-full px-3 py-2 text-xs font-medium transition-colors ${frequency === option ? 'bg-[#00ff88] text-[#06120e]' : 'bg-white/[.08] text-[#9ca3af] hover:bg-white/[.14]'}`}>{option}</button>)}</div>{frequency === 'Yearly' && <p className="text-[11px] text-[#9ca3af]">We&apos;ll calculate the monthly cost for you.</p>}</fieldset>
          <label className="flex flex-col gap-2 text-xs font-medium text-[#d7dbe0]">Next Billing Date<div className="relative"><input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="h-12 w-full rounded-[10px] border border-white/10 bg-[#1A1A24] px-3 text-sm text-white outline-none focus:border-[#00ff88]/60" /><CalendarDays className="pointer-events-none absolute right-3 top-3 size-5 text-[#00ff88]" /></div>{errors.date && <span className="text-[11px] text-[#ff6b63]">{errors.date}</span>}</label>
          <label className="flex flex-col gap-2 text-xs font-medium text-[#d7dbe0]">Notes (Optional)<textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="e.g., Family plan, shared with roommate" rows={2} className="resize-none rounded-[10px] border border-white/10 bg-[#1A1A24] px-3 py-3 text-sm text-white outline-none placeholder:text-[#737984] focus:border-[#00ff88]/60" /></label>
          <Button type="button" onClick={submit} className="h-14 rounded-[12px] bg-[#00ff88] text-sm font-semibold text-[#06120e] hover:bg-[#34ffa3] active:scale-[.985]">Add Subscription</Button><p className="-mt-2 text-center text-[11px] text-[#737984]">We&apos;ll track this and alert you before it renews</p>
        </div>}
      </section>
    </div>
  )
}

function ConnectedDashboardScreen() {
  const [showAddModal, setShowAddModal] = useState(false)
  const subscriptions = [{ name: 'Netflix', detail: 'Next bill: Nov 12', price: '$15.99', icon: 'N', color: 'bg-[#e50914]' }, { name: 'Spotify', detail: 'Next bill: Nov 15', price: '$10.99', icon: '♪', color: 'bg-[#1ed760]' }, { name: 'Adobe Creative Cloud', detail: 'Trial ends in 2 days!', price: '$54.99', icon: 'Ai', color: 'bg-[#1473e6]' }]
  return <> <main className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0F] px-5 pb-24 pt-10 text-white"><div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-220px] size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88]/[0.06] blur-[110px]" /><section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col animate-rise"><p className="text-sm text-[#9ca3af]">Total Monthly Spend</p><div className="mt-1 flex items-end justify-between gap-3"><h1 className="text-[32px] font-semibold tracking-[-0.05em]">$26.98 <span className="text-lg font-normal text-[#737984]">/ month</span></h1><span className="rounded-full bg-[#00ff88]/[0.12] px-2.5 py-1 text-[10px] font-semibold text-[#00ff88]">↓ $12 saved this month</span></div><div className="mt-7 rounded-[14px] border border-[#00ff88]/20 bg-[#00ff88]/[0.09] px-4 py-3 text-sm text-[#b9ffd9]">✓ Netflix receipt synced successfully.</div><div className="mt-5 flex flex-col gap-3">{subscriptions.map((subscription, index) => <article key={subscription.name} className={index === 2 ? 'rounded-[20px] border border-[#00ff88]/70 bg-white/[0.045] p-4' : 'rounded-[20px] border border-white/[0.09] bg-white/[0.045] p-4'}><div className="flex items-center gap-3"><span className={`flex size-11 items-center justify-center rounded-xl ${subscription.color} text-lg font-bold text-white`}>{subscription.icon}</span><div className="min-w-0 flex-1"><h2 className="truncate text-sm font-semibold">{subscription.name}</h2><p className={index === 2 ? 'mt-1 text-xs text-orange-300' : 'mt-1 text-xs text-[#9ca3af]'}>{subscription.detail}</p></div><div className="text-right"><p className="text-sm font-semibold">{subscription.price}</p><p className="mt-1 text-[10px] text-[#00ff88]">{index === 2 ? 'Free Trial' : 'Active'}</p></div></div></article>)}</div></section><button aria-label="Add subscription" onClick={() => setShowAddModal(true)} className="fixed bottom-20 right-5 z-20 flex size-14 items-center justify-center rounded-full bg-[#00ff88] text-[#06120e] shadow-[0_0_28px_rgba(0,255,136,.3)] transition-transform hover:scale-105 active:scale-95"><Plus className="size-6" /></button><nav aria-label="Main navigation" className="fixed inset-x-0 bottom-0 z-20 border-t border-white/[0.08] bg-[#0A0A0F]/90 px-8 py-4 backdrop-blur-xl"><div className="mx-auto flex max-w-[390px] items-center justify-between"><button className="flex flex-col items-center gap-1 text-[10px] text-[#00ff88]"><LayoutDashboard className="size-5" /><span>Dashboard</span></button><button className="flex flex-col items-center gap-1 text-[10px] text-[#737984]"><ReceiptText className="size-5" /><span>Trials</span></button><button className="flex flex-col items-center gap-1 text-[10px] text-[#737984]"><Settings className="size-5" /><span>Settings</span></button></div></nav></main>{showAddModal && <ManualAddModal onClose={() => setShowAddModal(false)} />}</>
}

export default function Page() {
  const [screen, setScreen] = useState<'login' | 'email' | 'dashboard' | 'alias' | 'processing'>('login')
  if (screen === 'email') return <EmailScreen onBack={() => setScreen('login')} onContinue={() => setScreen('alias')} />
  if (screen === 'alias') return <AliasScreen onOpenEmail={() => setScreen('processing')} onLater={() => setScreen('dashboard')} />
  if (screen === 'processing') return <LiveProcessingScreen onDashboard={() => setScreen('dashboard')} />
  if (screen === 'dashboard') return <TrialQuarantineScreen onDashboard={() => setScreen('dashboard')} onTrackNew={() => setScreen('dashboard')} />
  return <LoginScreen onEmail={() => setScreen('email')} />
}
