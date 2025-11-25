export default function getCurrentDay() {
    const date = new Date();
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return { dayOfWeek, day, month, year };
}
