var presence = new Presence({
    clientId: "676120564095516691",
    mediaKeys: false
});

presence.on("UpdateData", () => {
    let presenceData = {
        largeImageKey: "letlogo"
    };

    const page = document.location.pathname

    const browsingStamp = Math.floor(Date.now() / 1000);
    if (page.includes("/u/")) {
        presenceData.details = "Bir satıcıyı inceliyor:";
             presenceData.state = document.querySelector("#app > main > div.sc-eilVRo.gtyvWq > div > div > div.sc-fjdhpX.dluhKJ.sc-jWBwVP.bWlJAv.ProfileInfostyles__ContainerBox-is6738-0.lbvUrE > div.sc-fjdhpX.dluhKJ.sc-jWBwVP.iNfYOe > div.sc-fjdhpX.dluhKJ.sc-jWBwVP.jxfcqR.ProfileInfostyles__UserDataWrapper-is6738-1.huDddt > div.sc-jzJRlG.eAUkVX > h1").textContent
        presenceData.startTimestamp = browsingStamp;
    } else if (page.includes("/i/")) {
        presenceData.details = "Bir ürün görüntülüyor:";
     presenceData.state = document.querySelector("#app > main > div.Productstyles__ProductPageContent-sc-1qzhqka-51.PBTpT > div.Productstyles__TopWrapper-sc-1qzhqka-35.hpKbWS > div.sc-hZSUBg.bGlrgr.Productstyles__TopContainer-sc-1qzhqka-0.caJbAe > div.sc-chPdSV.jYjaCP > div.sc-kAzzGY.Productstyles__ProductInfoCol-sc-1qzhqka-42.iqESML > div.Productstyles__ProductInfo-sc-1qzhqka-36.bgGZVJ > div.sc-jzJRlG.hAQDSd > h1").textContent
        presenceData.startTimestamp = browsingStamp;
    } else if (page.includes("/chat")) {
        presenceData.details = "Bir kullanıcı ile mesajlaşıyor.";
        presenceData.startTimestamp = browsingStamp;
    } else if (page.includes("/notifications")) {
        presenceData.details = "Bildirimlerine göz atıyor.";
        presenceData.startTimestamp = browsingStamp;
    } else if (page.includes("/terms-and-conditions")) {
        presenceData.details = "Hizmet koşullarını okuyor.";
        presenceData.startTimestamp = browsingStamp;
    } else if (page.includes("/en-us")) {
        presenceData.details = "";
        presenceData.startTimestamp = browsingStamp;
    }
     
    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else {
        presence.setActivity(presenceData);
    }

});
