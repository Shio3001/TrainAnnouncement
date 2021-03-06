"use strict";
var kashikojima1 = new AnimationCenterText(true, "近鉄をご利用いただき ありがとうございます", "Thank you for taking Kintetsu railway");
kashikojima1.main();
//kashikojima1.del()
var kashikojima2 = new TrainSecond(true, "次の停車駅は", "伊勢志摩ライナー", "Osaka-Namba", "Ise-Shima Liner", undefined, undefined, "B", "#aa5500");
kashikojima2.main();
var stop_list_ja = ["賢島", "鵜方", "志摩磯部", "鳥羽", "五十鈴川", "宇治山田", "伊勢市", "松阪", "伊勢中川", "伊賀神戸", "名張", "榛原", "大和八木", "大和高田", "鶴橋", "大阪上本町", "大阪難波"];
var stop_list_en = ["Kashikojima", "Ugata", "Shima-Isobe", "Toba", "Isuzugawa [内宮前]", "Uji-Yamada", "Iseshi", "Matsusaka", "Ise-Nakagawa", "Iga-Kanbe", "Nabari", "Haibara", "Yamato-Yagi", "Yamato-Takada", "Turuhashi", "Osaka-Uehonmachi", "Osaka-Namba"];
var stop_stations;
stop_stations = new StopStation(true, stop_list_ja, stop_list_en, undefined, undefined);
var kashikojima = new WhileMovLoop(stop_stations, undefined);
kashikojima.start();
new AnimationCenterText(true, "近鉄をご利用いただき ありがとうございます", "Thank you for taking Kintetsu railway");
