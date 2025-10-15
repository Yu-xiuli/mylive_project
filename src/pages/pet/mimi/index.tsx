import { PetList } from "@/config/petConfig";
import PetCard from "@/components/petCard";

const petInfo: PetList[] = [
  {
    row: 1,
    list: [
      {
        name: "咪咪",
        img: require("@/imgs/pet/mimi/pet_mimi_1.jpg"),
        sizeStyle: { width: "104px", height: "170px" },
        desc: "咪咪是从老家抱来的田园猫，当时在姥姥家看到大猫的一窝崽崽，小猫连同大猫都瘦瘦的，我想着家里有狗了再养只猫吧，于是将她带了回来。她倒是一点不怕生，也不怕狗狗，到家之后就到处溜达，最后认准了我的拖鞋。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "咪咪",
        img: require("@/imgs/pet/mimi/pet_mimi_4.jpg"),
        sizeStyle: { width: "130px", height: "170px" },
        desc: "不知道是不是吃的好的原因，她长的可快了。每天看着她感觉不到变化，但是一翻照片就会发现又长大了一圈。她还是很喜欢钻我的拖鞋，而我正好可以用拖鞋做对比，看看她又长了多少。",
      },
    ],
  },
  {
    row: 2,
    list: [
      {
        name: "咪咪",
        img: require("@/imgs/pet/mimi/pet_mimi_2.jpg"),
        sizeStyle: { width: "170px", height: "170px" },
        desc: "由于从小就是猫粮不间断的喂，所以她也养成了吃饭不紧不慢的性子，加粮的时候她会跑过去吃几口，然后跑一边玩去了，过了一会再来吃几口。如此我每次一出门就看见她在吃饭。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "咪咪",
        img: require("@/imgs/pet/mimi/pet_mimi_3.jpg"),
        sizeStyle: { width: "170px", height: "170px" },
        desc: "不论我干什么她都要看一眼，所以我总是时不时的感叹怪不得说猫最有好奇心了。别看她在脚下卧的老实，我一起身她就跑了，跑一圈然后身体一歪就躺在那看我，我以为是等我呢，一查才知道她只是跑累了。",
      },
    ],
  },
  {
    row: 3,
    list: [
      {
        name: "咪咪",
        img: require("@/imgs/pet/mimi/pet_mimi_10.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "不到六个月的时间她就长的和团子差不多体型了，平常她俩一见面就跟处了八年的好姐妹似的，你追我我追你。她俩友好相处我也很开心，但是每次刚洗完澡不大会就互相啃的都是口水，这点让我很是头疼。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "咪咪",
        img: require("@/imgs/pet/mimi/pet_mimi_12.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "我一直都以为别让猫跟狗玩是个梗，直到我偶然间看见猫的坐姿。那一刻我愣住了，然后差点给我笑死。她后半身躺着，前腿撑着地，甚是妖娆。没错，我的狗也是这么坐的。猫咪学会了狗的坐姿，狗子学会了猫的揣手手。",
      },
    ],
  },
  {
    row: 4,
    list: [
      {
        name: "咪咪",
        img: require("@/imgs/pet/mimi/pet_mimi_5.jpg"),
        sizeStyle: { width: "177px", height: "82px" },
        desc: "我是不允许她进卧室的，但是她总是蹲在门口，在我开门出去的时候趁我不注意溜进房间。我躺在床上玩手机，感觉旁边有道小小的影子，扭头一看发现她扒着床单不知道在看什么。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "咪咪",
        img: require("@/imgs/pet/mimi/pet_mimi_9.jpg"),
        sizeStyle: { width: "177px", height: "82px" },
        desc: "在她小时候我总是跟朋友开玩笑，说她的眼睛看起来就很智慧，后来慢慢的长大了，她还是一点都没变，整个猫憨憨的。假期的时候把她带回了姥姥家，又见到了那只大猫，她已经长的比她的妈妈壮实了。",
      },
    ],
  },
];

const Mimi = () => {
  return <PetCard petInfo={petInfo} />;
};

export default Mimi;
