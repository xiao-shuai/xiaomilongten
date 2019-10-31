

export default function mediaReducer(state = initState, action) {
  switch (action.type) {
    case ACTIONS.STOP_PLAY_MEDIA:
      return state.isPlayingMedia === false ? state : Object.assign({}, state, {isPlayingMedia: false});
    case ACTIONS.TO_PREVIOUS_ONE:
      if (state.mediaList.length < 1) {
        return state;
      }
      return Object.assign({}, state, {
        currentIndex: state.currentIndex <= 0 ? state.mediaList.length - 1 : state.currentIndex - 1,//不断循环
        isPlayingMedia: true,
        isLoadingMedia: true
      });
    case ACTIONS.TO_NEXT_ONE:
      if (state.mediaList.length < 1) {
        return state;
      }
      return Object.assign({}, state, {
        currentIndex: state.currentIndex >= state.mediaList.length - 1 ? 0 : state.currentIndex + 1,//不断循环
        isPlayingMedia: true,
        isLoadingMedia: true
      });
    case ACTIONS.START_PLAY_MEDIA:
      let mediaInfo = action.info;
      if (!mediaInfo) {//是否有需要添加的歌曲
        return Object.assign({}, state, {
          isPlayingMedia: true,
          isLoadingMedia: true
        });
      }
      let mediaList = state.mediaList;
      let mediaInfoIndex = -1;
      //查询并找出位置index, 列表中没有的时候才添加进去
      for (let i = 0; i < mediaList.length; i++) {
        if (mediaList[i].type === mediaInfo.type && mediaList[i].id === mediaInfo.id) {
          mediaInfoIndex = i;
          break;
        }
      }
      if (mediaInfoIndex === -1) {
        mediaList.push(mediaInfo);//添加到尾部
        mediaInfoIndex = mediaList.length - 1;
      }
      return Object.assign({}, state, {
        mediaList,
        currentIndex: mediaInfoIndex,
        isPlayingMedia: true,
        isLoadingMedia: true
      });
    case ACTIONS.CHANGE_MUSIC_CONTROL_MODAL_VISIBILITY:
      return Object.assign({} , state, {
        isMusicControlModalShow: action.visible
      });
    case ACTIONS.LOADING_MEDIA_SUCCESS:
      return Object.assign({}, state, {
        isLoadingMedia: false//加载成功
      });
    default:
      return state;
  }
}
