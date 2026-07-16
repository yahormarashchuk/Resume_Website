"use client";

import { useState, type FormEvent } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { ChevronDownIcon } from "@/components/icons";
import { budgetOptions } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="flex w-full flex-col items-start gap-[50px] pt-[120px]">
      <SectionTitle solid="LET&apos;S WORK" ghost="TOGETHER" />
      <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 tab:flex-row">
          <div className="flex-1">
            <label className="flex w-full flex-col gap-2.5">
              <span className="text-xs font-medium text-[#888888]">Name</span>
              <div className="flex h-10 w-full items-center rounded-lg bg-ghost px-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent text-sm leading-[1.2] text-white outline-none placeholder:text-[#999999]"
                />
              </div>
            </label>
          </div>
          <div className="flex-1">
            <label className="flex w-full flex-col gap-2.5">
              <span className="text-xs font-medium text-[#888888]">Email</span>
              <div className="flex h-10 w-full items-center rounded-lg bg-ghost px-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent text-sm leading-[1.2] text-white outline-none placeholder:text-[#999999]"
                />
              </div>
            </label>
          </div>
        </div>
        <label className="flex w-full flex-col gap-2.5">
          <span className="text-xs font-medium text-[#888888]">Budget</span>
          <div className="relative h-10 rounded-lg bg-ghost">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={cn(
                "h-full w-full appearance-none bg-transparent px-3 text-sm outline-none",
                budget === "" ? "text-[#999999]" : "text-white",
              )}
            >
              {budgetOptions.map((option) => (
                <option key={option.label} value={option.value} className="bg-page text-white">
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#999999]" />
          </div>
        </label>
        <label className="flex w-full flex-col gap-2.5">
          <span className="text-xs text-warmgray">Message</span>
          <textarea
            placeholder="Message"
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
