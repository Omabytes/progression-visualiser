export const updateScore = (skillName, score, role, route) => ({
    type: 'UPDATE_SCORE',
    skillName,
    score,
    role,
    route
})