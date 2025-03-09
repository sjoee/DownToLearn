import { cache } from "react";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import db from "./drizzle";
import { userProgress, lessons, challengeProgress } from "./schema";

import { getUserProgress } from "./queries"; // Import the getUserProgress function

export const getCompletedLessonsCount = cache(async (): Promise<number> => {


  const { userId } = auth();
  const userProgressData: UserProgress | null = await getUserProgress();


  if (!userId || !userProgressData?.activeCourseId) return 0;

  const completedLessons: Lesson[] = await db.query.lessons.findMany({

    where: eq(lessons.unitId, userProgressData.activeCourseId),
    with: {
      challenges: {
        with: {
          challengeProgress: {
            where: eq(challengeProgress.userId, userId),
          },
        },
      },
    },
  });

  const count: number = completedLessons.filter((lesson: Lesson) => 

    lesson.challenges.every((challenge: Challenge) => 

      challenge.challengeProgress && 

      challenge.challengeProgress.length > 0 && 
      challenge.challengeProgress.every((progress: ChallengeProgress) => progress.completed)

    )
  ).length;

  return count;
});
