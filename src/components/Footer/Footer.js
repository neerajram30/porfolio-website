"use client";
import { profile } from "../config/profile";
import React, { useState } from "react";
import Link from "next/link";
import { socials } from "../config/socialLinks";
import { Mail, Phone, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = profile.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative w-full py-12 sm:py-20 px-4 sm:px-6 md:px-8 bg-slate-950 light:bg-slate-100 border-t border-white/10 light:border-slate-900/10 overflow-hidden" id="contact">
      <div className="w-full max-w-6xl mx-auto">
        {/* Contact CTA Card */}
        <div className="bento-card p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 light:text-indigo-600 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Let&apos;s Connect
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
                Got an exciting project or role in mind?
              </h2>
              <p className="mt-2.5 sm:mt-3 text-slate-300 light:text-slate-700 text-xs sm:text-base leading-relaxed">
                Interested in collaborating or discussing a full-stack development role? Get in touch.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 w-full">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-between gap-2 sm:gap-3 px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-slate-900/90 light:bg-white/90 hover:bg-slate-800/90 light:hover:bg-slate-200/90 border border-white/10 light:border-slate-900/10 text-white light:text-slate-900 font-mono text-xs sm:text-sm transition-all group w-full"
              >
                <div className="flex items-center gap-2 overflow-hidden min-w-0">
                  <Mail className="w-4 h-4 text-indigo-400 light:text-indigo-600 shrink-0" />
                  <span className="truncate">{email}</span>
                </div>
                <span className="p-1 sm:p-1.5 rounded-md bg-indigo-500/10 text-indigo-400 light:text-indigo-600 group-hover:scale-105 transition-transform shrink-0">
                  {copied ? <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 light:text-emerald-700" /> : <Copy className="w-3.5 sm:w-4 h-3.5 sm:h-4" />}
                </span>
              </button>

              <a
                href={profile.phoneHref}
                className="flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-slate-900/90 light:bg-white/90 hover:bg-slate-800/90 light:hover:bg-slate-200/90 border border-white/10 light:border-slate-900/10 text-white light:text-slate-900 font-mono text-xs sm:text-sm transition-all w-full"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400 light:text-cyan-700 shrink-0" />
                  <span>{profile.phone}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 light:text-slate-600 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Links & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10 light:border-slate-900/10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white light:text-slate-900 tracking-tight">
              Archana<span className="text-indigo-400 light:text-indigo-600">.P.Babu</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400 light:text-slate-600">{profile.role}</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {socials.map((social) => (
              <Link
                title={social.title}
                href={social.link || "#"}
                key={social.title + social.id}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 light:bg-white/80 border border-white/10 light:border-slate-900/10 text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:border-indigo-500/40 transition-all hover:-translate-y-0.5"
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          <p className="text-[11px] sm:text-xs text-slate-500 light:text-slate-600 text-center sm:text-right font-mono">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


