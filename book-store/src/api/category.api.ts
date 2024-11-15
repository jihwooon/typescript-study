export const fetchCategory = async () => {
    // const response = await httpClient.get<Category[]>("/category");

    return [
        {
            id: 0,
            name: "동화"
        },
        {
            id: 1,
            name: "소셜"
        },
        {
            id: 2,
            name: "사회"
        }
    ];
}
