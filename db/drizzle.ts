import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, sql, count, sum } from "drizzle-orm";
import { auth } from "@clerk/nextjs";
import * as schema from "./schema";

const sqlClient = neon(process.env.DATABASE_URL);
const db = drizzle(sqlClient, { schema });

export default db;

// Fetch the progress of the current user (child)
export const getUserProgress = async () => {
    const { userId } = auth();
    if (!userId) return null;

    return db.select({
        courseName: schema.courses.title,
        lessonsCompleted: sql`COUNT(DISTINCT ${schema.lessons.id})`.as("lessonsCompleted"),
        totalPoints: sql`SUM(${schema.challengeProgress.completed})`.as("totalPoints"),
        completionPercentage: sql`(
            COUNT(DISTINCT ${schema.lessons.id}) * 100.0 / (
                SELECT COUNT(*) FROM ${schema.lessons} WHERE ${schema.lessons.unitId} = ${schema.units.id}
            )
        )`.as("completionPercentage")
    })
    .from(schema.challengeProgress)
    .innerJoin(schema.challenges, eq(schema.challengeProgress.challengeId, schema.challenges.id))
    .innerJoin(schema.lessons, eq(schema.challenges.lessonId, schema.lessons.id))
    .innerJoin(schema.units, eq(schema.lessons.unitId, schema.units.id))
    .innerJoin(schema.courses, eq(schema.units.courseId, schema.courses.id))
    .where(eq(schema.challengeProgress.userId, userId))
    .groupBy(schema.courses.title);
};