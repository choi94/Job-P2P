export const addSession = (session) => {
    return {
        type : 'MEMBER_SESSION',
        ...session
    }
}