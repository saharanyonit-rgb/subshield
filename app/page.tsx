'use client'

import { useState } from 'react'
import {
  Apple,
  ArrowRight,
  Check,
  ChevronRight,
  Inbox,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
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
  return <span aria-hidden="true" className="text-[19px] font-bold tracking-[-.12em] text-[#4285f4]">G</span>
}

function LoginScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0A0A0F] px-5 py-10 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-220px] size-[460px] -translate-x-1/2 rounded-full bg-[#00ff88]/[0.07] blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-230px] right-[-190px] size-[420px] rounded-full bg-[#154b58]/[0.13] blur-[110px]" />
      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center">
        <div className="animate-rise"><BrandMark /></div>
        <div className="mt-8 text-center animate-rise [animation-delay:100ms] [animation-fill-mode:backwards]">
          <h1 className="text-[32px] font-semibold leading-[1.06] tracking-[-0.05em]">Track your subscriptions.<br />Keep your bank data private.</h1>
          <p className="mx-auto mt-5 max-w-[340px] text-[14px] leading-5 text-[#9ca3af]">No bank linking required. We use a private email alias to automatically track your trials and bills.</p>
        </div>
        <div className="mt-9 flex w-full flex-col gap-3 animate-rise [animation-delay:180ms] [animation-fill-mode:backwards]">
          <Button onClick={onContinue} className="h-14 w-full rounded-[12px] bg-[#050507] text-[14px] font-medium text-white ring-1 ring-white/10 hover:bg-[#111116] active:scale-[.985]"><Apple data-icon="inline-start" className="fill-white" />Continue with Apple</Button>
          <Button onClick={onContinue} className="h-14 w-full rounded-[12px] bg-white text-[14px] font-medium text-[#101116] hover:bg-[#e8ebe9] active:scale-[.985]"><GoogleMark />Continue with Google</Button>
          <Button onClick={onContinue} variant="outline" className="h-14 w-full rounded-[12px] border-[#00ff88]/70 bg-[#00ff88]/[0.035] text-[14px] font-medium text-[#00ff88] hover:bg-[#00ff88]/[0.1] hover:text-[#5affb4] active:scale-[.985]">Sign up with Email<ArrowRight data-icon="inline-end" /></Button>
        </div>
        <p className="mt-8 flex items-center gap-2 text-center text-[11px] leading-4 text-[#737984] animate-rise [animation-delay:280ms] [animation-fill-mode:backwards]"><LockKeyhole className="size-3.5 shrink-0 text-[#00ff88]/80" />We will NEVER ask for your bank password.</p>
      </section>
    </main>
  )
}

function EmptyVault() {
  return (
    <div className="relative flex size-[142px] items-center justify-center rounded-[36px] border border-[#00ff88]/20 bg-[#0c211a]/80 shadow-[0_0_44px_rgba(0,255,136,.12),inset_0_0_30px_rgba(0,255,136,.06)]">
      <div className="absolute inset-3 rounded-[28px] border border-dashed border-[#00ff88]/20" />
      <Inbox className="size-16 text-[#00ff88]/80" strokeWidth={1.2} />
      <Sparkles className="absolute right-6 top-5 size-5 text-[#00ff88]" />
    </div>
  )
}

function DashboardScreen({ onBack }: { onBack: () => void }) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0F] px-5 py-10 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-220px] size-[460px] -translate-x-1/2 rounded-full bg-[#00ff88]/[0.06] blur-[110px]" />
      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col">
        <button onClick={onBack} className="mb-9 flex w-fit items-center gap-2 text-xs text-[#737984] hover:text-white"><span className="text-lg">‹</span> Back</button>
        <div className="animate-rise">
          <p className="text-sm text-[#9ca3af]">Good morning</p>
          <h1 className="mt-1 text-[32px] font-semibold tracking-[-0.05em]">Welcome, Alex!</h1>
          <p className="mt-2 text-sm text-[#9ca3af]">Your dashboard is empty.</p>
        </div>
        <div className="mt-14 flex flex-col items-center text-center animate-rise [animation-delay:100ms] [animation-fill-mode:backwards]"><EmptyVault /><h2 className="mt-7 text-lg font-semibold">Your subscriptions will appear here</h2><p className="mt-2 max-w-[280px] text-sm leading-5 text-[#737984]">Get started by creating your private email alias.</p></div>
        <div className="mt-9 rounded-[24px] border border-white/[0.09] bg-white/[0.045] p-5 shadow-[0_18px_70px_rgba(0,0,0,.28)] backdrop-blur-xl animate-rise [animation-delay:180ms] [animation-fill-mode:backwards]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff88]/75">How SubShield works</p>
          <div className="flex flex-col gap-5">
            {[['1', 'Generate your private alias'], ['2', 'Forward receipts & trial emails'], ['3', 'Let SubShield track the rest']].map(([step, label], index) => <div key={step} className="flex items-center gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#00ff88]/[0.1] text-xs font-semibold text-[#00ff88]">{index === 2 ? <Check className="size-4" /> : step}</span><span className="text-sm text-[#d7dbe0]">{label}</span><ChevronRight className="ml-auto size-4 text-[#4b535d]" /></div>)}
          </div>
          <Button className="mt-6 h-12 w-full rounded-[12px] bg-[#00ff88] text-sm font-semibold text-[#06120e] hover:bg-[#34ffa3] active:scale-[.985]">Create private alias<ArrowRight data-icon="inline-end" /></Button>
        </div>
      </section>
    </main>
  )
}

export default function Page() {
  const [showDashboard, setShowDashboard] = useState(false)
  return showDashboard ? <DashboardScreen onBack={() => setShowDashboard(false)} /> : <LoginScreen onContinue={() => setShowDashboard(true)} />
}
