"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { FaqCloseArrow, FaqOpenArrow } from "@/components/Icon/Icon";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  label: string;
  description: string;
  faqs: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    id: "applications",
    label: "Applications",
    description: "Getting into the Hard Hat Tour",
    faqs: [
      {
        question: "How do I sign up to playtest?",
        answer:
          "Apply through the official Le Zoo form and create a Zootbook account. You only have to apply once. If you aren’t selected for the current Hard Hat Tour, your application automatically rolls into the next wave — no extra steps required.",
      },
      {
        question: "Can I become a playtester if I’m not from the USA?",
        answer:
          "Yes. We recruit players globally and rely on localization symbols plus NPC voiceover to keep everyone aligned. English reading comprehension helps in a few missions, but it is not a blocker for most of the tour.",
      },
      {
        question: "Why are you calling the playtest a Hard Hat Tour?",
        answer:
          "Because the park is still under construction. The Hard Hat Tour lets you experience new lands while we are still pouring concrete. Expect temporary meshes, wild prototypes, and the occasional missing texture — that’s part of the fun.",
      },
      {
        question: "What do you look for in a playtester?",
        answer:
          "Fearless curiosity. If you fall through the ground or see NPCs doing the funky walk, let us know. We want testers who try the edge cases, report bugs with context, and hype up the community as new attractions unlock.",
      },
    ],
  },
  {
    id: "rewards",
    label: "Rewards",
    description: "Perks, drops, and recognition",
    faqs: [
      {
        question: "How do rewards get delivered?",
        answer:
          "Digital rewards land in your Zootbook locker and IRL items ship to the address you confirm when a tour ends. We’ll ping you in Discord so you never miss a drop.",
      },
      {
        question: "What counts toward leaderboard status?",
        answer:
          "Bug reports with repro steps, creative submissions, and time spent in spotlight missions. We score weekly so you can see how close you are to unlocking merch or travel perks.",
      },
      {
        question: "Do rewards expire?",
        answer:
          "Cosmetics stay forever. Early-access roles and booster badges last through the following tour so you can flex the progress you made.",
      },
    ],
  },
  {
    id: "game",
    label: "Game",
    description: "Gameplay, builds, and support",
    faqs: [
      {
        question: "Which platforms are supported?",
        answer:
          "We currently support PC and console builds. Mobile cloud streaming is in preview — you can opt in through Zootbook if your device meets the minimum specs.",
      },
      {
        question: "How often do new builds ship?",
        answer:
          "Expect a fresh build every other week. Patch notes drop in Discord first, then on Zootbook so you know which experiences changed before you queue.",
      },
      {
        question: "Where do I report issues?",
        answer:
          "Use the in-game reporter (press F8) for bugs with screenshots, or head to the #tour-support Discord channel if you’re blocked from launching. Our QA squad monitors both around the clock while a tour is live.",
      },
    ],
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  open ? <FaqOpenArrow width={48} height={48}/> : <FaqCloseArrow width={48} height={48}/>
);

export const TabbedFaq = () => {
  const [activeTab, setActiveTab] = useState<string>(faqCategories[0].id);

  // Initialize all FAQs as open for each category
  const initialAccordionState = useMemo(() => {
    const state: Record<string, number[]> = {};
    faqCategories.forEach((category) => {
      state[category.id] = category.faqs.map((_, index) => index);
    });
    return state;
  }, []);

  const [accordionState, setAccordionState] = useState<
    Record<string, number[]>
  >(initialAccordionState);

  const activeCategory = useMemo(
    () =>
      faqCategories.find((category) => category.id === activeTab) ??
      faqCategories[0],
    [activeTab]
  );

  const toggleAccordion = (index: number) => {
    setAccordionState((prev) => {
      const existing = new Set(prev[activeTab] ?? []);
      if (existing.has(index)) {
        existing.delete(index);
      } else {
        existing.add(index);
      }

      return {
        ...prev,
        [activeTab]: Array.from(existing).sort(),
      };
    });
  };

  return (
    <section className="relative bg-raisin-black-2 py-16 lg:py-28 overflow-hidden">
      <div className="container-xl mx-auto max-w-[1400px] px-6 relative z-10">
        {/* FAQ Heading - Shown above tabs on mobile/tablet, inside content area on desktop */}
        <div className="mb-8 lg:mb-0 lg:hidden">
          <div className="uppercase text-blueberry h2 text-stroke" style={{ textShadow: "4.57px 6.09px #eeebe2" }}>
            FAQ
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="lg:w-1/4">
            <div className="flex lg:gap-4 lg:bg-none overflow-x-auto rounded-[50px] lg:flex-col lg:overflow-visible lg:gap-5 lg:pb-0 lg:sticky lg:top-32">
              {faqCategories.map((category) => {
                const isActive = category.id === activeTab;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveTab(category.id)}
                    className={clsx(
                      "group relative lg:px-8 py-4 rounded-[50px] lg:min-w-0 text-center lg:text-left cursor-pointer flex-1",
                      isActive &&
                        "bg-blue-gray"
                    )}
                    aria-pressed={isActive}
                  >
                    <span className={clsx("text-medium font-semibold text-white", !isActive && "opacity-30")}>
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1">
            {/* FAQ Heading - Only shown on desktop */}
            <div className="mb-8 lg:mb-12 hidden lg:block">
              <div className="uppercase text-blueberry h2 text-stroke" style={{ textShadow: "4.57px 6.09px #eeebe2" }}>
                FAQ
              </div>
            </div>

            <ul className="space-y-5">
              {activeCategory.faqs.map((faq, index) => {
                const openIndexes = accordionState[activeCategory.id] ?? [];
                const isOpen = openIndexes.includes(index);
                const controlId = `${activeCategory.id}-accordion-${index}`;
                const panelId = `${controlId}-panel`;

                return (
                  <li
                    key={controlId}
                    className="pb-6 pt-4 first:pt-0 last:pb-0"
                  >
                    <button
                      id={controlId}
                      aria-controls={panelId}
                      aria-expanded={isOpen}
                      onClick={() => toggleAccordion(index)}
                      className="flex w-full items-center justify-between gap-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blueberry/60 cursor-pointer"
                      type="button"
                    >
                      <div>
                        <p className="text-medium font-semibold text-white">
                          {faq.question}
                        </p>
                      </div>
                      <ChevronIcon open={isOpen} />
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={controlId}
                      className={clsx(
                        "grid overflow-hidden text-ivory/85 transition-all duration-300 ease-in-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pt-4"
                          : "grid-rows-[0fr] opacity-0 pt-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-small leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
