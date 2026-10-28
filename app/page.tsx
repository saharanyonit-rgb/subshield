'use client'

import { useState } from 'react'
import { ArrowRight, Check, Clipboard, ExternalLink, LayoutDashboard, Mail, Settings, ShieldCheck, Sparkles, WalletCards } from 'lucide-react'
import { Button } from '@/components/ui/button'

const alias = 'alex.trials@subshield.app'

function AliasMark() {
  return (
    <div className="relative flex size-[76px] items-center justify-center rounded-full bg-[#071c17] shadow-[0_0_0_1px_rgba(0,255,136,.32),0_0_38px_rgba(0,255,136,.22),inset_0_0_24px_rgba(0,255,136,.10)] animate-pulse-soft">
      <div className="absolute inset-[-8px] rounded-full border border-[#00ff88]/10" />
      <div className="flex size-10 items-center justify-center rounded-full bg-[#00ff88] text-[#06120e] shadow-[0_0_22px_rgba(0,255,136,.55)]">
        <Check className="size-6" strokeWidth={3} />
      </div>
    </div>
  )
}

function HowItWorks() {
  return (
    <div className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex size-10 items-center justify-center rounded-xl bg-[#00ff88]/[0.09] text-[#00ff88]"><Mail className="size-5" /></div>
        <span className="text-[10px] font-medium text-[#9299a3]">Forward receipt</span>
      </div>
      <ArrowRight className="size-4 shrink-0 text-[#00ff88]/70" />
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="relative flex size-10 items-center justify-center rounded-xl bg-[#00ff88]/[0.09] text-[#00ff88]"><LayoutDashboard className="size-5" /><Sparkles className="absolute -right-1 -top-1 size-3" /></div>
        <span className="text-[10px] font-medium text-[#9299a3]">We track it</span>
      </div>
    </div>
  )
}

function BottomNav() {
  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 bottom-0 z-20 mx-auto flex h-[76px] max-w-[430px] items-center justify-around border-t border-white/[0.08] bg-[#0b0c11]/90 px-6 backdrop-blur-xl">
      <button className="flex flex-col items-center gap-1.5 text-[#00ff88]" aria-current="page"><LayoutDashboard className="size-[18px]" /><span className="text-[10px] font-medium">Dashboard</span></button>
      <button className="flex flex-col items-center gap-1.5 text-[#656b75] hover:text-white"><WalletCards className="size-[18px]" /><span className="text-[10px] font-medium">Trials</span></button>
      <button className="flex flex-col items-center gap-1.5 text-[#656b75] hover:text-white"><Settings className="size-[18px]" /><span className="text-[10px] font-medium">Settings</span></button>
    </nav>
  )
}

export default function Page() {
  const [copied, setCopied] = useState(false)

  async function copyAlias() {
    await navigator.clipboard.writeText(alias)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0F] px-5 pb-28 pt-10 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-190px] size-[430px] -translate-x-1/2 rounded-full bg-[#00ff88]/[0.055] blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-180px] right-[-160px] size-[370px] rounded-full bg-[#124f5e]/[0.12] blur-[100px]" />

      <section className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center">
        <div className="animate-rise"><AliasMark /></div>
        <div className="mt-6 text-center animate-rise [animation-delay:100ms] [animation-fill-mode:backwards]">
          <h1 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.045em]">Your Private Alias is Ready!</h1>
          <p className="mx-auto mt-4 max-w-[340px] text-[14px] leading-5 text-[#8c929b]">Forward any receipt or free trial confirmation to this address, and we&apos;ll track it automatically.</p>
        </div>

        <div className="mt-7 w-full rounded-[24px] border border-dashed border-[#00ff88]/45 bg-white/[0.045] p-5 text-center shadow-[0_18px_70px_rgba(0,0,0,.3),inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-xl animate-rise [animation-delay:180ms] [animation-fill-mode:backwards]">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff88]/75">Your secure alias</p>
          <p className="break-all font-mono text-[17px] font-medium tracking-[-0.04em] text-[#00ff88]">{alias}</p>
          <Button onClick={copyAlias} className="mt-5 h-11 w-full rounded-[14px] bg-[#00ff88] text-[13px] font-semibold text-[#06120e] shadow-[0_0_22px_rgba(0,255,136,.16)] hover:bg-[#34ffa3] active:scale-[.98]">
            {copied ? <Check data-icon="inline-start" /> : <Clipboard data-icon="inline-start" />}
            {copied ? 'Email Copied' : 'Copy Email Address'}
          </Button>
        </div>

        <HowItWorks />

        <div className="mt-7 w-full animate-rise [animation-delay:280ms] [animation-fill-mode:backwards]">
          <Button className="h-14 w-full rounded-[17px] bg-[#00ff88] text-[15px] font-semibold text-[#06120e] shadow-[0_0_30px_rgba(0,255,136,.18)] hover:bg-[#34ffa3] active:scale-[.985]"><ExternalLink data-icon="inline-start" />Open My Email App</Button>
          <button className="mt-4 flex w-full justify-center text-[13px] text-[#737984] underline-offset-4 hover:text-white hover:underline">I&apos;ll do it later</button>
        </div>
      </section>

      <BottomNav />
    </main>
  )
}
