export const loadData = () => {
    const quizes = fetch(`https://openapi.programming-hero.com/api/quiz`);

    return quizes
}