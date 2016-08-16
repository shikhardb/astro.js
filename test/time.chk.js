(function ()
{

	// created via libnova
	// using ln_get_jde(JD)
	var times = [
		[1000.0000000000000, 1002.0088344213356, 9.9326283931732, 9.9329044511706, 0.0041408699620, 0.0013635058328, 24.1589378418946],
		[13371.3269999999993, 13373.3136831122520, 14.6971731026967, 14.6971660872579, -0.0001052315830, 0.0023389241212, 24.1568325373098],
		[25742.6539999999986, 25744.6186552901927, 19.4617238283157, 19.4614208319380, -0.0045449456666, 0.0008784864847, 24.1547040546830],
		[38113.9809999999998, 38115.9237509551604, 0.2262805700302, 0.2260554515139, -0.0033767777465, -0.0015882171622, 24.1525525114281],
		[50485.3079999999973, 50487.2289701071568, 4.9908433119456, 4.9909629541098, 0.0017946324646, -0.0023932220640, 24.1503780249593],
		[62856.6349999999948, 62858.5343127461674, 9.7554120699565, 9.7557181961225, 0.0045918924903, -0.0004070386163, 24.1481807126903],
		[75227.9619999999995, 75229.8397788722214, 14.5199868440628, 14.5201263712720, 0.0020929081395, 0.0020795816851, 24.1459606920354],
		[87599.2890000000043, 87601.1453684852895, 19.2845676263173, 19.2843999107953, -0.0025157328328, 0.0022823166000, 24.1437180804085],
		[99970.6160000000091, 99972.4510815854010, 0.0491544246674, 0.0488849857405, -0.0040415839032, -0.0002643677917, 24.1414529952236],
		[112341.9430000000139, 112343.7569181725266, 4.8137472311656, 4.8136537147980, -0.0014027455144, -0.0026363847237, 24.1391655538948],
		[124713.2700000000186, 124715.0628782466665, 9.5783460378647, 9.5785392752648, 0.0028985610029, -0.0017070745331, 24.1368558738361],
		[137084.5970000000088, 137086.3689618078351, 14.3429508686066, 14.3432268361490, 0.0041395131377, 0.0011235019189, 24.1345240724616],
		[149455.9239999999991, 149457.6751688560180, 19.1075617074966, 19.1075969410411, 0.0005285031668, 0.0025103994418, 24.1321702671853],
		[161827.2509999999893, 161828.9814993912296, 23.8721785465876, 23.8719255760641, -0.0037945578529, 0.0010744137518, 24.1297945754213],
		[174198.5779999999795, 174200.2879534134699, 4.6368013858795, 4.6365342299732, -0.0040073385956, -0.0015269660634, 24.1273971145836],
		[186569.9049999999697, 186571.5945309227391, 9.4014302492142, 9.4014902711895, 0.0009003296311, -0.0023271512434, 24.1249780020864],
		[198941.2319999999600, 198942.9012319190369, 14.1660651206970, 14.1663821497138, 0.0047554352514, -0.0006197730781, 24.1225373553437],
		[211312.5589999999502, 211314.2080564023345, 18.9307059923808, 18.9308750080438, 0.0025352349468, 0.0017952612706, 24.1200752917696],
		[223683.8859999999404, 223685.5150043726899, 23.6953528722127, 23.6952022618297, -0.0022591557469, 0.0023434063897, 24.1175919287782],
		[236055.2129999999306, 236056.8220758300449, 4.4600057601929, 4.4597119863859, -0.0044066071053, 0.0001209374958, 24.1150873837836],
		[248426.5399999999208, 248428.1292707744287, 9.2246646563212, 9.2245594901800, -0.0015774921191, -0.0023584996720, 24.1125617741999],
		[260797.8669999999111, 260799.4365892058413, 13.9893295447032, 13.9895239255313, 0.0029157124233, -0.0020982293912, 24.1100152174413],
		[273169.1939999999013, 273170.7440311242826, 18.7540004571279, 18.7542626120088, 0.0039323232136, 0.0007306924607, 24.1074478309219],
		[285540.5209999998915, 285542.0515965297818, 23.5186773459117, 23.5187394291367, 0.0009312483772, 0.0026588129637, 24.1048597320558],
		[297911.8479999998817, 297913.3592854222516, 4.2833602666855, 4.2831386162671, -0.0033247562769, 0.0013618822268, 24.1022510382571],
		[310283.1749999998719, 310284.6670978017501, 9.0480491797129, 9.0477648227802, -0.0042653539928, -0.0013612548806, 24.0996218669400],
		[322654.5019999998622, 322655.9750336683355, 13.8127441008886, 13.8127496395257, 0.0000830795576, -0.0024575274641, 24.0969723355187],
		[335025.8289999998524, 335027.2830930218915, 18.5774450222651, 18.5777411236894, 0.0044415213648, -0.0007795126451, 24.0943025614073],
		[347397.1559999998426, 347398.5912758624763, 23.3421519517899, 23.3423847607966, 0.0034921351021, 0.0016968755549, 24.0916126620200],
		[359768.4829999998328, 359769.8995821900899, 4.1068648735682, 4.1067609635643, -0.0015586500607, 0.0022375735819, 24.0889027547709],
		[372139.8099999998230, 372141.2080120047322, 8.8715838034948, 8.8712652149411, -0.0047788283046, 0.0004305295846, 24.0861729570743],
		[384511.1369999998133, 384512.5165653064032, 13.6363087336222, 13.6361684878156, -0.0021036871012, -0.0020523700897, 24.0834233863443],
		[396882.4639999998035, 396883.8252420951030, 18.4010396639506, 18.4012198370360, 0.0027025962826, -0.0022939978288, 24.0806541599951],
		[409253.7909999997937, 409255.1340423708316, 23.1657765944799, 23.1660492004582, 0.0040890896745, 0.0003096826272, 24.0778653954409],
		[421625.1179999997839, 421626.4429661335889, 3.9305195252101, 3.9305979341085, 0.0011761334780, 0.0025278111139, 24.0750572100960],
		[433996.4449999997742, 433997.7520133833750, 8.6952684640884, 8.6950681518594, -0.0030046834376, 0.0017988754211, 24.0722297213746],
		[446367.7719999997644, 446369.0611841201899, 13.4600233952204, 13.4597633736244, -0.0039003239406, -0.0010723468292, 24.0693830466908],
		[458739.0989999997546, 458740.3704783439753, 18.2247843186061, 18.2247522747269, -0.0004806581882, -0.0026713338746, 24.0665173034590],
		[471110.4259999997448, 471111.6798960548476, 22.9895512580872, 22.9898080413229, 0.0038517485374, -0.0010041640473, 24.0636326090933],
		[483481.7529999997350, 483482.9894372526905, 3.7543241818746, 3.7545879095344, 0.0039559148987, 0.0015941375473, 24.0607290810081],
		[495853.0799999997253, 495854.2991019376204, 8.5191030979157, 8.5190436174241, -0.0008922073746, 0.0022924819285, 24.0578068366175],
		[508224.4069999997155, 508225.6088901095209, 13.2838880300522, 13.2835749639334, -0.0046959917816, 0.0005939058438, 24.0548659933358],
		[520595.7339999997057, 520596.9188017685083, 18.0486789464951, 18.0484833406688, -0.0029340873953, -0.0018642136035, 24.0519066685773],
		[532967.0609999997541, 532968.2288369145244, 22.8134758710861, 22.8136358966997, 0.0024003842061, -0.0022452920371, 24.0489289797562],
		[545338.3879999998026, 545339.5389955475694, 3.5782787879308, 3.5785941426380, 0.0047303206075, -0.0000766542779, 24.0459330442869],
		[557709.7149999998510, 557710.8492776677012, 8.3430876890818, 8.3431823851258, 0.0014204406600, 0.0022543604590, 24.0429189795836],
		[570081.0419999998994, 570082.1596832748037, 13.1079025983810, 13.1077084605520, -0.0029120674381, 0.0021244976146, 24.0398869030607],
		[582452.3689999999478, 582453.4702123688767, 17.8727234999339, 17.8724537616542, -0.0040460741959, -0.0006913690697, 24.0368369321324],
		[594823.6959999999963, 594824.7808649500366, 22.6375503937403, 22.6374909725237, -0.0008913182511, -0.0026843175892, 24.0337691842130],
		[607195.0230000000447, 607196.0916410182836, 3.4023832798004, 3.4026137158124, 0.0034565401803, -0.0014190752265, 24.0306837767168],
		[619566.3500000000931, 619567.4025405735010, 8.1672221660614, 8.1674800322017, 0.0038679921052, 0.0014175424626, 24.0275808270583],
		[631937.6770000001416, 631938.7135636156891, 12.9320670445760, 12.9320682348701, 0.0000178544115, 0.0025309621320, 24.0244604526517],
		[644309.0040000001900, 644310.0247101449640, 17.6969179153442, 17.6966379704793, -0.0041991729737, 0.0007069995583, 24.0213227709113],
		[656680.3310000002384, 656681.3359801613260, 22.4617747783661, 22.4615274032699, -0.0037106264443, -0.0017396886034, 24.0181678992515],
		[669051.6580000002868, 669052.6473736645421, 3.2266376336416, 3.2267490737122, 0.0016716010608, -0.0022473786624, 24.0149959550866],
		[681422.9850000003353, 681423.9588906549616, 7.9915064811707, 7.9918248346719, 0.0047753025183, -0.0003174330875, 24.0118070558310],
		[693794.3120000003837, 693795.2705311323516, 12.7563813130061, 12.7565195100688, 0.0020729559416, 0.0020578116251, 24.0086013188992],
		[706165.6390000004321, 706166.5822950967122, 17.5212621450424, 17.5210755780231, -0.0027985052913, 0.0021341570713, 24.0053788617053],
		[718536.9660000004806, 718537.8941825481597, 22.2861489693324, 22.2858539653702, -0.0044250594334, -0.0002056622375, 24.0021398016639],
		[730908.2930000005290, 730909.2061934865778, 3.0510417779287, 3.0509812552998, -0.0009078394336, -0.0025215604145, 23.9988842561893],
		[743279.6200000005774, 743280.5183279120829, 7.8159405787786, 7.8161603969696, 0.0032972728672, -0.0018554592974, 23.9956123426958],
		[755650.9470000006258, 755651.8305858245585, 12.5808453639348, 12.5810981639844, 0.0037920007446, 0.0011403079518, 23.9923241785980],
		[768022.2740000006743, 768023.1429672240047, 17.3457561492920, 17.3457824260464, 0.0003941513171, 0.0026335562729, 23.9890198813102],
		[780393.6010000007227, 780394.4554721105378, 22.1106729189555, 22.1104155772728, -0.0038601252404, 0.0010676542023, 23.9856995682469],
		[792764.9280000007711, 792765.7681004841579, 2.8755956649780, 2.8753355582699, -0.0039016006228, -0.0016568708515, 23.9823633568223],
		[805136.2550000008196, 805137.0808523447486, 7.6405244112015, 7.6405739358347, 0.0007428694996, -0.0024191780914, 23.9790113644511],
		[817507.5820000008680, 817508.3937276924262, 12.4054591417313, 12.4057729054374, 0.0047064555918, -0.0003992686433, 23.9756437085475],
		[829878.9090000009164, 829879.7067265270744, 17.1703998645147, 17.1706066853492, 0.0031023125197, 0.0018879917032, 23.9722605065262],
		[842250.2360000009649, 842251.0198488486931, 21.9353465636571, 21.9351908209357, -0.0023361408232, 0.0021316572419, 23.9688618758014],
		[854621.5630000010133, 854622.3330946573988, 2.7002992550532, 2.6999815470413, -0.0047656201780, 0.0001003857323, 23.9654479337877],
		[866992.8900000010617, 866993.6464639530750, 7.4652579387029, 7.4651551684837, -0.0015415532897, -0.0022871900452, 23.9620187978995],
		[879364.2170000011101, 879364.9599567358382, 12.2302225907644, 12.2304344443685, 0.0031778040646, -0.0020457870601, 23.9585745855513],
		[891735.5440000011586, 891736.2735730056884, 16.9951932430267, 16.9954661106846, 0.0040930148684, 0.0006749317487, 23.9551154141576],
		[904106.8710000012070, 904107.5873127623927, 21.7601698716482, 21.7602031748336, 0.0004995477829, 0.0026043921023, 23.9516414011329],
		[916478.1980000012554, 916478.9011760063004, 2.5251524925232, 2.5249284062579, -0.0033612939804, 0.0015357208266, 23.9481526638916],
		[928849.5250000013039, 928850.2151627370622, 7.2901410897573, 7.2898919011040, -0.0037378298000, -0.0014650369933, 23.9446493198483],
		[941220.8520000013523, 941221.5292729550274, 12.0551356712977, 12.0551420394944, 0.0000955229504, -0.0026127155766, 23.9411314864174],
		[953592.1790000014007, 953592.8435066598468, 16.8201362450918, 16.8204232134864, 0.0043045259202, -0.0006482391816, 23.9375992810135],
		[965963.5060000014491, 965964.1578638518695, 21.5851427872976, 21.5853747009891, 0.0034787053746, 0.0018105406656, 23.9340528210511],
		[978334.8330000014976, 978335.4723445307463, 2.3501553217570, 2.3500536124328, -0.0015256398638, 0.0022448208514, 23.9304922239448],
		[990706.1600000015460, 990706.7869486967102, 7.1151738325755, 7.1148508647447, -0.0048445174623, 0.0001961880936, 23.9269176071089],
		[1003077.4870000015944, 1003078.1016763497610, 11.8801983237267, 11.8800370675440, -0.0024188427410, -0.0020552186735, 23.9233290879582],
		[1015448.8140000016429, 1015449.4165274897823, 16.6452287991842, 16.6454374917237, 0.0031303880945, -0.0020633362496, 23.9197267839072],
		[1027820.1410000016913, 1027820.7315021168906, 21.4102652549744, 21.4105699722709, 0.0045707594483, 0.0002541331052, 23.9161108123703],
		[1040191.4680000017397, 1040192.0466002309695, 2.1753076910973, 2.1753616706912, 0.0008096939095, 0.0024670047598, 23.9124812907622],
		[1052562.7950000017881, 1052563.3618218321353, 6.9403561115265, 6.9401324603702, -0.0033547673463, 0.0018098114429, 23.9088383364975],
		[1064934.1220000018366, 1064934.6771669201553, 11.7054105043411, 11.7051454165424, -0.0039763169814, -0.0010484714594, 23.9051820669906],
		[1077305.4490000018850, 1077305.9926354952622, 16.4704708774885, 16.4704615195341, -0.0001403693149, -0.0027138771512, 23.9015125996563],
		[1089676.7760000019334, 1089677.3082275574561, 21.2355372309685, 21.2357923921703, 0.0038274180286, -0.0011058856765, 23.8978300519091],
		[1102048.1030000019819, 1102048.6239431067370, 2.0006095608075, 2.0008485431147, 0.0035847346095, 0.0017782566450, 23.8941345411635],
		[1114419.4300000020303, 1114419.9397821428720, 6.7656878670057, 6.7656486049077, -0.0005889314693, 0.0024046545242, 23.8904261848342],
		[1126790.7570000020787, 1126791.2557446660940, 11.5307721575101, 11.5304625197544, -0.0046445663359, 0.0003765739671, 23.8867051003359],
		[1139162.0840000021271, 1139162.5718306764029, 16.2958624204000, 16.2956527325886, -0.0031453171729, -0.0019703663388, 23.8829714050830],
		[1151533.4110000021756, 1151533.8880401737988, 21.0609586596489, 21.0611140944688, 0.0023315222996, -0.0021357268260, 23.8792252164903],
		[1163904.7380000022240, 1163905.2043731580488, 1.8260608752569, 1.8263808586604, 0.0047997510530, 0.0000942983767, 23.8754666519724],
		[1176276.0650000022724, 1176276.5208296293858, 6.5911690672239, 6.5912729169918, 0.0015577465198, 0.0021968804828, 23.8716958289439],
		[1188647.3920000023209, 1188647.8374095878098, 11.3562832315763, 11.3560536072192, -0.0034443653577, 0.0019377366163, 23.8679128648195],
		[1201018.7190000023693, 1201019.1541130333208, 16.1214033802350, 16.1211238006448, -0.0041936938533, -0.0005833762218, 23.8641178770138],
		[1213390.0460000024177, 1213390.4709399656858, 20.8865294933319, 20.8865104859195, -0.0002851111870, -0.0026595194658, 23.8603109829415],
		[1225761.3730000024661, 1225761.7878903851379, 1.6516615867615, 1.6519050481848, 0.0036519213505, -0.0014911928840, 23.8564923000172],
		[1238132.7000000025146, 1238133.1049642916769, 6.4167996486028, 6.4170409734302, 0.0036198724118, 0.0014807196698, 23.8526619456557],
		[1250504.0270000025630, 1250504.4221616850700, 11.1819436868032, 11.1819177679302, -0.0003887830952, 0.0025972150415, 23.8488200372716],
		[1262875.3540000026114, 1262875.7394825657830, 15.9470936973890, 15.9468170553154, -0.0041496311043, 0.0007268189066, 23.8449666922795],
		[1275246.6810000026599, 1275247.0569269333500, 20.7122496803602, 20.7120155236164, -0.0035123511589, -0.0019795615290, 23.8411020280943],
		[1287618.0080000027083, 1287618.3744947877713, 1.4774116396904, 1.4775086303490, 0.0014548598808, -0.0022643409758, 23.8372261621306],
		[1299989.3350000027567, 1299989.6921861295123, 6.2425795674324, 6.2429123549923, 0.0049918133978, -0.0000271068523, 23.8333392118031],
		[1312360.6620000028051, 1312361.0100009581074, 11.0077534635862, 11.0079148304475, 0.0024205029210, 0.0020607341218, 23.8294412945265],
		[1324731.9890000028536, 1324732.3279392737895, 15.7729333360990, 15.7727350627765, -0.0029740998394, 0.0019988168523, 23.8255325277155],
		[1337103.3160000029020, 1337103.6460010765586, 20.5381191730499, 20.5378042575115, -0.0047237330767, -0.0003229806004, 23.8216130287850],
		[1349474.6430000029504, 1349474.9641863661818, 1.3033109863599, 1.3032492004073, -0.0009267892906, -0.0024253117823, 23.8176829151495],
		[1361845.9700000029989, 1361846.2824951428920, 6.0685087680817, 6.0687599143930, 0.0037671946712, -0.0017496822027, 23.8137423042240],
		[1374217.2970000030473, 1374217.6009274066892, 10.8337125182152, 10.8339668577192, 0.0038150925614, 0.0010196049344, 23.8097913134230],
		[1386588.6240000030957, 1386588.9194831575733, 15.5989222367605, 15.5989127545652, -0.0001422329288, 0.0026959818942, 23.8058300601615],
		[1398959.9510000031441, 1398960.2381623953115, 20.3641379237175, 20.3638907060563, -0.0037082649192, 0.0011369272787, 23.8018586618541],
		[1411331.2780000031926, 1411331.5569651201367, 1.1293595790863, 1.1291252479845, -0.0035149665293, -0.0017921740797, 23.7978772359156],
		[1423702.6050000032410, 1423702.8758913320489, 5.8945872028669, 5.8946452207304, 0.0008702679538, -0.0024994094670, 23.7938858997608],
		[1436073.9320000032894, 1436074.1949410308152, 10.6598207950592, 10.6601251820924, 0.0045658054978, -0.0002980234081, 23.7898847708045],
		[1448445.2590000033379, 1448445.5141142169014, 15.4250603516897, 15.4252557809604, 0.0029314390633, 0.0020895349224, 23.7858739664614],
		[1460816.5860000033863, 1460816.8334108898416, 20.1903058767319, 20.1901635691243, -0.0021346141145, 0.0020499802191, 23.7818536041465],
		[1473187.9130000034347, 1473188.1528310498688, 0.9555573662122, 0.9552218161980, -0.0050332502136, -0.0001811966042, 23.7778238012744],
		[1485559.2400000034831, 1485559.4723746967502, 5.7208148201307, 5.7207048403379, -0.0016496968923, -0.0022167049860, 23.7737846752601],
		[1497930.5670000035316, 1497930.7920418307185, 10.4860782424609, 10.4863270557475, 0.0037321993013, -0.0018613998659, 23.7697363435183],
		[1510301.8940000035800, 1510302.1118324517738, 15.2513476332029, 15.2516349409070, 0.0043096155627, 0.0006840470083, 23.7656789234639],
		[1522673.2210000036284, 1522673.4317465599161, 20.0166229804357, 20.0166374020878, 0.0002163247821, 0.0025464089070, 23.7616125325116],
		[1535044.5480000036769, 1535044.7517841549125, 0.7819042960803, 0.7816439206113, -0.0039056320359, 0.0014821373803, 23.7575372880764],
		[1547415.8750000037253, 1547416.0719452372286, 5.5471915761630, 5.5469508364434, -0.0036110957941, -0.0014068500427, 23.7534533075732],
		[1559787.2020000037737, 1559787.3922298063990, 10.3124848167102, 10.3125247803241, 0.0005994542094, -0.0027231402267, 23.7493607084166],
		[1572158.5290000038221, 1572158.7126378624234, 15.0777840216955, 15.0780573163816, 0.0040994202922, -0.0006725109855, 23.7452596080217],
		[1584529.8560000038706, 1584530.0331694057677, 19.8430891871452, 19.8433083269177, 0.0032870965889, 0.0020528417561, 23.7411501238033],
		[1596901.1830000039190, 1596901.3538244359661, 0.6084003210068, 0.6083039839440, -0.0014450559427, 0.0022535928671, 23.7370323731762],
		[1609272.5100000039674, 1609272.6746029532515, 5.3737174113592, 5.3733972457686, -0.0048024838576, 0.0000103429021, 23.7329064735554],
		[1621643.8370000040159, 1621643.9955049573909, 10.1390404661496, 10.1388716812024, -0.0025317742112, -0.0022125506583, 23.7287725423557],
		[1634015.1640000040643, 1634015.3165304486174, 14.9043694774310, 14.9045686343973, 0.0029873544959, -0.0018986030311, 23.7246306969921],
		[1646386.4910000041127, 1646386.6376794271637, 19.6697044531504, 19.6700274316582, 0.0048446776173, 0.0004866506882, 23.7204810548795],
		[1658757.8180000041611, 1658757.9589518923312, 0.4350453853607, 0.4350961297866, 0.0007611663881, 0.0023034749746, 23.7163237334327],
		[1671129.1450000042096, 1671129.2803478448186, 5.2003922820091, 5.2001313892976, -0.0039133906742, 0.0017011503189, 23.7121588500667],
		[1683500.4720000042580, 1683500.6018672841601, 9.9657451351484, 9.9654821916290, -0.0039441527910, -0.0010277658625, 23.7079865221964],
		[1695871.7990000043064, 1695871.9235102105886, 14.7311039487521, 14.7311293349627, 0.0003807931599, -0.0026811638157, 23.7038068672368],
		[1708243.1260000043549, 1708243.2452766241040, 19.4964687188466, 19.4967406984174, 0.0040796935614, -0.0010922124078, 23.6996200026028],
		[1720614.4530000044033, 1720614.5671665244736, 0.2618394474188, 0.2620500588077, 0.0031591708348, 0.0017883327953, 23.6954260457094],
		[1732985.7800000044517, 1732985.8891799121629, 5.0272161344687, 5.0271443227882, -0.0010771752092, 0.0025511394962, 23.6912251139714],
		[1745357.1070000045002, 1745357.2113167867064, 9.7925987780094, 9.7923064016035, -0.0043856460883, 0.0002718470084, 23.6870173248039],
		[1757728.4340000045486, 1757728.5335771481041, 14.5579873800278, 14.5577857134857, -0.0030249981332, -0.0022208769485, 23.6828027956219],
		[1770099.7610000045970, 1770099.8559609968215, 19.3233819385370, 19.3235351328080, 0.0022979140667, -0.0020511166215, 23.6785816438403],
		[1782471.0880000046454, 1782471.1784683323931, 0.0887824515502, 0.0891166599597, 0.0050131261427, 0.0003399548236, 23.6743539868740],
		[1794842.4150000046939, 1794842.5010991550516, 4.8541889210542, 4.8542998183869, 0.0016634599921, 0.0022654758908, 23.6701199421382],
		[1807213.7420000047423, 1807213.8238534645643, 9.6196013470491, 9.6193625473926, -0.0035819948489, 0.0017206469066, 23.6658796270478],
		[1819585.0690000047907, 1819585.1467312613968, 14.3850197255611, 14.3847092383647, -0.0046573079471, -0.0007233698998, 23.6616331590177],
		[1831956.3960000048392, 1831956.4697325450834, 19.1504440585772, 19.1504386175032, -0.0000816161111, -0.0025018769717, 23.6573806554631],
		[1844327.7230000048876, 1844327.7928573158570, 23.9158743480841, 23.9161564168069, 0.0042310308423, -0.0014350837559, 23.6531222337989],
		[1856699.0500000049360, 1856699.1161055734847, 4.6813105901082, 4.6815383678309, 0.0034166658403, 0.0014334240080, 23.6488580114402],
		[1869070.3770000049844, 1869070.4394773184322, 9.4467527846495, 9.4467023007217, -0.0007572589183, 0.0026523981468, 23.6445881058019],
		[1881441.7040000050329, 1881441.7629725502338, 14.2122009356817, 14.2119255232063, -0.0041311871303, 0.0007157669904, 23.6403126342992],
		[1893813.0310000050813, 1893813.0865912688896, 18.9776550352573, 18.9774529947916, -0.0030306069874, -0.0020852013180, 23.6360317143471],
		[1906184.3580000051297, 1906184.4103334748652, 23.7431150873502, 23.7432249468481, 0.0016478924694, -0.0023600444177, 23.6317454633606],
		[1918555.6850000051782, 1918555.7341991676949, 4.5085810939471, 4.5088898520155, 0.0046313710260, 0.0001474975193, 23.6274539987548],
		[1930927.0120000052266, 1930927.0581883476116, 9.2740530490875, 9.2742134157854, 0.0024055004705, 0.0022925388603, 23.6231574379448],
		[1943298.3390000052750, 1943298.3823010146152, 14.0395309547583, 14.0393348507038, -0.0029415608195, 0.0017921957272, 23.6188558983456],
		[1955669.6660000053234, 1955669.7065371684730, 18.8050148129463, 18.8046857055320, -0.0049366112154, -0.0005571446268, 23.6145494973723],
		[1968040.9930000053719, 1968041.0308968094178, 23.5705046196779, 23.5704504820279, -0.0008120647502, -0.0023749911802, 23.6102383524401],
		[1980412.3200000054203, 1980412.3553799374495, 4.3360003769398, 4.3362817900685, 0.0042211969330, -0.0015423592049, 23.6059225809639],
		[1992783.6470000054687, 1992783.6799865525682, 9.1015020847321, 9.1017734598503, 0.0040706267748, 0.0011017839694, 23.6016023003590],
		[2005154.9740000055172, 2005155.0047166545410, 13.8670097390811, 13.8669683751736, -0.0006204586133, 0.0025385925963, 23.5972776280404],
		[2017526.3010000055656, 2017526.3295702438336, 18.6325233419736, 18.6322379708420, -0.0042805669746, 0.0011432204134, 23.5929486814233],
		[2029897.6280000056140, 2029897.6545473199803, 23.3980428934097, 23.3978346488113, -0.0031236689782, -0.0018144453948, 23.5886155779227],
		[2042268.9550000056624, 2042268.9796478829812, 4.1635683933894, 4.1636557533435, 0.0013103993132, -0.0026070497691, 23.5842784349539],
		[2054640.2820000057109, 2054640.3048719330691, 8.9290998399258, 8.9293950808636, 0.0044286140679, -0.0002035917566, 23.5799373699318],
		[2067011.6090000057593, 2067011.6302194704767, 13.6946372330189, 13.6948158315057, 0.0026789773052, 0.0022610154276, 23.5755925002718],
		[2079382.9360000058077, 2079382.9556623501703, 18.4601805746555, 18.4600340116287, -0.0021984454044, 0.0020901797169, 23.5712439433988],
		[2091754.2630000058562, 2091754.2811593462247, 23.2257298608621, 23.2254066703102, -0.0048478582794, -0.0004535517481, 23.5668918167426],
		[2104125.5900000059046, 2104125.6067160940729, 3.9912850926320, 3.9911620692612, -0.0018453505633, -0.0023673111223, 23.5625362377163],
		[2116496.9170000059530, 2116496.9323325939476, 8.7568462689718, 8.7570957342542, 0.0037419792381, -0.0015834107874, 23.5581773237352],
		[2128868.2440000060014, 2128868.2580088456161, 13.5224133918683, 13.5227207237155, 0.0046099777094, 0.0008454676505, 23.5538151922146],
		[2141239.5710000060499, 2141239.5837448490784, 18.2879864583413, 18.2879820452961, -0.0000661956778, 0.0024300277531, 23.5494499605695],
		[2153610.8980000060983, 2153610.9095406038687, 23.0535654683908, 23.0532776918050, -0.0043166487875, 0.0013120622161, 23.5450817462154],
		[2165982.2250000061467, 2165982.2353961109184, 3.8191504230102, 3.8189087262069, -0.0036254520505, -0.0014176095044, 23.5407106665674],
		[2178353.5520000061952, 2178353.5613113692962, 8.5847413212061, 8.5848237817673, 0.0012369084190, -0.0026262195827, 23.5363368390408],
		[2190724.8790000062436, 2190724.8872863799334, 13.3503381609917, 13.3506276366671, 0.0043421351316, -0.0006841014834, 23.5319603810507],
		[2203096.2060000062920, 2203096.2133211423643, 18.1159409443537, 18.1161131887121, 0.0025836653772, 0.0021372653748, 23.5275814100125],
		[2215467.5330000063404, 2215467.5394156561233, 22.8815496693055, 22.8814344206333, -0.0017287300839, 0.0023597214421, 23.5232000433414],
		[2227838.8600000063889, 2227838.8655699221417, 3.6471643358469, 3.6468549258024, -0.0046411506670, -0.0001862541266, 23.5188163984527],
		[2240210.1870000064373, 2240210.1917839394882, 8.4127849439780, 8.4126333075598, -0.0022745462745, -0.0024108660332, 23.5144305927615],
		[2252581.5140000064857, 2252581.5180577090941, 13.1784114917119, 13.1786155425776, 0.0030607629860, -0.0018031687505, 23.5100427436833],
		[2264952.8410000065342, 2264952.8443912300281, 17.9440439810355, 17.9443657684877, 0.0048268117829, 0.0007882049784, 23.5056529686331],
		[2277324.1680000065826, 2277324.1707845032215, 22.7096824104587, 22.7097436834882, 0.0009190954436, 0.0023669455902, 23.5012613850264],
		[2289695.4950000066310, 2289695.4972375277430, 3.4753267794847, 3.4750406377703, -0.0042921257185, 0.0013804475899, 23.4968681102783],
		[2302066.8220000066794, 2302066.8237503045239, 8.2409770871202, 8.2406909284117, -0.0042923806287, -0.0011058109203, 23.4924732618041],
		[2314438.1490000067279, 2314438.1501070237719, 13.0066333343585, 13.0066889082096, 0.0008336077675, -0.0025479167961, 23.4880769570959],
		[2326809.4760000067763, 2326809.4764208761044, 17.7722955202063, 17.7725976473753, 0.0045319075363, -0.0010100431799, 23.4836793135287],
		[2339180.8030000068247, 2339180.8031041733921, 22.5379636431734, 22.5381644352581, 0.0030118812728, 0.0018100410656, 23.4792804483712],
		[2351552.1300000068732, 2351552.1301273214631, 3.3036377042532, 3.3035309073366, -0.0016019537499, 0.0025083015578, 23.4748804790492],
		[2363923.4570000069216, 2363923.4571736180224, 8.0693177029490, 8.0690260427813, -0.0043749025161, 0.0002884432905, 23.4704795230905],
		[2376294.7840000069700, 2376294.7841851045378, 12.8350036382675, 12.8348440329670, -0.0023940795093, -0.0023884324139, 23.4660776979310],
		[2388666.1110000070184, 2388666.1110888523981, 17.6006955099603, 17.6008510281501, 0.0023327728491, -0.0021111024581, 23.4616751210121],
		[2401037.4380000070669, 2401037.4380823513493, 22.3663933177789, 22.3667074085541, 0.0047113616286, 0.0006338690183, 23.4572719096788],
		[2413408.7650000071153, 2413408.7649332042783, 3.1320970609784, 3.1322056709770, 0.0016291499806, 0.0023897506382, 23.4528681814291],
		[2425780.0920000071637, 2425780.0922754928470, 7.8978067395588, 7.8975636592641, -0.0036462044212, 0.0015284410474, 23.4484640534525],
		[2438151.4190000072122, 2438151.4194134068675, 12.6635223531475, 12.6632128057072, -0.0046432116046, -0.0010073921911, 23.4440596434122],
		[2450522.7460000072606, 2450522.7467171461321, 17.4292439010305, 17.4292462533441, 0.0000352847051, -0.0024388251372, 23.4396550685916],
		[2462894.0730000073090, 2462894.0746647622436, 22.1949713829594, 22.1952862065996, 0.0047223546040, -0.0011243393694, 23.4352504462358],
		[2475265.4000000073574, 2475265.4022712386213, 2.9607047984997, 2.9609444693387, 0.0035950625860, 0.0014432796679, 23.4308458941109],
		[2487636.7270000074059, 2487636.7299640229903, 7.7264441472789, 7.7263410400033, -0.0015466091343, 0.0025322999333, 23.4264415294800],
		[2500008.0540000074543, 2500008.0577431158163, 12.4921894289553, 12.4918918032545, -0.0044643855130, 0.0006737578461, 23.4220374697584],
		[2512379.3810000075027, 2512379.3856085161678, 17.2579406430324, 17.2577675267631, -0.0025967440407, -0.0021589429269, 23.4176338323616],
		[2524750.7080000075512, 2524750.7135602254421, 22.0236977890134, 22.0238427319090, 0.0021741434364, -0.0023805036704, 23.4132307347048],
		[2537122.0350000075996, 2537122.0415982422419, 2.7894608666499, 2.7897655971454, 0.0045709574320, 0.0002435578166, 23.4088282942034],
		[2549493.3620000076480, 2549493.3697225674987, 7.5552298759421, 7.5553563111345, 0.0018965278876, 0.0024868445938, 23.4044266282727],
		[2561864.6890000076964, 2561864.6979332007468, 12.3210048153996, 12.3208152654190, -0.0028432497106, 0.0017922936048, 23.4000258543282],
		[2574236.0160000077449, 2574236.0262301419862, 17.0867856855194, 17.0864609302609, -0.0048713288778, -0.0009254912812, 23.3956260897851],
		[2586607.3430000077933, 2586607.3546133916825, 21.8525724853079, 21.8525106532058, -0.0009274815321, -0.0024271325947, 23.3912274520589],
		[2598978.6700000078417, 2598978.6830829493701, 2.6183652157585, 2.6186590157474, 0.0044069998354, -0.0012487253600, 23.3868300585649],
		[2611349.9970000078902, 2611350.0116388150491, 7.3841638743877, 7.3844399603082, 0.0041412888082, 0.0012719013569, 23.3824340267185],
		[2623721.3240000079386, 2623721.3402809891850, 12.1499684621890, 12.1499138740437, -0.0008188221807, 0.0024265120664, 23.3780394739352],
		[2636092.6510000079870, 2636092.6690094713122, 16.9157789786657, 16.9154603610679, -0.0047792639668, 0.0008712693819, 23.3736465176302],
		[2648463.9780000080355, 2648463.9978242614307, 21.6815954238176, 21.6813940830558, -0.0030201114293, -0.0017642483615, 23.3692552752190],
		[2660835.3050000080839, 2660835.3267253600061, 2.4474177956581, 2.4475594084090, 0.0021241912654, -0.0025211396424, 23.3648658641170],
		[2673206.6320000081323, 2673206.6557127665728, 7.2132460941871, 7.2135378215186, 0.0043759099723, -0.0001872954617, 23.3604784017395],
		[2685577.9590000081807, 2685577.9847864811309, 11.9790803203980, 11.9792144812058, 0.0020124121185, 0.0024214998968, 23.3560930055021],
		[2697949.2860000082292, 2697949.3139465041459, 16.7449204732974, 16.7447492505583, -0.0025683410882, 0.0020631004264, 23.3517097928201],
		[2710320.6130000082776, 2710320.6431928346865, 21.5107665508986, 21.5104582120031, -0.0046250834322, -0.0006308126950, 23.3473288811090],
		[2722691.9400000083260, 2722691.9725254741497, 2.2766185551882, 2.2765261697794, -0.0013857811330, -0.0025843525186, 23.3429503877841],
		[2735063.2670000083745, 2735063.3019444211386, 7.0424764831861, 7.0427221824549, 0.0036854890332, -0.0014404475166, 23.3385744302609],
		[2747434.5940000084229, 2747434.6314496765845, 11.8083403378725, 11.8086484011288, 0.0046209488456, 0.0012449628414, 23.3342011259549],
		[2759805.9210000084713, 2759805.9610412400216, 16.5742101162672, 16.5742071496724, -0.0000444989217, 0.0023501128255, 23.3298305922814],
		[2772177.2480000085197, 2772177.2907191114500, 21.3400858173768, 21.3397625459883, -0.0048490708280, 0.0010260244179, 23.3254629466559],
		[2784548.5750000085682, 2784548.6204832913354, 2.1059674441814, 2.1057203698675, -0.0037061147103, -0.0015311303632, 23.3210983064939],
		[2796919.9020000086166, 2796919.9503337792121, 6.8718549937010, 6.8719682628277, 0.0016990369025, -0.0024788396719, 23.3167367892109],
		[2809291.2290000086650, 2809291.2802705755457, 11.6377484649420, 11.6380691295523, 0.0048099691555, -0.0004977291686, 23.3123785122222],
		[2821662.5560000087135, 2821662.6102936794050, 16.4036478588978, 16.4038045238543, 0.0023499743488, 0.0020846651522, 23.3080235929434],
		[2834033.8830000087619, 2834033.9404030917212, 21.1695531745752, 21.1693867679966, -0.0024960986814, 0.0023449541628, 23.3036721487899],
		[2846405.2100000088103, 2846405.2705988120288, 1.9354644139608, 1.9351721012236, -0.0043846910580, -0.0002340015510, 23.2993242971772],
		[2858776.5370000088587, 2858776.6008808407933, 6.7013815720876, 6.7012681408118, -0.0017014691387, -0.0026180024016, 23.2949801555208],
		[2871147.8640000089072, 2871147.9312491775490, 11.4673046509425, 11.4675108157450, 0.0030924720389, -0.0017352190694, 23.2906398412362],
		[2883519.1910000089556, 2883519.2617038222961, 16.2332336525122, 16.2335411651632, 0.0046126897659, 0.0010659732660, 23.2863034717388],
		[2895890.5180000090040, 2895890.5922447755001, 20.9991685728232, 20.9992125534862, 0.0006597099449, 0.0024801677409, 23.2819711644442],
		[2908261.8450000090525, 2908261.9228720366955, 1.7651094118754, 1.7648321706937, -0.0041586177271, 0.0011436495314, 23.2776430367678],
		[2920633.1720000091009, 2920633.2535856058821, 6.5310561716557, 6.5307691734559, -0.0043049729983, -0.0014573267929, 23.2733192061251],
		[2933004.4990000091493, 2933004.5843854830600, 11.2970088481903, 11.2970757490806, 0.0010035133559, -0.0023732282476, 23.2689997899318],
		[2945375.8260000091977, 2945375.9152716686949, 16.0629674434662, 16.0633094049213, 0.0051294218267, -0.0006911333085, 23.2646849056032],
		[2957747.1530000092462, 2957747.2462441623211, 20.8289319574833, 20.8291193248251, 0.0028105101283, 0.0017981959986, 23.2603746705548],
		[2970118.4800000092946, 2970118.5773029644042, 1.5949023902416, 1.5947477110677, -0.0023201876107, 0.0024133426889, 23.2560692022024],
		[2982489.8070000093430, 2982489.9084480744787, 6.3608787377675, 6.3605692285726, -0.0046426379238, 0.0001343940673, 23.2517686179612],
		[2994861.1340000093915, 2994861.2396794925444, 11.1268610040347, 11.1267400485421, -0.0018143323910, -0.0024055758260, 23.2474730352470],
	];

	// define a new test module
	QUnit.module( 'Time',  function ()
	{

		QUnit.test( 'Ephemeris Day', function( assert )
		{
			for (var i = 0; i < times.length; i += 1) {
				var jd = 'JD' + parseInt(times[i][0] * 100) / 100
				var jde = 'JDE' + parseInt(times[i][1] * 100) / 100
				assert.close(JD2JDE(times[i][0]), times[i][1], 1e-4, jd + ': To Ephemeris Day (JD2JDE)');
				assert.close(JDE2JD(times[i][1]), times[i][0], 1e-5, jde + ': Back to Julian Day (JDE2JD)');
			}
		});

		QUnit.test( 'Sidereal Time', function( assert )
		{
			for (var i = 0; i < times.length; i += 1) {
				var jd = 'JD' + parseInt(times[i][0] * 100) / 100
				assert.close(getMeanSiderealTime(times[i][0]) * RAD2HMS, times[i][2], 1e-4, jd + ': Mean');
				assert.close(getApparentSiderealTime(times[i][0]) * RAD2HMS, times[i][3], 1e-4, jd + ': Apparent');
			}
		});

		QUnit.test( 'Nutations', function( assert )
		{
			for (var i = 0; i < times.length; i += 1) {
				var nut = getNutation(times[i][0]); // get nutations
				var jd = 'JD' + parseInt(times[i][0] * 100) / 100
				assert.close(nut.longitude, times[i][4] * DEG2RAD, 1e-5, jd + ': Longitude');
				assert.close(nut.obliquity, times[i][5] * DEG2RAD, 1e-5, jd + ': Obliquity');
				assert.close(nut.ecliptic, times[i][6] * DEG2RAD, 1e-5, jd + ': Ecliptic');
			}
		});

	});

})();