/**
   *
   * @param data
   * @param pageID string类型
   * @returns {XML}
   */
  renderPage(id, pageID) {
    return (
      <PicturePage key={id} id={parseInt(id)} hideNav={true}/>
    );
  }

  onLeftPressed() {

  }

  onRightPressed() {
    getNavigator().push({
      name: 'MyGithubPage'
    });
  }

  renderBody() {
    return (
      <View style={styles.container}>
        <ReadingTopViewPager/>
        <ReadingBottomViewPager/>
      </View>
    );
  }