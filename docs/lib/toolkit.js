const toolkit = {
    // Decode Base64
    // Ref: https://nelluil.postach.io/post/btoa-atob-zhi-yuan-zhong-wen-de-fang-fa
    // Ref: https://cnodejs.org/topic/4fd6b7ba839e1e581407aac8
    decodeBase64: (text) => unescape(decodeURIComponent(escape(window.atob(text.replace(/\-/g, "+").replace(/\_/g, "/"))))),
    getBsId: (imgUrl) => imgUrl.replace(/[^a-zA-Z0-9]/g, "").slice(- 10).toLowerCase(),
    lngLatToIntel: (lngLat) => value.string.path.intel + "?ll=" + lngLat.lat + "," + lngLat.lng + "&z=18",
};