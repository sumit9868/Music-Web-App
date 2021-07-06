export const initialState ={
    user: null,
    playlists: [],
    playing:false,
    //remove token after development
    token:"BQADD6-wg_xKsDgNWJSPy-NEaiBDGu_PmcwDWSvBQVSedpvRESmTM4AsH4BbGcVuHPQNXRIR4D-MpLWA4abihWJvCLMzvR_-sdZkKOuHm-IldcJWFlAKE-4tIMBjki1kkG7ihE3QYlbPtY5hupyKe8I72fsVLZj5rnjMLlWq14S_XxXdQnnI",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                user: action.token
            }
        default:
         return state;    
    }
}

export default reducer;