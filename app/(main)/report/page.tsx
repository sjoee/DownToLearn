import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";

const ReportCardPage = async () => {
  // Fetch the logged-in user's progress
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      {/* Sidebar - User Progress */}
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false} // Default to false since subscription status is not needed
        />
      </StickyWrapper>

      {/* Main Report Card Content */}
      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image src="/star.svg" alt="report" height={100} width={100} />
          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Child’s Report Card
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Track your child’s learning progress.
          </p>

          {/* Main Table with Weekly Data */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Week</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Lessons Completed</th>
                <th className="border p-2">Points Earned px</th>
                <th className="border p-2">Completion %</th>
              </tr>
            </thead>
            <tbody>
              {/* Week 1 */}
              <tr className="text-center">
                <td className="border p-2" rowSpan={6}>Week 1</td>
                <td className="border p-2">Social Skills</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Sign System</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Mathematics</td>
                <td className="border p-2">2</td>
                <td className="border p-2">200</td>
                <td className="border p-2">20</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">English</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Malay</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Spanish</td>
                <td className="border p-2">2</td>
                <td className="border p-2">200</td>
                <td className="border p-2">40</td>
              </tr>
              {/* Week 2 */}
              <tr className="text-center">
                <td className="border p-2" rowSpan={6}>Week 2</td>
                <td className="border p-2">Social Skills</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Sign System</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Mathematics</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">English</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Malay</td>
                <td className="border p-2">1</td>
                <td className="border p-2">100</td>
                <td className="border p-2">10</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Spanish</td>
                <td className="border p-2">1</td>
                <td className="border p-2">10</td>
                <td className="border p-2">0</td>
              </tr>
              {/* Week 3 */}
              <tr className="text-center">
                <td className="border p-2" rowSpan={6}>Week 3</td>
                <td className="border p-2">Social Skills</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Sign System</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Mathematics</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">English</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Malay</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Spanish</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              {/* Week 4 */}
              <tr className="text-center">
                <td className="border p-2" rowSpan={6}>Week 4</td>
                <td className="border p-2">Social Skills</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Sign System</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Mathematics</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">English</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Malay</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Spanish</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
            </tbody>
          </table>

          {/* Additional Table with 2 columns and 6 rows */}
          <table className="mt-6 w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Subject</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border p-2">Social Skills</td>
                <td className="border p-2">Beginner</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Sign System</td>
                <td className="border p-2">Beginner</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Mathematics</td>
                <td className="border p-2">Beginner</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">English</td>
                <td className="border p-2">Beginner</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Malay</td>
                <td className="border p-2">Beginner</td>
              </tr>
              <tr className="text-center">
                <td className="border p-2">Spanish</td>
                <td className="border p-2">Beginner</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ReportCardPage;
