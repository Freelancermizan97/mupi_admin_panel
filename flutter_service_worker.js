'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "a5ccf96853c53da3dfc57dd85f088860",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1bbd5034892b40eedd15a13c9606b5b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a232d252a42d6060efc001934d659848",
".git/logs/refs/heads/master": "a232d252a42d6060efc001934d659848",
".git/logs/refs/remotes/origin/master": "4626b8b4856c61c0caa88bb393185053",
".git/objects/07/204098e6c0c7b1c9de2100568355715ed7ca80": "93852a064a350d826315efd3dc4ee0de",
".git/objects/08/eb7543991b265a856bf378cbfff5a9f475720b": "deb78b0eadf191942fb18e708703f5bf",
".git/objects/11/eff19b43615d28234ca42e682b528172590428": "1189de16d29781369ddc6d35e8724fbc",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/122cc3b879e42f6fd2d865bc52aad6ce647e9f": "b30f2f72293d42b0f5702484525410d7",
".git/objects/1c/4609676a3038e9bde4a6325175e30be4747cf4": "ed52ad76a7c7839c8eacd729fc307849",
".git/objects/1e/97ac2274fbcf8880365287486573a7477573b0": "225a00e602e4d501b59a01deffabf2da",
".git/objects/1f/99d11f6d25c745da986e927b8046ae644fa8b9": "9c82bd5c857d4df26abc82430267f87a",
".git/objects/28/d23f057d02aefc44f0e57c1e75b70ea24279cc": "9116e96c9f5158f7a308a997b09a83cd",
".git/objects/2a/bf361af89a232e90eb0aee098012917fa379a6": "59431d8d60680d5161152dc4048b840b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3d/f5636356dafb34c2c9a5857198d62077efb467": "862ff1cf284c5866b786aa97b80e678f",
".git/objects/43/85f108622bb213c7ca40de0933c813a7a085fa": "02845991a8d11aa396f6f82f81d524a6",
".git/objects/4b/cd78806110311c4b044223b603d73030452141": "34a4a96cedfe8c72dd8ed91b6d5d95da",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/61/cf751d8128b99d0d6cc2fdd8cd8bdcf1562970": "0c536ba0edba8750ab83ed395aaebddd",
".git/objects/66/6dca0fa052d1a377f263fe880e7249bcc8190b": "ce830d7e5cf2e9220325a841ee43ce69",
".git/objects/67/5319b647f6ec0a04a71acfdb8835bf1231dd33": "c766481412d6bf8fc83fc7026d0627ef",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/38e572fc57ba91437b8efc6a745a31829a3e91": "9884b130df260dedc1d8ae6058b324c3",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/dd962f6f2bae729661ed942cf73cc278156817": "df55d4251d1a3cb3cc0dfe46dd7d5f93",
".git/objects/78/68543d6c236309322cf3e96f0c1a62a0686a7c": "2ac741287b8d8c8b76270bda8acba391",
".git/objects/79/06c394e1bf47ad67c8e9fc8dba342d34f970ec": "ad3492c89e91ab6de1fb4a87c7ee6d4c",
".git/objects/79/47e085f244f945a960b3a953992713be3c5676": "999661859746cc157a617c30f450e3ab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d3f69593f7d49c1852c348832063ee31087de9": "3b6ed4b72674aeeef6033f818b39076a",
".git/objects/86/8b6fbbc7d2e5a915d48aa6da9cae13c9d2217b": "d8149ff798c64ec5a65227ef5ff2bcb6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/7ec25d84e4a27fe2a59ae5ba35444d08fb22f6": "40749c48b79db18b510d8018aa4b9b22",
".git/objects/95/20075cfcb01072f10279b4589270754d4d060e": "ef9a94f7a68fb8ac9bab497ea576b9c0",
".git/objects/9d/c5d62acf5e55eda195b7ef70ed0c157eb63410": "c7fe199ce515f15db9062ae9ec656d40",
".git/objects/a0/2b5f1bce2d74b8c220f8f2304c4c9b7f198096": "73c2c23bc09f3049401df54bf8e7a05e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/d42f592c1863fd51a60802e493eaa97f32024c": "625c7bbc5b2f0bc33ad2264620ccbbff",
".git/objects/a7/2572008fc6500c4dbf61ddddfb6ea68e0d2f69": "53fbe1fd8655c28e1755a7c52f02d395",
".git/objects/a9/1e12e6d2345caad727302a2908e0595fd8bee9": "96f4d944095da1644aef54c64e6325ad",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/1af1666f8d5fe54db38c7c3a915fa94cc402a7": "5d4b06b5630896a555edd9ca9000d53e",
".git/objects/b4/3d716d548446d66b4540531613dc7887176a1f": "a5cafb4c3330b8d01603444a3c1f96a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/ee58496a408c22007ab059192cd077053c84fd": "8f058860640d139428e171551c6d4c76",
".git/objects/c2/dd0bb41ec21c1171c37923bcb988d0278034f2": "0d7ca383d981caf224aaa809422483e2",
".git/objects/d0/78a3ef42e5f0272fdccc1969ffa73bee844884": "d35f48064905a9bbf73dfc9282c5d4c0",
".git/objects/d3/1a42f955b6f7f1e4ba13b5c8b12b697f8063e1": "6cf97d6df1d9ebcd844bf156661d772e",
".git/objects/d4/3041c15504a6fb7dbfd6243d4007acfede45cd": "16b8a70572ece5b6d4e5e04ed91f5058",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/4057fea08b60a0b333c2fe5ffe8861bfe026a5": "f01ee6dafd27f82a9c4540e17961a095",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/1527ae8a9e9c0ea6beb2fafd48f0be7327d70e": "69fcb029a72a4d4a53ab2262adc6d3c2",
".git/objects/f8/c7dc31a360a9c485be4bd6ff9e4e6fc1d90f76": "76cc337c8175e73fd6098d8bc151e3f0",
".git/objects/ff/2fa873052a5b50ff89c01525d40e7f57725ab2": "c2e3d46a377766e071768bba9d5d001f",
".git/refs/heads/master": "a8cf8dda0f60af69e1949ec39a83caa0",
".git/refs/remotes/origin/master": "a8cf8dda0f60af69e1949ec39a83caa0",
"assets/AssetManifest.json": "5dc9cbe0633a3bdd0655c457293d1f76",
"assets/assets/icon/form_icon.png": "5782a9f09a6484e97d9bdc32d8d25cfc",
"assets/assets/icon/idea.png": "85ae80959bed190302ce8f168e0191a8",
"assets/assets/icon/notice.png": "95fab6e0c6d0fb5f738c241ca6e28bc3",
"assets/assets/icon/pdf.png": "907ac8ae573157ca834b9a486a17f381",
"assets/assets/icon/results.png": "5e8ada230912c59301bd900f97adb5e6",
"assets/assets/icon/student.png": "b1437685bb8d496de451ada7cc4e3fff",
"assets/assets/icon/students.png": "1edeb5feaca79f7eae367bb813d3ae73",
"assets/assets/icon/teacher.png": "8247ebc9712227031875248fb766f416",
"assets/assets/icon/teachers.png": "623d9c838635f90a1f77c45cf4d5d8d4",
"assets/assets/icon/timetable.png": "2a117e4b48a602bde94e301d4993986c",
"assets/assets/images/Group%2520206.png": "5bfc2c5328a652983c538d0fb63ebb6f",
"assets/assets/images/img_1.png": "a5ce403fd8bd73b87f2864fdebb2689f",
"assets/assets/images/img_2.png": "91950799f86b1ae0215e9c771ccd48ec",
"assets/assets/images/img_3.png": "426749983f497ef4725c6f9585595725",
"assets/assets/images/img_4.png": "0e3bc9ff3630ea0c6a5473ef998758f2",
"assets/assets/images/img_5.png": "e8b9390e5922e54d6a36b77ca85f6e17",
"assets/assets/images/login_im1.png": "7159eca88d14cfa2e7672a1ec36df6ac",
"assets/assets/images/login_im2.png": "4a2d6ab5e6af6f812c8ff0d1d932d3ec",
"assets/assets/images/mupi%2520logo%2520main-01%25201%25201.png": "1f4239cd65d786027df91e20dd533599",
"assets/assets/images/mupi_logo.jpeg": "eed9aafb5987e6c8703c1b7b56c57daf",
"assets/FontManifest.json": "78aeef88949b127aa4208ed693eae236",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/NunitoSans-SemiBold.ttf": "6c7de16a9fe7eeb51fa02e3532c8c119",
"assets/NOTICES": "0f09a38f6a520896a9cfab3854bd8691",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "1f4239cd65d786027df91e20dd533599",
"favicon00.png": "5dcef449791fa27946b3d35ad8803796",
"favicon000.png": "da2cf8bb7d53e669079279c803fd9fe3",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "add2cf372cfb77b493f0df7d120af5fd",
"/": "add2cf372cfb77b493f0df7d120af5fd",
"main.dart.js": "9a7058b9013d821c7acb01acb13178d5",
"manifest.json": "a1a8d85fb12a9be42daa8e2bb85ff6c2",
"version.json": "9be590193f3e5a94430792d753e2a64f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
