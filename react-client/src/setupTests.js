class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
};

global.localStorage = new LocalStorageMock;

global.validTwitterTweet =
    {
        "created_at": "Thu Jul 19 13:15:19 +0000 2018",
        "id": 1019933706805530600,
        "id_str": "1019933706805530624",
        "text": "Do you know someone who is a digital hero? Now through July 31st, 2018, we are accepting nominations for the AppDir… https://t.co/vxZqYEDkEa",
        "truncated": true,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
                {
                    "url": "https://t.co/vxZqYEDkEa",
                    "expanded_url": "https://twitter.com/i/web/status/1019933706805530624",
                    "display_url": "twitter.com/i/web/status/1…",
                    "indices": [
                        117,
                        140
                    ]
                }
            ]
        },
        "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 154310289,
            "id_str": "154310289",
            "name": "AppDirect",
            "screen_name": "AppDirect",
            "location": "San Francisco, California",
            "description": "AppDirect provides the only end-to-end cloud commerce platform for succeeding in the #digitaleconomy. We're hiring! https://t.co/0zB68lAqXr",
            "url": "http://t.co/MRppRP4Ckl",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/MRppRP4Ckl",
                            "expanded_url": "http://appdirect.com",
                            "display_url": "appdirect.com",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": [
                        {
                            "url": "https://t.co/0zB68lAqXr",
                            "expanded_url": "http://careers.appdirect.com",
                            "display_url": "careers.appdirect.com",
                            "indices": [
                                116,
                                139
                            ]
                        }
                    ]
                }
            },
            "protected": false,
            "followers_count": 2222,
            "friends_count": 495,
            "listed_count": 153,
            "created_at": "Thu Jun 10 22:46:57 +0000 2010",
            "favourites_count": 666,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": false,
            "statuses_count": 4031,
            "lang": "en",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "2D2A26",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/890252563190226944/lP9wOBFy_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/890252563190226944/lP9wOBFy_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/154310289/1504623002",
            "profile_link_color": "009ABF",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "E7F6FF",
            "profile_text_color": "333333",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": null,
            "follow_request_sent": null,
            "notifications": null,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    };