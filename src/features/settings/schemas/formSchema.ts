import z from "zod";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required.",
    }),
    password: z
        .string()
        .min(4, {
            message: "Password must be at least 4 characters.",
        })
        .max(12, {
            message: "Password must be at most 12 characters.",
        }),
});

export default formSchema;
