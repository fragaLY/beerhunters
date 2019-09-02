function capture() {
    const URL_BT5 = "https://www.tvr.by/televidenie/belarus-5/";
    const URL_BT5_INTERNET = "https://www.tvr.by/televidenie/belarus-5-internet/";

    axios.get(URL_BT5).then(data => console.log(data)).catch(err => console.log(err));
    axios.get(URL_BT5_INTERNET).then(data => console.log(data)).catch(err => console.log(err))
}