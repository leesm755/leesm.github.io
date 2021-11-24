'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dd54b27bbd653512bbb2228d8ef59365",
"assets/assets/1-1-1-3.png": "350283e5dc2deb99f2accae971a7384b",
"assets/assets/1-1-1-4.png": "2a274e2613edad68277644f69346c423",
"assets/assets/1-1-1-5.png": "63107397c24d0360af49eb43e89d90ac",
"assets/assets/1-1-1-6.png": "c2a9dcdbb60de09346ccb02d22ab253e",
"assets/assets/1-4-5.gif": "2722f88961ff2240dae1057d21e9939a",
"assets/assets/1-7-1-1.png": "8a358d1981d43b1ea20a985de883cb4b",
"assets/assets/1-7-1-11.png": "09281ea7008d797a345fda63d258506b",
"assets/assets/1-7-1-13.png": "ec8ca003cfce1355bf5e50ed58458f15",
"assets/assets/1-7-1-15.png": "124202b27726b50d9284dc4a82660e6d",
"assets/assets/1-7-1-17.png": "bb1185aecc17c6446df3ce1f805c3bcc",
"assets/assets/1-7-1-19.png": "492bf7d9309c4c90c714d7fbbead1850",
"assets/assets/1-7-1-21.png": "9ae194c15b24e326976aabf9eed30b3e",
"assets/assets/1-7-1-23.png": "439e7bc0fe2af8db3b41254d2d54a1e2",
"assets/assets/1-7-1-25.png": "2cb58e5e4368eeb78ac3a50cba24e782",
"assets/assets/1-7-1-3.png": "ff093efaa296f03eed962c07b79aef78",
"assets/assets/1-7-1-5.png": "44c866b9badf7817d36671456e8d93c2",
"assets/assets/1-7-1-7.png": "510ec1f101d63f1df71ea79231772480",
"assets/assets/1-7-1-9.png": "79fa1207b5ceaf89b9bae8ca3219247b",
"assets/assets/1_1_background.png": "764fd1dd9eb2e94681752fc1ffde8006",
"assets/assets/1_3_background.png": "de996858f14ade9bccc37847794df97e",
"assets/assets/1_4_background.png": "7406b0b8d07d02b74656e43a5b6b307e",
"assets/assets/1_7_background.png": "d3269c83d36deddb4aa3d9b710bfc41c",
"assets/assets/2-5-1-1.png": "3ea5a3c9c42c0cfc70006ebbfefff230",
"assets/assets/2-5-1-11.png": "6dabcc01a5621b75e5f098044e4ec128",
"assets/assets/2-5-1-13.png": "ec861719146106168d17b1ae77b63b01",
"assets/assets/2-5-1-14.png": "0f804b63e5348fb35a52a8268ed5ef8c",
"assets/assets/2-5-1-15.png": "423f8699e8db1a4c2f0b6fb5b6a05789",
"assets/assets/2-5-1-16.png": "98c3380c9fb0aaa830a48e186fba024c",
"assets/assets/2-5-1-17.png": "faef96ec8108814231ac0de134ef7c51",
"assets/assets/2-5-1-18.png": "825bcbb885fcd3547f6579499ec890f3",
"assets/assets/2-5-1-19.png": "de120a4a9eef6b0b1633da40d34183a8",
"assets/assets/2-5-1-2.png": "1dabc0a0c605ca7fac4a750e75826b73",
"assets/assets/2-5-1-20.png": "01af77f4ecce6c172a30e36816e77197",
"assets/assets/2-5-1-21.png": "e8a6ce3bcf099ff6c3a00c4291b3b64c",
"assets/assets/2-5-1-22.png": "bf08fc4df70bb92d22762b1fcfc3108b",
"assets/assets/2-5-1-23.png": "8f128ca8adf7cafc24dfb13eeaa36048",
"assets/assets/2-5-1-3.png": "6e547f12167450a7d1d70f12d7256fc2",
"assets/assets/2-5-1-4.png": "e5ca55fc79e429969dfa74b874fd7153",
"assets/assets/2-5-1-5.png": "1971a4f7b5b52de02f7431bc7d4b6ef9",
"assets/assets/2-5-1-6.png": "f7402431eff2fd5620f7aa96ffdc3ac0",
"assets/assets/2-5-1-7.png": "731f80a54fb224742072113c989fa5ae",
"assets/assets/2-5-1-8.png": "2d60c2d1e0e9465f7a6b3d37f56e6fab",
"assets/assets/2-5-1-9.png": "cd27e967f8521fd439b38499f9b22f53",
"assets/assets/2-6-1-1.png": "a71b3de240307a77904c2866004e1f78",
"assets/assets/2-6-1-14.png": "cc73785c86e52a245fcff8ce7b448650",
"assets/assets/2-6-1-17.png": "47ce62c8ea2a169b1c0e28b361c81a29",
"assets/assets/2-6-1-18.png": "ace61ed592e3cf01e3e30a5ecb14df82",
"assets/assets/2-7-1-18.png": "5744b43dda9cecff10384fffe36790ba",
"assets/assets/2-7-1-19.png": "2b03fdd8f06fd99959d6ee6b536f1bcb",
"assets/assets/2-7-1-20.png": "675d4ce8fd9998dcf63fcfc5b8d98dd6",
"assets/assets/2-7-1-4.png": "d025f5f4f3f0dc37f3232e504da3da19",
"assets/assets/28haley01.gif": "8a1a4c3a90f8748da46b7da5e734be6e",
"assets/assets/3-3-1-10.png": "dc94e2f426c21e1566f9da71a089a238",
"assets/assets/3-3-1-4.png": "5176d888da467eaf586986ba944b4814",
"assets/assets/3-3-1-5.png": "7898ee233b20009a4a00343125c35146",
"assets/assets/3-3-1-6.png": "fa6d1a0eece4bebb0dc331b8c4f3ca71",
"assets/assets/3-3-1-7.png": "b6a89da538e21880e655d7dfaa8b0068",
"assets/assets/3-3-1-8.png": "31fd51412d2f3f63f61c84d938b5a466",
"assets/assets/3-3-1-9.png": "5a03bc4c0061fc6c578f9831851e91fd",
"assets/assets/3-6-1-1.png": "a1d65a9c595fbb6720af2d64c20e7849",
"assets/assets/3-6-1-11.png": "e918115615ebcd4bc523a8d5eed2bfdc",
"assets/assets/3-6-1-11.psd": "9aa78ee09876c1841f730ce760a95d63",
"assets/assets/3-6-1-5.png": "41d449af7feba89ef39b179d6d172e6a",
"assets/assets/3-6-1-6.png": "2f070909ea83835057c8005a22952dc5",
"assets/assets/3-6-1-7.png": "cb0f349dc6074d098d9b3a6b3e439afc",
"assets/assets/3-7-1-11.png": "65417854198ae52cae19e2bab73d8ef6",
"assets/assets/3-7-1-12.png": "89aeca67c9469365af0cc08622573ac2",
"assets/assets/3-7-1-14.png": "bae97f5a85787bf3ffb1228eee229cc2",
"assets/assets/3-7-1-15.png": "f41073b3e1464a2aca6eb3a370813185",
"assets/assets/3-7-1-16.png": "b514fb3e36c818d482ae6f0c25791b0f",
"assets/assets/3-7-1-17.png": "a4d0b5a74253072b19701cc9db009bdc",
"assets/assets/3-7-1-4.png": "91765e8583073cd103a27b14886f3316",
"assets/assets/3-7-1-4.psd": "f4bf43bb918d350ea9d48ef6b76ea6c7",
"assets/assets/3-7-1-7.png": "0d053ddb30d2a7da0e03151990fd9f97",
"assets/assets/3-7-1-7.psd": "dc1febd4bd5fa7ba0f95e8bc0d490945",
"assets/assets/3-8-1-1.png": "b997a4a249df85544f29ddf496d35fc8",
"assets/assets/3-8-1-10.png": "bf3eac62255d63240316dfc7e6a438de",
"assets/assets/3-8-1-12.png": "c1ee2b9232f140a74029c331842f8bde",
"assets/assets/3-8-1-13.png": "97dff02f238a696a3abf0fd24e444296",
"assets/assets/3-8-1-14.png": "523eab3fea85a45c6ad89a1a0abd4088",
"assets/assets/3-8-1-15.png": "563cecf649a0b5aa92ad8384068a287c",
"assets/assets/3-8-1-16.png": "4a13d0b1d3895038cb6fe7f84c50b6df",
"assets/assets/3-8-1-2.png": "fd86fda954e825317fab8aaa8fd3f7c1",
"assets/assets/3-8-1-3.png": "39bf196a50a31a91b56fabc5205ad12b",
"assets/assets/3-8-1-4.png": "f65c7f111c837a8a1c82a163d7a09f75",
"assets/assets/3-8-1-5.png": "8f76c6d885922bccf5c50cd846dd3513",
"assets/assets/3-8-1-6.png": "bcd772276948a2c402cb45f5e8e5aaa8",
"assets/assets/3-8-1-7.png": "b3cd1f6e5f5d1b22064fd7199fd7323d",
"assets/assets/3-8.png": "b533cbb50fa2534d93cb2c55b6c5d1e1",
"assets/assets/30haley01.gif": "15e95a6a6ba4e3602ce9f4381bccaadc",
"assets/assets/30haley02.gif": "b028e1487c19dee54df41819a732a760",
"assets/assets/30haley03.gif": "b028e1487c19dee54df41819a732a760",
"assets/assets/36haley01.gif": "7d3cd7ce206a95b82c0927dbb0c0d3ef",
"assets/assets/4-1-1-1.png": "de7f40ed4a7d48abae5ba1a5385082d4",
"assets/assets/4-1-1-11.png": "e03fdfe03680d1ac22ca00d2073ae94d",
"assets/assets/4-1-1-15.png": "3c22a8ee9b854f1cac16bd39ab5a1c11",
"assets/assets/4-1-1-6.png": "c20042dfc68bbd17eea18ed3362924bb",
"assets/assets/4-1-1-7.png": "359f1226bfff835f6544fe626bad3b9d",
"assets/assets/4-56-%25EB%2582%2598%25EB%258A%2594%2520%25EC%25A2%258B%25EC%2595%2584%25ED%2595%25B4_%25EC%259C%25A8%25EB%258F%2599.mp4": "add1a1f20f29f0457930e2c099364877",
"assets/assets/4-56-%25EB%25AA%25A9%25EC%2586%258C%25EB%25A6%25AC%25EA%25B0%2580%2520%25ED%2581%25B0%2520%25EA%25B0%259C%25EB%25AF%25B8_%25EC%259D%25B4%25EC%2595%25BC%25EA%25B8%25B0.mp4": "060fe2e4fe350a04189e7d2dddc89161",
"assets/assets/4-56-%25EC%259A%25B0%25EB%25A6%25AC%25EB%258A%2594%25EC%25A2%258B%25EC%259D%2580%25EC%25B9%259C%25EA%25B5%25AC_%25EB%2585%25B8%25EB%259E%2598.mp4": "7722d7b1748c7690a0ef3ff2a0465a4c",
"assets/assets/4-58-%25EB%2584%258C%2520%25EB%2582%2598%25EC%259D%2598%2520%25EC%25B9%259C%25EA%25B5%25AC%25EC%2595%25BC_%25EC%259C%25A8%25EB%258F%2599.mp4": "33252caa429350bd949ddffd4bac8328",
"assets/assets/4-58-%25EB%2584%258C%25EB%2582%2598%25EC%259D%2598%25EC%25B9%259C%25EA%25B5%25AC%25EC%2595%25BC_%25EB%2585%25B8%25EB%259E%2598.mp4": "f4586a31b2313863a12f0e3df0c07ab7",
"assets/assets/4-58-%25EC%2588%25B2%2520%25EC%2586%258D%2520%25EB%258F%2599%25EB%25AC%25BC%2520%25ED%2595%2599%25EA%25B5%2590_%25EC%259D%25B4%25EC%2595%25BC%25EA%25B8%25B0.mp4": "9f57a47d04aa313832ec519edd5dafd7",
"assets/assets/4-58-%25EC%2597%2589%25EB%25A7%259D%25EC%25A7%2584%25EC%25B0%25BD%2520%25ED%2595%2598%25EB%258A%2598%25EB%2582%2598%25EB%259D%25BC_%25EC%259D%25B4%25EC%2595%25BC%25EA%25B8%25B0.mp4": "d5a815dcc97b7c3caac4db725731b65e",
"assets/assets/4_56_%25EC%259A%25B0%25EB%25A6%25AC%25EB%258A%2594_%25EC%25A2%258B%25EC%259D%2580_%25EC%25B9%259C%25EA%25B5%25AC_%25EC%259C%25A8%25EB%258F%2599.mp4": "549b8f2c813f02f8959e9dd15bc5a9b0",
"assets/assets/5-62-%25EB%25B0%2594%25EB%25A5%25B4%25EA%25B2%258C%25EC%259E%25A1%25EC%2595%2584%25EC%259A%2594_%25EB%2585%25B8%25EB%259E%2598.mp4": "fa581a2498ee0b9b4eb4c40f8a83301e",
"assets/assets/5-62-%25EC%2588%25AB%25EC%259E%2590%25EC%2586%25A1_%25EC%259C%25A8%25EB%258F%2599.mp4": "f9853016b3b42b0c9886d05525fcd1aa",
"assets/assets/5-62-%25EC%2597%25B0%25ED%2595%2584%2520%25EB%25B0%2594%25EB%25A5%25B4%25EA%25B2%258C%2520%25EC%259E%25A1%25EB%258A%2594%2520%25EB%25B2%2595_%25EB%258F%2599%25EC%2598%2581%25EC%2583%2581.mp4": "41a941b2693e13b1aa90644ad2a35ceb",
"assets/assets/56_57_11.png": "bf7b43e5f3ac4a21cafe2dee04fd6c97",
"assets/assets/56_57_12.png": "4f8bf495c105328b477cb9e2876c62dd",
"assets/assets/56_57_13.png": "e43f9c4b5a893230f6093ace1686215b",
"assets/assets/56_57_14.png": "f49955637f55890a07d0a9a733a13af5",
"assets/assets/56_57_15.png": "e9c37e6208db3ebea4a7570b1717fa52",
"assets/assets/56_57_16.png": "a737cf6fa21f23ecaa41cb134acae579",
"assets/assets/56_57_5.png": "3252051ac7f1a0cab5a9b29602eadc14",
"assets/assets/58_59_1.png": "1a871fd51c62489dfa66f042f6e6076c",
"assets/assets/58_59_2.png": "064450d6345ebcfc211e698c80789434",
"assets/assets/58_59_7.png": "d5b57147cc01f22ecd97c6f228107eb5",
"assets/assets/58_59_8.png": "999a6f26020feffa6f6e301d72b11908",
"assets/assets/58_59_9.png": "6caf02e48104eabb22845f67320afd13",
"assets/assets/58_59_tree.png": "cb35e627c54807d5e9193befd528b799",
"assets/assets/5_8_1_10.png": "dddbaf99f00c9c12869a8f265e6b02a9",
"assets/assets/60_61_1.png": "0a65cd3e0a789b296047b9298029637f",
"assets/assets/60_61_10.png": "9f1785989d662f02ff89cf40ab7407be",
"assets/assets/60_61_19.png": "aca4993dd6145f3f1151501ba3edc7ab",
"assets/assets/60_61_3.png": "57b75e5fcae963e43159e6be1199a767",
"assets/assets/60_61_4.png": "b6408a54cd2a6f4436da240e769e6a08",
"assets/assets/60_61_5.png": "92a2a25579bbfc191687f5cedfff4fec",
"assets/assets/60_61_6.png": "a8379bbc5e80f08ab9a4709eea18d85e",
"assets/assets/60_61_7.png": "42a5e8941b988375808c313680753dca",
"assets/assets/60_61_8.png": "16ea87b619437773395251a45480c72c",
"assets/assets/60_61_9.png": "a0c9a0c28c4b9df39176359a2eab3425",
"assets/assets/62_63_1.png": "7e224779113f0ad7fb0316cd8454096b",
"assets/assets/62_63_10.png": "b86cd82c5e2988ac37d12e7b333bdef7",
"assets/assets/62_63_11.png": "acf49f1b2ba59f2b9d6907936c8311cc",
"assets/assets/62_63_12.png": "c653237d2f9ba84e824096e00dbe6fd5",
"assets/assets/62_63_3.png": "3813e3830c161a614ee009e8f147536a",
"assets/assets/62_63_5.png": "08180fe155ac38413cdbe3bc3d11198f",
"assets/assets/62_63_8.png": "e76892893d36ec899795f13e3802d160",
"assets/assets/62_63_9.png": "9ceed406c7ebe8bbc73c94e06c9672f7",
"assets/assets/64_65_5.png": "d58cbd08554a3f18bb7781084a1dca07",
"assets/assets/66-67_5-3-1-10.png": "1996f89a25a6d14f441b459968cdaf0d",
"assets/assets/66-67_5-3-1-11.png": "0ce706ddc5dad9918036cfae2c51fa3b",
"assets/assets/66-67_5-3-1-12.png": "90a1d8d62789563caf329385c27b5797",
"assets/assets/66-67_5-3-1-13.png": "b9a6b32deab9a7088bb5b0662f923a4d",
"assets/assets/66-67_5-3-1-4.jpg": "40b14f01897a4d691cb32564e7dab076",
"assets/assets/66-67_5-3-1-9.png": "03caafb7fe6b1432fc6ddf425996eecf",
"assets/assets/66-67_5-4-1-1.mp3": "6ad7522d0014ec8e0647a7d55b95f32e",
"assets/assets/66-67_haley01.gif": "3a9ab5be33f485984b9bb769d4c825f1",
"assets/assets/66-67_haley02.gif": "0f012e36e0aff3261def22281c3eb440",
"assets/assets/68-69_5-5-1-1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/68-69_5-5-1-12.png": "353a3d7e163f7db97fea78a24a99794b",
"assets/assets/68-69_5-5-1-13.png": "9f77b78b6aff359522fff25e4804d5df",
"assets/assets/68-69_5-5-1-14.png": "962c110c3f2c7812d7d97bfcf7eb699e",
"assets/assets/68-69_5-5-1-15.png": "3379ddb41293b04b8be03af992eab6ff",
"assets/assets/68-69_5-5-1-16.png": "9dcfc19831d2b74f5626a9ac06b80ea1",
"assets/assets/68-69_5-5-1-17.png": "4ed65196648a802dc7f7fe933b1e9e40",
"assets/assets/68-69_5-5-1-2.mp3": "9854fa6b1c017ce9e0f523788095d644",
"assets/assets/68-69_5-5-1-2.png": "a0f5988648100b534d722b3c0f167832",
"assets/assets/68-69_5-5-1-4.png": "4a3be1064007faf5bab7cb4a33060465",
"assets/assets/68-69_5-5-1-5.png": "f175d1cfc5a4e64c82028a8d7f33d983",
"assets/assets/70-71_5-6-1-1.mp3": "9854fa6b1c017ce9e0f523788095d644",
"assets/assets/70-71_5-6-1-1.png": "d27111507b0573e408d7ebf77aa107f7",
"assets/assets/72-73_5-7-1-1.mp3": "d140e5bc6fe277167dd967c50ca7b66a",
"assets/assets/72-73_5-7-1-2.mp3": "ae48b81a9935dbe760f047792151833f",
"assets/assets/72-73_5-7-1-3.png": "606b3e111720daac89abf29bb1b125f1",
"assets/assets/72-73_5-7-1-5.png": "bd81cc4d709de0aaca1a67032e23be1c",
"assets/assets/72-73_5-7-1-6.png": "a65a9b8d7d9a3242083a0bf5eb79f073",
"assets/assets/72-73_5-7-1-7.png": "218c72b40ab4729cf560fb94d3d8e112",
"assets/assets/72-73_5-8-1-1.png": "a1186966cf56e49e013b81d5af6688d3",
"assets/assets/72-73_5-8-1-10.png": "dddbaf99f00c9c12869a8f265e6b02a9",
"assets/assets/72-73_haley01.gif": "3fc1103ba9b603faad7e43d93ca0ef98",
"assets/assets/72-73_haley02.gif": "3fe102eb34d6a2edcd7e634428aa64c9",
"assets/assets/72-73_haley03.gif": "01d8a44467c5c8e6bb79487b4798ae78",
"assets/assets/72-73_haley04.gif": "31828fa1c68c228210eeae4048587c12",
"assets/assets/framework/board_frame.png": "3ea9eff664de694f4a838520eebef28b",
"assets/assets/framework/books_mini.png": "b8d806a2c3b59aaeff648c9a9f512e9d",
"assets/assets/framework/example_background.jpg": "7da791f853de0ec1ac87f3a34dbab756",
"assets/assets/framework/exit_button.png": "44f7acc8c261a6ebeb58591116480cdf",
"assets/assets/framework/friends_mini.png": "85c14cbf4ed1d9e23c5afa1fec9d246a",
"assets/assets/framework/green_background.png": "85e521b04cce70ca49b313a0387aeed8",
"assets/assets/framework/grey_background.png": "8c83895a316579b7bc0364acdb66c116",
"assets/assets/framework/index_background.jpg": "0972cd62f1ba28a95ca14b9b36c7af66",
"assets/assets/framework/index_book1.png": "c5bd52ebf86b6be0f009303777a1a949",
"assets/assets/framework/index_book2.png": "541cae344bd2259c1e745c7c285223dc",
"assets/assets/framework/index_disk.png": "b382e8024da09e69c77bae2a1892d183",
"assets/assets/framework/index_film.png": "d3b80975b3d79bd4c2c530c8dffed942",
"assets/assets/framework/index_film2.png": "14454fe1892867c7c8f175f8ea6e2b52",
"assets/assets/framework/index_mic.png": "38f2f122cd90baa29470de0ef72fa3dd",
"assets/assets/framework/index_paper.png": "bde2d81ea721decb93c5558a74c74d28",
"assets/assets/framework/index_star.png": "5ca058dd2002878edefe3e6f2ff94062",
"assets/assets/framework/korean_mini.png": "2adfdeff648a767c58c37f54a0d8435c",
"assets/assets/framework/main_1.png": "cedfcf3257df65cb2be5e42a0ba7b298",
"assets/assets/framework/main_2.png": "cec70ec5b4e7a8ea1130660734e17adf",
"assets/assets/framework/main_3.png": "46bbbfbd1088faf1783fbaedf070c93e",
"assets/assets/framework/main_5.png": "eac56d12af03792ad70573c281985c17",
"assets/assets/framework/next_page_button.png": "1b27381a1108bd5c8a4c99ddd43939b9",
"assets/assets/framework/pencils.png": "cfe0011e0e39b320eec6f07031c25f81",
"assets/assets/framework/prev_page_button.png": "3738fc8ac25b9f1f1767c73a4a0dba47",
"assets/assets/framework/school_mini.png": "33ef86de927c491a31377d67e30d1d64",
"assets/assets/framework/slide_mini.png": "c59e01e19d9d7981c91b78831ed071d3",
"assets/assets/framework/song_mini.png": "0b075bc0e8274f874eeb76b52cb90a9c",
"assets/assets/framework/study_label.png": "ec9cacf9ff95992332f51887dbaf8f0a",
"assets/assets/framework/three_friends_mini.png": "11c9750f3b36fe4590a2c21734815007",
"assets/assets/haley01.gif": "0c38ed4188381ab0ce2b4fc7bbdfeefa",
"assets/assets/haley02.gif": "3b7714087efda0376eebc2070eac6fe2",
"assets/assets/haley03.gif": "b1552ee0f8805faacb18cbf8abdb76db",
"assets/assets/haley04.gif": "f975998663a16bad932754a632606ac2",
"assets/assets/haley05.gif": "44cf50383f3889fbe6b5e150249228d9",
"assets/assets/img_1.png": "ac22a5e57a673c3214a80a3c3ad5ba22",
"assets/assets/img_2.png": "fbfed8269fdaec000ca1a82bd28f2329",
"assets/assets/img_3.png": "c0695d2ce2fe9c9fcf31486b2ba07a4a",
"assets/assets/img_4.png": "5e0a0e639139b46511bbf9b4ccee1636",
"assets/assets/main.png": "cd80945bb41c967ff97ac338a5cb7f24",
"assets/assets/sounds/1-1-1-1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/1-1-1-2.mp3": "907b91d1c3d42087b6f5f6098f8c5426",
"assets/assets/sounds/1-1-1-3.mp3": "72331d15b895d8ed5efe9d1b810fbe68",
"assets/assets/sounds/1-3-1-1.mp3": "01ed40ca4070305c960a12ca86053f84",
"assets/assets/sounds/1-4-1-1.mp3": "2ac289046080d1198e4098fda6225717",
"assets/assets/sounds/1-7-1-1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/1_1_1.mp3": "152e47e47471122190d3fb8b2ad96a64",
"assets/assets/sounds/2-5-1-1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/2-5-1-2.mp3": "6923e52b064917a35e99da734fe68450",
"assets/assets/sounds/2-5-1-3.mp3": "93b384db22cf9ffda7832f48a6f745e5",
"assets/assets/sounds/2-5-1-4.mp3": "9a65dbbc68a5abf044465f70a879772e",
"assets/assets/sounds/2-5-1-5.mp3": "26c0168c23dcac917c2cc4e3d4c9f975",
"assets/assets/sounds/2-5-1-6.mp3": "b9abc0db7c4adc9fec9dd9f25866dfb6",
"assets/assets/sounds/2-5-1-7.mp3": "c7e4812b18e65b787f7f2cc1ee5551a2",
"assets/assets/sounds/2-6-1-1.mp3": "6923e52b064917a35e99da734fe68450",
"assets/assets/sounds/2-6-1-2.mp3": "98bfa89f26d47b1d7af77235201df003",
"assets/assets/sounds/2-7-1-1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/2-7-1-2.mp3": "c911931a3a99d22028abeeecb9de179f",
"assets/assets/sounds/3-3-1-1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/3-3-1-2.mp3": "87c6d98559981069df9f8af5dcfb87ce",
"assets/assets/sounds/3-3-1-3.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/3-3-1-4.mp3": "a0a26b789dc07a710317c358ca41df20",
"assets/assets/sounds/3-6-1-1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/3-6-1-2.mp3": "582d6eba29d199a9383fe6bd97004ea6",
"assets/assets/sounds/3-7-1-1.mp3": "6923e52b064917a35e99da734fe68450",
"assets/assets/sounds/3-7-1-2.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/3-7-1-3.mp3": "c61ad16ba06ac7aa2715127acaa15f8b",
"assets/assets/sounds/3-8-1-1.mp3": "645014216affc62de7966a1748f459d8",
"assets/assets/sounds/3-8-1-2.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/3-8-1-3.mp3": "26de372686c2b5fc6f0959c1487e294b",
"assets/assets/sounds/4-1-1-1.mp3": "6923e52b064917a35e99da734fe68450",
"assets/assets/sounds/4-1-1-2.mp3": "d55bab4fdad152e8a3f5735f341ee001",
"assets/assets/sounds/56_57_1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/56_57_2.mp3": "6923e52b064917a35e99da734fe68450",
"assets/assets/sounds/56_57_3.mp3": "5c66c2b0c7321acf9d61bf0d15960873",
"assets/assets/sounds/57_58_1.mp3": "013d8b935760a3fc6c7c11485f677257",
"assets/assets/sounds/57_58_2.mp3": "5383a9fe4f1e364160633f687fa0e5bd",
"assets/assets/sounds/59_60_1.mp3": "93b384db22cf9ffda7832f48a6f745e5",
"assets/assets/sounds/59_60_2.mp3": "c5e725790c61a2f7cf7692d352e409ed",
"assets/assets/sounds/61_62_1.mp3": "645014216affc62de7966a1748f459d8",
"assets/assets/sounds/61_62_2.mp3": "362d255b13b0c6ccaebf4cce14d66347",
"assets/assets/sounds/63_64_1.mp3": "362d255b13b0c6ccaebf4cce14d66347",
"assets/assets/sounds/page_start.mp3": "72331d15b895d8ed5efe9d1b810fbe68",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "98ec168a38f33a73ce77ee219ee9de1e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8f9daf53ef25df05e07098bc2c59028",
"/": "f8f9daf53ef25df05e07098bc2c59028",
"main.dart.js": "8055b7412dafb8d8617c88a16a3b766e",
"manifest.json": "58e24dff91eb8494cff8e3b1bcbd279a",
"version.json": "64f9bed53bd2a075f8dc655f09475158"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
