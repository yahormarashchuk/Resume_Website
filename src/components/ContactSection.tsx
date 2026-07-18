"use client";

import { useState, type FormEvent } from "react";
import { SectionTitle } from "@/components/SectionTitle";

const CONTACT_EMAIL = "yahormarashchuk@gmail.com";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${name || "your website"}`;
    const body = `${message}\n\n— ${name}${email ? ` <${email}>` : ""}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="flex w-full flex-col items-start gap-[50px] pt-[120px]">
      <SectionTitle solid="LET&apos;S WORK" ghost="TOGETHER" />
      <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 tab:flex-row">
          <div className="flex-1">
            <label className="flex w-full flex-col gap-2.5">
              <span className="text-xs font-medium text-[#6b7590]">Name</span>
              <div className="flex h-10 w-full items-center rounded-lg bg-ghost px-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent text-sm leading-[1.2] text-white outline-none placeholder:text-[#999999]"
                />
              </div>
            </label>
          </div>
          <div className="flex-1">
            <label className="flex w-full flex-col gap-2.5">
              <span className="text-xs font-medium text-[#6b7590]">Email</span>
              <div className="flex h-10 w-full items-center rounded-lg bg-ghost px-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm leading-[1.2] text-white outline-none placeholder:text-[#999999]"
                />
              </div>
            </label>
          </div>
        </div>
        <label className="flex w-full flex-col gap-2.5">
          <span className="text-xs text-warmgray">Message</span>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-[100px] w-full resize-none rounded-lg bg-ghost p-3 text-sm text-white outline-none placeholder:text-[#999999]"
          />
        </label>
        <button
          type="submit"
          className="flex h-10 w-full items-center justify-center rounded-lg bg-orange text-sm font-medium text-white transition hover:brightness-110"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
