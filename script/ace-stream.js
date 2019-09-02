function acestream() {
    let contentId = $('#contentId').val();

    let player = null;
    AceStream.createPlayer("#ace-stream-player", {
        onLoad: function (playerObj) {
            player = playerObj;
            player.loadContentId(contentId);
        },
        onError: function (err) {
            console.log("init: error: " + err);
        }
    })
}
