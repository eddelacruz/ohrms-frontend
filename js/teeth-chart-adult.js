    window.onload = function() {
      var obj = Raphael("svg-chart");
      var f1_fill = obj.path("m 38.671374,332.29668 c 1.799598,-0.0638 3.691188,0.23048 5.196977,0.85965 1.17985,0.49295 3.631347,0.82058 6.369226,0.82058 5.562049,0 6.41419,0.52378 8.713725,5.54865 4.508386,9.85154 5.089189,14.84831 2.070975,17.93543 -2.344041,2.39758 -4.929728,3.24327 -9.807826,3.24327 -4.214267,0 -4.311887,-0.0149 -6.369224,-1.99282 -0.983405,-0.94544 -1.790998,-2.08786 -2.420073,-3.42602 -0.485108,-1.85592 -1.666267,-1.40661 -2.933206,0.45631 l -2.227275,2.11006 c -1.352078,1.25479 -3.036597,2.19915 -4.220101,2.42265 -3.678171,0.69464 -7.417505,0.51467 -8.36205,-0.42982 -1.873416,-1.87344 -2.515877,-6.4824 -1.64115,-11.95697 0.372076,-2.32868 0.341511,-2.37566 -0.507976,-1.21131 -1.281075,1.75589 -2.03544,1.49857 -1.641149,-0.54705 0.719416,-3.73242 2.587203,-8.75782 3.7512,-10.19857 1.046002,-1.29474 1.766482,-1.60605 5.157901,-2.03191 2.178146,-0.27349 4.796224,-0.75551 5.822175,-1.09409 C 36.531579,332.50494 37.591617,332.33495 38.671374,332.29666 Z")
      .attr({
        stroke: "none"
      });
      var f1 = obj.path("m 41.562926,263.29025 c -1.566912,0 -3.665488,2.04656 -4.884376,4.72808 -1.094823,2.40861 -1.434382,6.87791 -1.563,21.37404 -0.0075,0.84142 -0.311794,1.21131 -1.055025,1.21131 -1.171902,0 -3.76455,-4.57917 -6.17385,-10.98008 -1.996089,-5.30313 -3.143247,-6.68182 -5.587726,-6.68182 -3.473872,0 -4.070969,1.21811 -3.907501,7.89315 0.115901,4.7329 0.419979,6.38948 1.797451,10.23765 0.904558,2.527 1.7674,5.20338 1.914674,5.93941 0.147275,0.73601 0.808668,2.42633 1.484851,3.75118 0.676184,1.32487 1.913473,4.45284 2.735251,6.95536 0.821777,2.50251 1.629047,4.78535 1.836524,5.07975 0.861599,1.22265 1.038166,5.45005 0.3126,7.77593 -0.71099,2.27916 -4.50124,10.57739 -5.626801,12.30862 -1.192163,1.8337 -4.471374,13.39264 -4.728073,16.68503 -0.312703,4.01059 0.57065,8.49254 1.914673,9.76875 1.904889,1.80878 4.132981,3.42748 5.157901,3.71214 0.588823,0.16351 2.658098,0.22589 4.571775,0.15628 3.625774,-0.1318 6.995133,-1.38574 9.768752,-3.63397 l 1.445775,-1.17226 2.031899,1.60208 c 3.547493,2.84288 4.205693,3.01873 9.299851,2.65711 3.913245,-0.27778 5.105139,-0.57836 7.150726,-1.8756 4.888922,-3.10047 5.655987,-5.53049 4.063801,-12.73845 -0.797282,-3.60938 -2.709044,-10.23712 -3.282301,-11.4099 -0.215859,-0.44164 -1.019704,-2.06689 -1.797449,-3.59489 -2.385036,-4.68579 -2.96245,-7.45909 -2.969701,-14.06702 -0.01004,-9.13242 -1.583796,-22.19859 -4.259176,-35.59732 -1.251885,-6.26968 -3.890454,-14.39053 -4.884375,-15.00481 -0.275355,-0.17018 -0.507975,-0.74417 -0.507975,-1.28947 C 45.822101,265.88993 42.907957,263.2902 41.562926,263.2902 z m -1.055025,3.86843 c 2.203738,-0.25706 5.570396,3.34393 6.681825,7.18979 0.495446,1.71436 1.104396,3.55128 1.367625,4.06381 0.263228,0.51255 0.693706,2.4555 0.976875,4.29825 1.364905,8.88223 1.668548,10.43208 2.149125,12.07417 0.284264,0.9713 0.643641,3.50681 0.820576,5.62681 0.176937,2.12001 0.568613,5.26703 0.859649,7.0335 0.291034,1.76647 0.561555,7.86756 0.6252,13.51994 0.111198,9.87446 0.09084,10.27385 -0.937799,10.55026 -2.317184,0.62271 -6.90944,0.2282 -10.276726,-0.85965 -3.437257,-1.11046 -3.613299,-1.08876 -6.447376,-0.19538 -3.957445,1.24747 -8.44421,1.67507 -8.948175,0.85965 -0.3514,-0.56857 -0.07435,-1.59471 1.328549,-5.11881 2.231461,-5.60549 6.314695,-20.30962 6.681826,-23.99205 0.182389,-1.82943 0.671807,-5.01171 1.0941,-7.07258 0.474903,-2.31764 0.818687,-7.728 0.898725,-14.18424 C 37.525268,269.38518 37.971955,267.4544 40.507901,267.15863 z m -18.287102,7.38522 c 1.598375,0.0609 3.408674,3.11695 5.978476,9.76875 1.227557,3.17752 3.156789,7.1897 4.298249,8.87002 1.141465,1.68032 2.07028,3.67641 2.070976,4.45455 0.0019,2.01684 -1.505877,9.34867 -2.539876,12.3477 -0.482154,1.39845 -1.085009,2.57895 -1.328549,2.57895 -0.378386,0 -1.484851,-2.245 -1.484851,-3.00877 0,-0.14031 -0.698527,-1.78499 -1.562999,-3.63397 -0.864476,-1.849 -1.74289,-4.06137 -1.95375,-4.92346 -0.210867,-0.86202 -0.789059,-2.08843 -1.289476,-2.73524 -1.37183,-1.77316 -4.1212,-9.10797 -4.767149,-12.69939 -0.842418,-4.68376 -0.727293,-7.33793 0.468898,-9.29985 C 20.815418,275.10736 21.494265,274.51616 22.220799,274.54381 z m 16.450575,57.75278 c 1.799598,-0.0638 3.691188,0.23048 5.196977,0.85965 1.17985,0.49295 3.631347,0.82058 6.369226,0.82058 5.562049,0 6.41419,0.52378 8.713725,5.54865 4.508386,9.85154 5.089189,14.84831 2.070975,17.93543 -2.344041,2.39758 -4.929728,3.24327 -9.807826,3.24327 -4.214267,0 -4.311894,-0.0149 -6.369224,-1.99282 -2.606224,-2.50561 -3.977623,-6.3947 -4.063802,-11.64435 -0.04923,-2.99848 0.173307,-4.11848 0.898725,-4.92346 1.32494,-1.47025 1.173801,-1.65175 -1.055025,-1.28946 l -1.953751,0.35167 0.07815,3.47767 c 0.05707,1.91184 0.254695,5.17384 0.429823,7.26796 l 0.312601,3.79026 -2.227275,2.11006 c -1.352078,1.25479 -3.036597,2.19915 -4.220101,2.42265 -3.678171,0.69464 -7.417505,0.51467 -8.36205,-0.42982 -1.873416,-1.87344 -2.515877,-6.4824 -1.64115,-11.95697 0.372076,-2.32868 0.341511,-2.37566 -0.507976,-1.21131 -1.281075,1.75589 -2.03544,1.49857 -1.641149,-0.54705 0.719416,-3.73242 2.587203,-8.75782 3.7512,-10.19857 1.046002,-1.29474 1.766482,-1.60605 5.157901,-2.03191 2.178146,-0.27349 4.796224,-0.75551 5.822175,-1.09409 C 36.531579,332.50494 37.591617,332.33495 38.671374,332.29666 Z")
      .attr({
        fill: "black",
        stroke: "none"
      });
      var m1_fill = obj.path("m 53.84375,379.14343 c 1.802614,-0.0453 3.491515,0.39288 5.875,1.4375 4.897279,2.1463 7.638634,5.96313 8.65625,12.125 0.582797,3.52898 0.515319,3.87416 -0.9375,7.59375 -1.36495,3.49462 -3.920856,6.96875 -5.125,6.96875 -2.213955,2.45517 -3.644297,3.31413 -5.179781,4.66498 -0.342354,1.74587 -1.605013,4.27295 -2.507719,6.05377 -1.837613,3.62516 -4.800745,6.21942 -8.25,7.15625 -5.000401,1.35813 -9.513311,1.48129 -13.125,0.375 -1.766472,-0.54112 -3.918632,-1.1228 -4.75,-1.3125 -2.546016,-0.58094 -5.935852,-4.59839 -6.90625,-8.15625 -1.141655,-4.18573 -1.395979,-8.09568 -0.6875,-9.59375 0.266988,-1.68651 0.314196,-3.63606 1.15625,-4.90625 5.64e-4,-0.009 0.03056,-0.0224 0.03125,-0.0312 0.0762,-0.9832 0.88359,-3.6557 1.84375,-6.0625 2.917128,-7.31228 6.610816,-10.22069 13.28125,-10.34375 2.665462,-0.20128 3.809541,-0.65417 5.65625,-1.25 0.824076,-1.68528 2.881243,-2.81339 7.4375,-4.125 C 51.630472,379.35747 52.762181,379.17058 53.84375,379.14343 Z")
      .attr({
        fill: "yellow",
        stroke: "none"
      });
      var m1 = obj.path("m 55.629926,377.35021 c -0.62467,-10e-4 -1.344242,0.0552 -2.305424,0.11718 -3.300847,0.21313 -4.805531,0.63318 -8.322976,2.38357 -2.501299,1.24473 -6.173321,2.49865 -8.830951,3.04786 -6.15429,1.27176 -7.329835,1.7802 -10.198576,4.14195 -2.84059,2.33859 -4.157832,5.40554 -5.509575,12.77752 -0.458865,2.50251 -1.140944,5.87964 -1.484851,7.54148 -0.524875,2.53625 -0.488949,3.64042 0.273526,6.7209 1.058566,4.27668 3.380472,7.98101 6.134775,9.80782 1.071597,0.71071 3.896704,1.96162 6.252001,2.77433 3.667456,1.26546 5.025575,1.46464 9.417076,1.36763 4.931864,-0.10891 5.251781,-0.19478 8.479275,-2.18821 4.154949,-2.56631 6.564744,-5.1084 8.440202,-8.87002 1.355633,-2.719 3.533336,-5.64295 7.072575,-9.41708 4.61594,-4.9223 7.092188,-14.16007 5.1579,-19.2249 -1.18576,-3.10476 -4.857619,-6.74075 -9.299851,-9.1825 C 58.349197,377.74275 57.503938,377.35389 55.629926,377.35014 z m -1.797449,1.79759 c 1.802614,-0.0453 3.51684,0.40115 5.900325,1.44577 4.897279,2.1463 7.61796,5.95138 8.635576,12.11325 0.582797,3.52898 0.515019,3.86097 -0.9378,7.58056 -1.36495,3.49462 -3.914681,6.99442 -5.118825,6.99442 -0.247975,0 -1.307929,-0.3484 -2.344502,-0.7815 l -1.875599,-0.7815 0.351676,-3.24323 c 0.43627,-3.8561 -0.313716,-4.27226 -1.602075,-0.89872 -1.107145,2.89903 -2.633984,4.36699 -5.392351,5.11884 -2.972514,0.81022 -4.500301,0.74208 -6.994426,-0.39077 -3.628315,-1.64822 -4.623103,-5.75497 -1.992826,-8.20575 0.809632,-0.75439 1.863806,-1.53583 2.305427,-1.7193 0.441617,-0.18352 0.06265,-0.22238 -0.820577,-0.11715 -0.883234,0.10503 -2.024652,0.36577 -2.539875,0.58611 -0.774648,0.3313 -0.9378,0.0961 -0.9378,-1.25039 0,-1.79792 1.297886,-8.47255 2.1882,-11.21452 0.645484,-1.98795 2.642932,-3.20605 7.658702,-4.64994 C 51.633699,379.35432 52.750908,379.17474 53.832477,379.14759 z m -13.637177,5.93923 0.1563,2.071 c 0.09317,1.13405 -0.321652,3.71548 -0.937799,5.74402 -1.035008,3.40753 -1.19554,3.64339 -2.149126,3.04785 -1.51889,-0.94856 -1.844175,-0.21726 -1.0941,2.46172 0.771354,2.75502 0.500876,3.39234 -1.797449,4.33732 -2.216331,0.91129 -5.88714,1.49809 -6.369227,1.01595 -0.211319,-0.2113 -0.39075,-1.45945 -0.39075,-2.73525 0,-3.02598 -0.895354,-2.96343 -1.7193,0.11717 -0.607187,2.26999 -0.753514,2.45367 -2.266349,2.30543 -1.443922,-0.1415 -1.626709,-0.34812 -1.563001,-1.83652 0.03936,-0.91959 0.891757,-3.7077 1.875599,-6.17386 2.917128,-7.31228 6.615069,-10.19275 13.285503,-10.31581 L 40.1953,385.08698 z m -1.914674,18.71694 1.48485,1.71929 c 1.764118,1.99322 4.000547,2.75859 8.713725,3.04786 2.803587,0.17207 3.631992,0.46904 4.45455,1.48485 0.995149,1.22897 1.03493,1.1991 1.79745,0.15629 0.663925,-0.90796 0.848584,-0.92205 1.289475,-0.23444 0.738772,1.15217 0.01331,5.20906 -1.406699,8.01039 -1.837591,3.62517 -4.795571,6.21388 -8.244826,7.15071 -5.000401,1.35813 -9.517513,1.49704 -13.129202,0.39075 -1.766472,-0.54112 -3.896706,-1.13886 -4.728074,-1.32856 -2.546016,-0.58094 -5.945879,-4.6088 -6.916277,-8.16666 -1.375488,-5.04305 -1.4461,-9.64956 -0.117225,-10.1595 0.457451,-0.17554 1.791354,0.11141 2.930626,0.62519 1.898899,0.85627 2.257836,1.40655 4.571776,6.75997 1.388283,3.21188 2.75525,5.97813 3.008774,6.13479 0.906248,0.5601 0.407579,-1.91479 -1.17225,-6.01756 -2.222415,-5.7715 -2.140462,-6.24495 1.055025,-7.61961 3.309423,-1.42366 3.225921,-1.45344 3.243226,0.31259 l 0.03907,1.48485 1.563002,-1.87559 L 38.280626,403.80391 z m 18.873226,3.7512 c 0.157958,-0.0674 0.510084,0.12092 0.9378,0.50797 0.570272,0.51614 1.28911,0.77958 1.602075,0.58613 0.719045,-0.4444 0.748458,0.0422 0.03907,1.36764 -0.713709,1.33355 -1.602102,1.33517 -1.602075,0 0,-0.57147 -0.252638,-1.18569 -0.54705,-1.36764 -0.294412,-0.18182 -0.507975,-0.61503 -0.507975,-0.93767 C 57.075702,407.63073 57.101199,407.5776 57.153852,407.55511 Z")
      .attr({
        fill: "black",
        stroke: "none"
      });


    }