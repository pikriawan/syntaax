"use server";

export async function createProject(prevState, formData) {
    const name = formData.get("name");
    return { name, success: name.length > 4 };
}
