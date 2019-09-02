const SOPCAST_URL = 'http://www.sopcast.com/channel/getch.html?';

function sopcast() {
    let groupId = $('#groupId').val();
    let channelId = $('#channelId').val();
    let sopcastElement = document.getElementById('sopchannel');
    sopcastElement.setAttribute("src", SOPCAST_URL.concat("groupId=").concat(groupId).concat("&channelId=").concat(channelId));
    sopcastElement.removeAttribute("hidden");
}
