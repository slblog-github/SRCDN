/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Hexo/public/2020/posts/143f7edb/index.html","56461d3081763fa1d93a8dc57a85647b"],["D:/Hexo/public/2020/posts/2c805e6b/index.html","aa04770175dace0ae4a57b27661f3aeb"],["D:/Hexo/public/2020/posts/37890470/index.html","c73280354ede1acba764ddbd86d12ddb"],["D:/Hexo/public/2020/posts/62a00332/index.html","2c96141bd9d82794b169ab610f3baa37"],["D:/Hexo/public/2020/posts/652ef4b5/index.html","8fedda46a76ab9bf8d98f16abf3fe4e2"],["D:/Hexo/public/2020/posts/7a1e39fd/index.html","984a027aa88d844c2dd346de49183c09"],["D:/Hexo/public/2020/posts/7d8b55fe/index.html","7ccc9d53da2dfb11503cd7a7b8f26be9"],["D:/Hexo/public/2020/posts/8f68d635/index.html","d9bf6f08cbf092d7a8a1058e23c01222"],["D:/Hexo/public/2020/posts/91fe0fc4/index.html","1fc85b9220b815d4f1151afb635e22f1"],["D:/Hexo/public/2020/posts/d18e7002/index.html","e2b7f8a8f6b3007b48eeaece52f998cc"],["D:/Hexo/public/2020/posts/d6df3a18/index.html","2a9ce8923de5b1ff98ded90dc7eeae3f"],["D:/Hexo/public/2020/posts/dcfdf76e/index.html","dea5bbb9541e4d404f377425e41b3d79"],["D:/Hexo/public/2020/posts/e8563c5f/index.html","36420c440418fb525f9cf12b8e8004b1"],["D:/Hexo/public/404.html","69a1e2d4c5abf4ba9b2b9e81b193ca2a"],["D:/Hexo/public/Browsing info.js","d165103d6f023ca720a8c9b8b4c8f392"],["D:/Hexo/public/FCDN.svg","d4d2105e3d126ce35c330236de78f19f"],["D:/Hexo/public/Hosting.svg","354b1f81ae6d5bbd85ec6f9dd68c63bd"],["D:/Hexo/public/Jump.html","158a98144efb0c090c5eaaf3f4c68f48"],["D:/Hexo/public/WT.svg","71c67397c0aabf528ddf268d07a60bbe"],["D:/Hexo/public/about/index.html","41dd233f36dbfa0ec047ded678b192f1"],["D:/Hexo/public/ac/gg.html","3d3c145cb1be7b03a632ca635d83a9dd"],["D:/Hexo/public/archives/2020/05/index.html","0d2ced0600ff553811e7af1954aabfc4"],["D:/Hexo/public/archives/2020/06/index.html","68be00eb5c248fe1e22bd7920b7f2fd2"],["D:/Hexo/public/archives/2020/07/index.html","7c32da8e79f7702fdf1f82afe8488b4f"],["D:/Hexo/public/archives/2020/08/index.html","21b1af70a83fc56051099c1eb1aec077"],["D:/Hexo/public/archives/2020/index.html","98a8c9930f01eb964b34dcc5fb145878"],["D:/Hexo/public/archives/2020/page/2/index.html","e85afcb5ad46729e8eeb3329830076d5"],["D:/Hexo/public/archives/index.html","e0253f6da07ad0a1182f60dc80666e87"],["D:/Hexo/public/archives/page/2/index.html","094073faf15dcf5c927c834679f5a29a"],["D:/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Hexo/public/caofangkuai.gif","8dce0031c084fad3ecf9d35a7de194b0"],["D:/Hexo/public/categories/Pjax系列/index.html","7c047c79f30c83ab6c4d1c32d72ace6d"],["D:/Hexo/public/categories/Pjax系列/播放器/Javascript/index.html","7cca54104d7147f6a58418233c57fd2a"],["D:/Hexo/public/categories/Pjax系列/播放器/index.html","b389b5721e88bfcadbae24da2ed4024f"],["D:/Hexo/public/categories/index.html","12402b902fe544142d772906166f8131"],["D:/Hexo/public/categories/魔改/index.html","eee70123966863af089520424d73ce8b"],["D:/Hexo/public/categories/魔改/评论/index.html","3c1d5bdf02fdce553c287dc69ad9c2d3"],["D:/Hexo/public/cdn-nig/my/logo.png","9bcb2f3f88e6dc7da309f2e7aa4307b0"],["D:/Hexo/public/cdn.svg","4a983c9e7fb656d6aaee68621d085ae2"],["D:/Hexo/public/css/background-bing.css","967629c31b8a5541ddb5189537ea948f"],["D:/Hexo/public/css/banner.css","ddd350481b1e033c40986fdf41ef2c76"],["D:/Hexo/public/css/button.css","0d1e9138d835da4ba798bdff23a5f80e"],["D:/Hexo/public/css/font-awesome-animation.min.css","67046ea250d57883c8508731b0bb7270"],["D:/Hexo/public/css/iconfont.css","712594a547c54fa12650a8273503b6a9"],["D:/Hexo/public/css/iconfont.min.css","819558e547cf2edb6955df0afec632ad"],["D:/Hexo/public/css/iconfontsvg.css","72ff4cf39e964c34128b1bb0a9ac081d"],["D:/Hexo/public/css/im.css","b15331d041cde66389e01e4db25f03d8"],["D:/Hexo/public/css/index.css","5547808e739d3c8b3dc98bbf20fe8ed7"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/files/index.html","b35c593f8a9afea3614733ef4bafddb5"],["D:/Hexo/public/help/index.html","30c98430ffd6afcadf740cc29abcc016"],["D:/Hexo/public/icp备案/cx/blog.slqwq.cn/index.html","cdae25c3c9d3e460d25f10a365fe84e1"],["D:/Hexo/public/icp备案/index.html","0447c5650e167db6238ed6084ec5f7a7"],["D:/Hexo/public/images/BeJ.jpg","ed163163aa7cda1dac611b3287e6c2ac"],["D:/Hexo/public/images/Dream.jpg","d4d129193e8674a0a5f35f9e0f9cb272"],["D:/Hexo/public/images/alipay.png","819dd0110c4f574b52bf4d193de5b0f5"],["D:/Hexo/public/images/banner.jpg","ed163163aa7cda1dac611b3287e6c2ac"],["D:/Hexo/public/images/co.jpg","85c8d8b1b531184dacacff58cc8858cf"],["D:/Hexo/public/images/ds.png","6b702e62a9be704b562407d933479311"],["D:/Hexo/public/images/icons/apple-touch-icon.png","94ffbe44b4a3b5eece162e4ca617c4cb"],["D:/Hexo/public/images/icons/icon-128x128.png","13223e34c2d397703cd68dece1b6852d"],["D:/Hexo/public/images/icons/icon-144x144.png","8702c204dd725f2be03000687700a7a6"],["D:/Hexo/public/images/icons/icon-152x152.png","dff2a0cb044d64e271d45789efb09746"],["D:/Hexo/public/images/icons/icon-192x192.png","94ffbe44b4a3b5eece162e4ca617c4cb"],["D:/Hexo/public/images/icons/icon-384x384.png","94ffbe44b4a3b5eece162e4ca617c4cb"],["D:/Hexo/public/images/icons/icon-512x512.png","94ffbe44b4a3b5eece162e4ca617c4cb"],["D:/Hexo/public/images/icons/icon-72x72.png","6719039ea60cc90e2a5f76ee989db58b"],["D:/Hexo/public/images/icons/icon-96x96.png","d81d66e16f2eb037b4a808afab83e64e"],["D:/Hexo/public/images/loding.gif","e24d90ef6b23a0780753c03324437c2a"],["D:/Hexo/public/images/logo.png","58fd5639c6a7b7150f4ef427ce04a2ca"],["D:/Hexo/public/images/th.png","ed163163aa7cda1dac611b3287e6c2ac"],["D:/Hexo/public/images/upyunlogo.png","c8effd97f77fead52d73c4331d6299b2"],["D:/Hexo/public/images/wechat.png","b876a8446e11c13deb9f7c04093d5369"],["D:/Hexo/public/images/wer.jpg","2fda1fdab83b4446b7e0a0308dbb10f8"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/avatar.png","58fd5639c6a7b7150f4ef427ce04a2ca"],["D:/Hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Hexo/public/img/fras.jpg","46ae22a80c7d968a44e129cf27d4de67"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Hexo/public/img/loading.gif","8dce0031c084fad3ecf9d35a7de194b0"],["D:/Hexo/public/img/loading2.gif","8dce0031c084fad3ecf9d35a7de194b0"],["D:/Hexo/public/img/logoc.png","ff7220727fe71b6c0675d9c92bcaf0ef"],["D:/Hexo/public/img/logot.png","794d43259109ab404bb1bbacb48ba4bf"],["D:/Hexo/public/img/miicon.png","4b63179db3c45dfd9078a252b2575cd1"],["D:/Hexo/public/img/pn.gif","17a949c10895f84b396ab12c145ab489"],["D:/Hexo/public/img/yticon.png","8c5979ba87e63644eeda841588ce7e34"],["D:/Hexo/public/index.html","ff1702077ac02949257ea034c22ab634"],["D:/Hexo/public/js/CaO.js","7832af3ef04070d88e573721f73c579c"],["D:/Hexo/public/js/busuanzi.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["D:/Hexo/public/js/iconfont.js","eb4d418b5cd3cbd661a7aec41f31ae6a"],["D:/Hexo/public/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["D:/Hexo/public/js/not banner.js","aa34f6c45bddf3bd0c8e219c19494f23"],["D:/Hexo/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Hexo/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Hexo/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Hexo/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Hexo/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Hexo/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Hexo/public/la.js","c8bd754a8fb5d8e40718e94f807095ed"],["D:/Hexo/public/link/index.html","4e7ab583f6308ab8edcb5bad0ce6a150"],["D:/Hexo/public/music.js","59abd1dc62409022c72541ce290c20d6"],["D:/Hexo/public/pace-1.0.2/README.html","48c6c320977f7f463e79329214697e7a"],["D:/Hexo/public/pace-1.0.2/docs/intro.html","c5c12081bcbc3a0d18e11e83052602a5"],["D:/Hexo/public/pace-1.0.2/docs/lib/color.js","662871ae46427e84fd55ef321b413cc3"],["D:/Hexo/public/pace-1.0.2/docs/lib/themes.js","6681521f57742148eac5d93df8e861a5"],["D:/Hexo/public/pace-1.0.2/docs/resources/barber-pole-orange.css","b142ace84085bdf2e746451eefd179a2"],["D:/Hexo/public/pace-1.0.2/docs/resources/flash-white.css","5be5315011ad834944c28f1b805a6a59"],["D:/Hexo/public/pace-1.0.2/docs/welcome/index.html","1a4281165b8f93d372325698b1abdc77"],["D:/Hexo/public/pace-1.0.2/pace.js","7af7d7420c800c66abd79cf7c1049324"],["D:/Hexo/public/pace-1.0.2/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-barber-shop.tmpl.css","c782cbbe42e4e5a4b75885988716aef3"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-big-counter.tmpl.css","e428dc45d67bc640cd600fe679920bf8"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-bounce.tmpl.css","ad410a39c8e21fb16eae9f0a38fd165f"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-center-atom.tmpl.css","a462ff7f29b3c2702e19a8c6d7e48946"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-center-circle.tmpl.css","e033679675461e94e6e89d4ccfca7056"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-center-radar.tmpl.css","0feaa69701ac55402a488a06f67f45a2"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-center-simple.tmpl.css","1cbf6e0dc7b05f40e3b3129164e917d1"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-corner-indicator.tmpl.css","66b735ba124890d43a7bbd99931e01b7"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-fill-left.tmpl.css","744637bfe91c69d21e13f602e2461ec1"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-flash.tmpl.css","344875fcb7f77d745e7c2375b88cfb6e"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-flat-top.tmpl.css","21022acb38f689135c357c30445653a3"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-loading-bar.tmpl.css","f07a2524630d35efea14901cff51bcd5"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-mac-osx.tmpl.css","3de7737c99a2d55db1f1bade3c6e134a"],["D:/Hexo/public/pace-1.0.2/templates/pace-theme-minimal.tmpl.css","defd3c7b3a9e23f2db4b6291fc34f37a"],["D:/Hexo/public/pace-1.0.2/tests/demo.html","0912b27c6b78152f94bbaf40298c67dd"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-barber-shop.css","7bd09f65733ea7ea1b198d870979bc02"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-big-counter.css","2ffc9101240b4eb2b7cddb4eed8e89c8"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-bounce.css","0e81e01b799e70e0fc776ed229c862eb"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-center-atom.css","e5437f59d832cd2712ac9d545bae3812"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-center-circle.css","96920b0b7a61593a85fc92bbcbb14dcd"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-center-radar.css","12c190a642e6193cddaea6213f72dcb9"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-center-simple.css","36c1e0d6b46681ed95447419fa5fa99b"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-corner-indicator.css","e2c0320b3a9443ff491289ebf59fc04e"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-fill-left.css","04468ef669d7a93c9416cb79a1634ca9"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-flash.css","12d827a35cf0bde24a02d149c80e2c1e"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-flat-top.css","42e7fc0a2e7c55baf20f82f31f09a421"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-loading-bar.css","cb2713170baf45301c360903d5e10d1b"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-mac-osx.css","bc099acf8839302051d613b6dcac0744"],["D:/Hexo/public/pace-1.0.2/themes/black/pace-theme-minimal.css","b4742db8316793cb0f89cf78aae06947"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-barber-shop.css","efad24d8a11296026c45a326759428bb"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-big-counter.css","de5b681732fbbc67987936a75a708290"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-bounce.css","ea0291cc48e1cf369e1a1927b65a5bb4"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-center-atom.css","121719cf48c3bdb994d633220e611ed7"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-center-circle.css","a70351a9e130286ad38f0cbf87258bd1"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-center-radar.css","aaa7774857c0281bfdf70702fe39529d"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-center-simple.css","f4013cb7a62edcfeb2e28605016788a9"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-corner-indicator.css","66b7d07513089a55cef743bbfe3d8835"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-fill-left.css","071888bc7e2fe76939c6a45dcee25a7c"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-flash.css","28958b9ac2bb370e6ad688adc034413a"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-flat-top.css","815ff0cf0daf2dafa2c2cb3faca798dd"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-loading-bar.css","9cb1d8ef30990676dd17448d1593d07f"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-mac-osx.css","9ce4a234e8b590dc0bbcaeb9429d8e04"],["D:/Hexo/public/pace-1.0.2/themes/blue/pace-theme-minimal.css","7bba84cb68736f6ea9ae77cd934d995a"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-barber-shop.css","b1faccb4a4157ab853e69b587fd76fc1"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-big-counter.css","5ac488db4cff2b4afbc9e1e9d79c02e7"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-bounce.css","1ff636580608ae28e798ae39f88662e0"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-center-atom.css","f9a0d2baf4f606b65771ed61d22ff754"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-center-circle.css","c8401f82eb69b3788d75c6cd8cc4a1c8"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-center-radar.css","2463150181c5952d4b2aae2bf585144a"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-center-simple.css","b788ea31de3294324a8b29fa21be56db"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-corner-indicator.css","a765aa7ae450774e1d58a654e7e660e7"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-fill-left.css","33d016afb117951bd58373c3e98ad069"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-flash.css","626bad52d4efb0314b655c99e38f6199"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-flat-top.css","96d01d7c3403005451c08aaf7b89bfe6"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-loading-bar.css","28d94d5c1b3d9d570b2648c189cc7612"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-mac-osx.css","2c5432400ecb9d26afe9cd3772270b40"],["D:/Hexo/public/pace-1.0.2/themes/green/pace-theme-minimal.css","d5c0e9986615d00dbb20bc4d1341b6b6"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-barber-shop.css","1df49d6ba10b240cea1dacc8d462143b"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-big-counter.css","db05cbb4d771cecfaac9f3750264f640"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-bounce.css","f81173c8214f7d7e8855ec934248cd98"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-center-atom.css","56d0e7b8a5194afca5ad1b9328ad9d96"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-center-circle.css","3d238431131f37c3c8cfcd76f7e998d5"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-center-radar.css","ed52b7c705120a50274a97582c17873a"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-center-simple.css","6ad04146582d31cff3b979eea4ea1d04"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-corner-indicator.css","ffecc42ae73df8a365f9c4f74080161b"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-fill-left.css","4f44647fd369a4f89dd26c722b7a9f92"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-flash.css","851d4d1a00d61a47effca61d22518e43"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-flat-top.css","216fa508fde913b2ec058cdbf661fd5e"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-loading-bar.css","7c9ea3aa955dbd55cdfa35592ee073ca"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-mac-osx.css","c8c6edfe83e6c279d4184bccbee47dad"],["D:/Hexo/public/pace-1.0.2/themes/orange/pace-theme-minimal.css","a71cbb0fc1da8dcd5672e586a33d1e29"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-barber-shop.css","6433ca39f3ba4c51d40b074647a57354"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-big-counter.css","e01dba53ffe1867e550509b9843eea3c"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-bounce.css","aeff1b28fd3b56b338f2233af1511ad6"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-center-atom.css","f5a58968ed7b8c80bf44fd61815db104"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-center-circle.css","dae9b8ae02a33ff7dd972c0d2208b03c"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-center-radar.css","431c38bc7438ffb4e8d3b17aec383919"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-center-simple.css","d84a3513f3c8a957a0808fd424522178"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-corner-indicator.css","988c93891a873cc5ca44b69db80d99ca"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-fill-left.css","2e0de53e1bc454900b6378396be89bb4"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-flash.css","d9f0ae04cf220565093aea14ff1fa2ed"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-flat-top.css","af2cc43531973fee010b9bdfeb020033"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-loading-bar.css","14fdf93e584a0484fa5a91205e2acf2e"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-mac-osx.css","984d455b0214a25e47968dfdead453da"],["D:/Hexo/public/pace-1.0.2/themes/pink/pace-theme-minimal.css","63483a4441790941b65c00e3b3216f79"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-barber-shop.css","72f3f06b8fe2d7c86019642e14450a0b"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-big-counter.css","433c8f7caaa62f6b8d90d085edda5f67"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-bounce.css","81a46504fd747f34f16f0cd39635e953"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-center-atom.css","bad3a1aa3b510e94164037a17994d002"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-center-circle.css","ed2aaa5775c2fd083f69232500ed21de"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-center-radar.css","688e78f46cb10cc91287de81658f6fd8"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-center-simple.css","c7dfcd3682aed026702c1e7a29307fe9"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-corner-indicator.css","b8b135f29437d82e22bbd61cfb648aa7"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-fill-left.css","1af470a65c017018b31cc6bb5f70f70e"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-flash.css","729f26dcbac42a296356bd7404255489"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-flat-top.css","c92040d9c50b4883c86f70b17839cfef"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-loading-bar.css","f664ed0b6f7c4d2880c7266a1c070200"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-mac-osx.css","bed606945a3fcc2c7f31ddc6c0bd17c2"],["D:/Hexo/public/pace-1.0.2/themes/purple/pace-theme-minimal.css","82a0fd446deaa0609ea223cb9e510bee"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-barber-shop.css","6d336d79ea95261e11f6d40a44930c38"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-big-counter.css","15c1417149fdf0b736a7ec5e9c47afb3"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-bounce.css","b0fb2170d72615ec050f3ecdcf63669c"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-center-atom.css","67cc1ddfe8c655abcf1ed9a8a0866e7f"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-center-circle.css","0cfc2d18a6c727345f7296246147d2bf"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-center-radar.css","d722dc39469c1d922137c9529bb6f67d"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-center-simple.css","42dc43a947ab37a1f3f88e967daffebc"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-corner-indicator.css","ade64e7246d7aaec4f68c24170362be2"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-fill-left.css","238c1d4df97573b1091ecc5f213f95ab"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-flash.css","fb28a831950138f2b74f081359a2f4f5"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-flat-top.css","7741127c85d2c2823a3ac1514f4bcade"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-loading-bar.css","27da69e80fca0bd21ca11a94504b8cd2"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-mac-osx.css","f017fd7f8853a4c7d300e35fc2281780"],["D:/Hexo/public/pace-1.0.2/themes/red/pace-theme-minimal.css","4f9be763d71bb2e8227112d8952e0141"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-barber-shop.css","a6b562bd49dbc3d93f00cd3ab30b3538"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-big-counter.css","5e6aea883517fc7242d81ddf2d0a43f0"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-bounce.css","55a3df829dfa2068534da4e87f5712b3"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-center-atom.css","e97a2b02eaaa77e61c53898ec23e662b"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-center-circle.css","546cd840db5c85382244555bb6843a4b"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-center-radar.css","9b65f0b0b8c65f3b6743df9ecc08c3c7"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-center-simple.css","f020fd9049a04661593a807289d2ff7c"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-corner-indicator.css","1c5e4d018fe818e33f20d012d6ec1306"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-fill-left.css","74ecac47186196cced4cfbde42cfa2ad"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-flash.css","27ea737051e10ccf85c585c771393ea8"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-flat-top.css","b31c2b6472cb0bb93a6616ee0cecfa9e"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-loading-bar.css","bee30f5d36ab3ccdcfc35a047dd2945f"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-mac-osx.css","141d49a72742dc56b2ac5573a3dd1f1b"],["D:/Hexo/public/pace-1.0.2/themes/silver/pace-theme-minimal.css","7f1d4b01b82af9e8d56b05819b1d8b98"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-barber-shop.css","1ef670df196e044d99874df7e528f832"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-big-counter.css","5d206728c435343e5fa3ddbd2f0544cb"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-bounce.css","893ec6b7e3135893744cb2dceff32159"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-center-atom.css","fb1e71060996d8b66aa536e94eaae533"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-center-circle.css","e4fbbc28a8d0f9bb5a6e280a4a98f38a"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-center-radar.css","a6d1408b0c8c4f4364195cba45b5c6fd"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-center-simple.css","dc5b93f3ca94c3baa527f7f3731dc9be"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-corner-indicator.css","94a20479da5450def9042872e41294b1"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-fill-left.css","9316c475b469f8a6912a14625cf06b1c"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-flash.css","852fd8dcd2ba0f99acb4549cfed4c88c"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-flat-top.css","241d6883060bf1c5fabf11c33a9d7325"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-loading-bar.css","8012cdca29fff57ccd8234f8cb8ce285"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-mac-osx.css","b2cfcd5bda678e12fd555824eda3aebe"],["D:/Hexo/public/pace-1.0.2/themes/white/pace-theme-minimal.css","1f4d897012fce205c44de1125c17e1c0"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-barber-shop.css","0cdbf72103fa8f565be29a60088da808"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-big-counter.css","faeadfbd714c04135a75709447c452b4"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-bounce.css","3ba40c68e3f0c69461a9c13a509f280f"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-center-atom.css","866cac26845ba25cc73a28a2d747c54f"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-center-circle.css","734e6680ed866c2ebbf3be1085d53388"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-center-radar.css","643539c93bd5df86736a919a19cb099f"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-center-simple.css","507f5e16093f52d6000a1ade5752728b"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-corner-indicator.css","867b9c1909bc1c7de1ab378867c05a47"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-fill-left.css","6bd4c8a06dfb2739316ea0e50a06d8cb"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-flash.css","1658f150ca6b01dd4b4d8e074cfa9e1e"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-flat-top.css","4297a1ab546704100c4165db8ff8d2bc"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-loading-bar.css","14ff604440b235fb6d7f63fe2eb3ee66"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-mac-osx.css","fbd2585c5515cc8d5424472092562cc9"],["D:/Hexo/public/pace-1.0.2/themes/yellow/pace-theme-minimal.css","5d58f58738de69794a1d7d714540a804"],["D:/Hexo/public/page/2/index.html","cd8c628cddeb5212922c5b1b799730ac"],["D:/Hexo/public/preaching/index.html","ecfb3c4bbb7b43ce59d55f143559b8dc"],["D:/Hexo/public/sw.js","a79dd64cb3e069ac932a06ba940f5aea"],["D:/Hexo/public/tags/Aplayer/index.html","fe0743861b179ee0e5369fe9d6a5ca62"],["D:/Hexo/public/tags/Hexo/index.html","4c9d3c78fdd02af22700f796660d0293"],["D:/Hexo/public/tags/Meting/index.html","5ce61ffe97a0e765daeaf08797adc701"],["D:/Hexo/public/tags/搭建Hexo系列/index.html","8333e219812c38350fdb18a5ffcf9f35"],["D:/Hexo/public/tags/白嫖党福利/index.html","f183fc79dd28ff34877904bc006560bc"],["D:/Hexo/public/tags/魔改/index.html","685f8ef9ccf648c496b8e0aeb9ae8796"],["D:/Hexo/public/update/index.html","c8e5d02ec6cfc586b358088e230b4247"],["D:/Hexo/public/公告-单Page/index.html","a9fb4b78821f6d8e06407a85e93b0122"],["D:/Hexo/public/合作伙伴们/betapages/index.html","108ba430b834ba5a67115572d35f3def"],["D:/Hexo/public/合作伙伴们/index.html","e2b335791cecd8b6ce7cd70f5e6a3702"],["D:/Hexo/public/您的隐私问题/index.html","240e415d36259265145cd9e5c89ab70f"],["D:/Hexo/public/网站鸣谢/index.html","06cc6df68e97a48ae1b817cd7dac24cf"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







