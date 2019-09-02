function capture() {
    const URL_BT5 = "https://cors-anywhere.herokuapp.com/http://www.tvr.by/televidenie/belarus-5/";
    const URL_BT5_INTERNET = "https://cors-anywhere.herokuapp.com/http://www.tvr.by/televidenie/belarus-5-internet/";

    axios.get(URL_BT5).then(data => console.log(data)).catch(err => console.log(err));
    axios.get(URL_BT5).then((response) => {
        if (response.status === 200) {
            const htmlTxt = response.data;
            const el = document.createElement( 'html' );
            el.innerHTML = htmlTxt;

            let elementsByTagName = el.getElementsByClassName( 'uppod-control_start' );
            console.log(elementsByTagName)
        }
    }).catch(err => console.log(err));
}