export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    discover_weekly: null,
    //remove token after development
    // token: "BQADD6-wg_xKsDgNWJSPy-NEaiBDGu_PmcwDWSvBQVSedpvRESmTM4AsH4BbGcVuHPQNXRIR4D-MpLWA4abihWJvCLMzvR_-sdZkKOuHm-IldcJWFlAKE-4tIMBjki1kkG7ihE3QYlbPtY5hupyKe8I72fsVLZj5rnjMLlWq14S_XxXdQnnI",
    token: null,
    track: null,
    top_artists: null,
};

const reducer = (state, action) => {
    console.log(action);
    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}

export default reducer;