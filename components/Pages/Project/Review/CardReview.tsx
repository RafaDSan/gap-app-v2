"use client";

import { BadgeIcon, BadgeName } from "@/components/Icons/Badge";
import { Button } from "@/components/Utilities/Button";
import React, { useState } from "react";
import { DynamicStarsReview } from "./DynamicStarsReview";

export enum CardReviewMode {
  READ = "READ",
  WRITE = "WRITE",
}
interface CardReviewDataProps {
  id: number;
  mode: CardReviewMode;
}

export interface BadgeListProps {
  name: BadgeName;
  description: string;
  score: number;
}

export const CardReview = (data: CardReviewDataProps) => {
  const initialBadgeList: BadgeListProps[][] = [
    [
      {
        name: BadgeName.CLEAR_GOALS,
        description:
          "Clear Goals: Recognizes programs with well-defined goals. Every grant program has a goal, such as governance, impact, or education. Are these goals well explained so you can build a project aligned with them?",
        score: 5,
      },
      {
        name: BadgeName.SMOOTH_APPLICATION,
        description:
          "Smooth Application: Awards a seamless application process. Are they using a tech that facilitates the application process? Did they get back to you after the application, or was it just a poor form?",
        score: 4,
      },
      {
        name: BadgeName.FAIR_ROUNDS,
        description:
          "Fair rounds: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem urna, sodales vel placerat sed, elementum a orci. Duis sit amet neque rutrum, suscipit enim tempus, dignissim erat. Etiam interdum dignissim pretium.",
        score: 4,
      },
      {
        name: BadgeName.EASY_TEACH,
        description:
          "Easy Tech: Awards programs with easily implementable technology. How hard is the tech? Are the docs easy to use or find?",
        score: 4,
      },
      {
        name: BadgeName.SUPPORTIVE_TEAM,
        description:
          "Supportive Team: Highlights programs with highly supportive teams. Whether technical or not, if you receive very helpful support after applying for a grant, issue this badge. – Post-Grant Support: Highlights strong post-grant support. How much do they help you after the application? Do they suggest related projects, possible connections, or interested people?",
        score: 4,
      },
      {
        name: BadgeName.GREAT_REVIEWERS,
        description:
          "Great Reviewers: Recognizes top-quality grant reviewers. They are impartial, select well-written projects, set clear goals, and explain the application process well.",
        score: 4,
      },
      {
        name: BadgeName.FAST_DISBURSEMENT,
        description:
          "Fast Disbursement: Commends quick fund disbursement processes. Did they complete the payment as soon as you completed the milestones? If yes, issue this badge.",
        score: 4,
      },
    ],
    [
      {
        name: BadgeName.CLEAR_GOALS,
        description:
          "Clear Goals: Recognizes programs with well-defined goals. Every grant program has a goal, such as governance, impact, or education. Are these goals well explained so you can build a project aligned with them?",
        score: 4,
      },
      {
        name: BadgeName.SMOOTH_APPLICATION,
        description:
          "Smooth Application: Awards a seamless application process. Are they using a tech that facilitates the application process? Did they get back to you after the application, or was it just a poor form?",
        score: 4,
      },
      {
        name: BadgeName.FAIR_ROUNDS,
        description:
          "Fair rounds: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem urna, sodales vel placerat sed, elementum a orci. Duis sit amet neque rutrum, suscipit enim tempus, dignissim erat. Etiam interdum dignissim pretium.",
        score: 4,
      },
      {
        name: BadgeName.EASY_TEACH,
        description:
          "Easy Tech: Awards programs with easily implementable technology. How hard is the tech? Are the docs easy to use or find?",
        score: 4,
      },
      {
        name: BadgeName.SUPPORTIVE_TEAM,
        description:
          "Supportive Team: Highlights programs with highly supportive teams. Whether technical or not, if you receive very helpful support after applying for a grant, issue this badge. – Post-Grant Support: Highlights strong post-grant support. How much do they help you after the application? Do they suggest related projects, possible connections, or interested people?",
        score: 4,
      },
      {
        name: BadgeName.GREAT_REVIEWERS,
        description:
          "Great Reviewers: Recognizes top-quality grant reviewers. They are impartial, select well-written projects, set clear goals, and explain the application process well.",
        score: 4,
      },
      {
        name: BadgeName.FAST_DISBURSEMENT,
        description:
          "Fast Disbursement: Commends quick fund disbursement processes. Did they complete the payment as soon as you completed the milestones? If yes, issue this badge.",
        score: 4,
      },
    ],
    [
      {
        name: BadgeName.CLEAR_GOALS,
        description:
          "Clear Goals: Recognizes programs with well-defined goals. Every grant program has a goal, such as governance, impact, or education. Are these goals well explained so you can build a project aligned with them?",
        score: 4,
      },
      {
        name: BadgeName.SMOOTH_APPLICATION,
        description:
          "Smooth Application: Awards a seamless application process. Are they using a tech that facilitates the application process? Did they get back to you after the application, or was it just a poor form?",
        score: 4,
      },
      {
        name: BadgeName.FAIR_ROUNDS,
        description:
          "Fair rounds: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem urna, sodales vel placerat sed, elementum a orci. Duis sit amet neque rutrum, suscipit enim tempus, dignissim erat. Etiam interdum dignissim pretium.",
        score: 4,
      },
      {
        name: BadgeName.EASY_TEACH,
        description:
          "Easy Tech: Awards programs with easily implementable technology. How hard is the tech? Are the docs easy to use or find?",
        score: 4,
      },
      {
        name: BadgeName.SUPPORTIVE_TEAM,
        description:
          "Supportive Team: Highlights programs with highly supportive teams. Whether technical or not, if you receive very helpful support after applying for a grant, issue this badge. – Post-Grant Support: Highlights strong post-grant support. How much do they help you after the application? Do they suggest related projects, possible connections, or interested people?",
        score: 4,
      },
      {
        name: BadgeName.GREAT_REVIEWERS,
        description:
          "Great Reviewers: Recognizes top-quality grant reviewers. They are impartial, select well-written projects, set clear goals, and explain the application process well.",
        score: 4,
      },
      {
        name: BadgeName.FAST_DISBURSEMENT,
        description:
          "Fast Disbursement: Commends quick fund disbursement processes. Did they complete the payment as soon as you completed the milestones? If yes, issue this badge.",
        score: 4,
      },
    ],
    [
      {
        name: BadgeName.CLEAR_GOALS,
        description:
          "Clear Goals: Recognizes programs with well-defined goals. Every grant program has a goal, such as governance, impact, or education. Are these goals well explained so you can build a project aligned with them?",
        score: 4,
      },
      {
        name: BadgeName.SMOOTH_APPLICATION,
        description:
          "Smooth Application: Awards a seamless application process. Are they using a tech that facilitates the application process? Did they get back to you after the application, or was it just a poor form?",
        score: 4,
      },
      {
        name: BadgeName.FAIR_ROUNDS,
        description:
          "Fair rounds: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem urna, sodales vel placerat sed, elementum a orci. Duis sit amet neque rutrum, suscipit enim tempus, dignissim erat. Etiam interdum dignissim pretium.",
        score: 4,
      },
      {
        name: BadgeName.EASY_TEACH,
        description:
          "Easy Tech: Awards programs with easily implementable technology. How hard is the tech? Are the docs easy to use or find?",
        score: 4,
      },
      {
        name: BadgeName.SUPPORTIVE_TEAM,
        description:
          "Supportive Team: Highlights programs with highly supportive teams. Whether technical or not, if you receive very helpful support after applying for a grant, issue this badge. – Post-Grant Support: Highlights strong post-grant support. How much do they help you after the application? Do they suggest related projects, possible connections, or interested people?",
        score: 4,
      },
      {
        name: BadgeName.GREAT_REVIEWERS,
        description:
          "Great Reviewers: Recognizes top-quality grant reviewers. They are impartial, select well-written projects, set clear goals, and explain the application process well.",
        score: 4,
      },
      {
        name: BadgeName.FAST_DISBURSEMENT,
        description:
          "Fast Disbursement: Commends quick fund disbursement processes. Did they complete the payment as soon as you completed the milestones? If yes, issue this badge.",
        score: 4,
      },
    ],
  ];

  const [badgeList, setBadgeList] =
    useState<BadgeListProps[][]>(initialBadgeList);

  const selectedBadgeList = badgeList[data.id] || [];

  const handleSetRating = (index: number, rating: number) => {
    const updatedBadgeList = [...badgeList];
    const updatedBadges = [...updatedBadgeList[data.id]];

    if (updatedBadges[index]) {
      updatedBadges[index] = { ...updatedBadges[index], score: rating };
    }

    updatedBadgeList[data.id] = updatedBadges;
    setBadgeList(updatedBadgeList);
  };

  return (
    <div className="flex w-full flex-col justify-center gap-4">
      <div className="w-full flex flex-col px-2 gap-2">
        {selectedBadgeList.map((badge: BadgeListProps, index: number) => (
          <div key={index} className="flex flex-col w-full px-14 mt-4">
            <div className="flex flex-row w-full items-center gap-3">
              <div>
                <BadgeIcon badgeName={badge.name} className="w-20 h-20" />
              </div>
              <div className="text-sm">{badge.description}</div>
              <div>
                {data.mode === CardReviewMode.WRITE ? (
                  <DynamicStarsReview
                    totalStars={5}
                    rating={badge.score}
                    setRating={(rating) => handleSetRating(index, rating)}
                    mode={CardReviewMode.WRITE}
                  />
                ) : (
                  <DynamicStarsReview
                    totalStars={5}
                    rating={badge.score}
                    setRating={() => {}}
                    mode={CardReviewMode.READ}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end w-full">
        <Button>Submit Review</Button>
      </div>
    </div>
  );
};
