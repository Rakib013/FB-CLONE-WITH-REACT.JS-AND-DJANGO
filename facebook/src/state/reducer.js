
export const initialstate = {
    profile: null,
    posts: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "PROFILE":
            return {
                ...state,
                profile: action.profile,
            };
        case "POSTS":
            return {
                ...state,
                posts: action.posts,
                };
        default:
            return state;
    }
};

export default reducer;