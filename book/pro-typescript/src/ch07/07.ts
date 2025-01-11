interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

const createCourseGoal = (
    title: string,
    description: string,
    completeUntil: Date
): CourseGoal => {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;

    return courseGoal as CourseGoal;
}

const name: Readonly<string[]> = ['Max', 'Sports']
