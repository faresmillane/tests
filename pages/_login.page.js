module.exports = {
    url: "/oidc/logout",
    locators: {
        _je_me_connecte:{
            web:{
                selector: "#root > div > div > div:nth-child(2) > div > div > div.css-1dbjc4n.r-13awgt0 > div > div.css-1dbjc4n.r-1p0dtai.r-6koalj.r-1d2f490.r-12vffkv.r-u8s1d.r-zchlnj.r-ipm5af > div.css-1dbjc4n.r-13awgt0.r-12vffkv > div > div > div > div.css-1dbjc4n.r-13awgt0 > div > div > div > div > div.css-1dbjc4n.r-1kihuf0.r-14lw9ot.r-eqz5dr > div > div.css-1dbjc4n.r-13awgt0.r-eqz5dr > div:nth-child(1) > div.css-1dbjc4n.r-1awozwy.r-13awgt0.r-1777fci > div:nth-child(2) > div.css-1dbjc4n.r-1awozwy.r-1loqt21.r-eqz5dr.r-1otgn73.r-1i6wzkk.r-lrvibr > div.css-1dbjc4n.r-1kihuf0 > div > div > img"
            },
            mob:{
                id: "test android",
                xpath:{
                    android: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup",
                    ios: ""
                }
            }
        },
        _accept_cookies:{
            mob:{
                id: "",
                xpath:{
                    android: "",
                    ios: ""
                }
            },
            web: {
                xpath: "//*[@id='onetrust-pc-sdk']/div[3]/div[1]/button[2]",
                class: "save-preference-btn-handler onetrust-close-btn-handler"
            },
        },
        _email:{
            web:{
                id: "test",
                selector: "test 323223",
                class: "css-11aywtz r-6taxm2",
            },
            mob:{
                id: "test",
                xpath:{
                    ios: "",
                    android: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText[1]"
                }
            }
        },
        _password:{
            web:{
                xpath: "//*[@id='root']/div/div/div/div/div/div[1]/div/div[2]/div[2]/div/div/div/div[1]/div/div/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div[3]/input"
            },
            mob:{
                xpath:{
                    ios: "",
                    android: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText[2]"
                }
            }
        },
        _se_connecter:{
            web:{
                xpath: "//*[@id='root']/div/div/div/div/div/div[1]/div/div[2]/div[2]/div/div/div/div[1]/div/div/div/div/div[2]/div/div[2]/div[1]/div/div[3]",
                class: "css-9pa8cd"
            },
            mob:{
                xpath:{
                    ios: "",
                    android: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]"
                }
            }
        },
        _refuser_activation_biometrique:{
            mob:{
                xpath:{
                    android: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]"
                }
            }
        }
    }
}