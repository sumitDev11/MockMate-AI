import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mock_interview", {
    id: serial("id").primaryKey(),
    jsonMockResp: text("json_mock_resp").notNull(),
    jobPosition: varchar("job_position", { length: 255 }).notNull(),
    jobDesc: varchar("job_desc", { length: 255 }).notNull(),
    jobExperience: varchar("job_experience", { length: 255 }).notNull(),
    createdBy: varchar("created_by", { length: 255 }).notNull(),
    createdAt: varchar("created_At", { length: 255 }).notNull(),
    mockId: varchar("mock_id", { length: 255 }).notNull(),
});
export const user_answer = pgTable('user_answer', {
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId').notNull(),
    question: varchar('question').notNull(),
    correctAns: text('correctAns'),
    userAns: text('userAns'),
    feedback: text('feedback'),
    rating: varchar('rating'),
    userEmail: varchar('userEmail'),
    createdAt: varchar('createdAt')
});
