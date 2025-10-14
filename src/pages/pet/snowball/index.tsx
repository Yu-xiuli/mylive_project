import PetCard from "@/components/petCard";
import { PetList } from "@/config/petConfig";

// 卡片内容
const petInfo: PetList[] = [
  {
    row: 1,
    list: [
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_5.jpg"),
        sizeStyle: { width: "130px", height: "170px" },
        desc: "这是早上带她遛弯后在早点铺子前，老板看见我手上的绳子问我多大的狗啊要用这么粗的绳子，还没等我回答他往前一倾，噗嗤笑出了声，我低头看着圆滚滚的她老老实实坐在地上，不禁拿起手机拍照记录。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_7.jpg"),
        desc: "小时候担心她饿到，上班午休时间我都会回家给她弄些吃食，看着她吃完再跟她玩一会再回去上班。某天中午我回到家，看见她眯着眼睛趴在那里好可爱，于是就有了这张照片。",
        sizeStyle: { width: "130px", height: "170px" },
      },
    ],
  },
  {
    row: 2,
    list: [
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_2.jpg"),
        sizeStyle: { width: "130px", height: "170px" },
        desc: "这是第一次教她坐车的场景。我们原本在楼下散步，路过这里时感觉这个灯光很好看，照在她身上金灿灿的。恰好电车在旁边，我就突然想教她坐车，这样以后就可以带她出去玩，不必再局限于小区里面。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_6.jpg"),
        sizeStyle: { width: "130px", height: "170px" },
        desc: "我抱着她把前脚放在脚踏板上，喊她上车，她貌似听懂了，后脚不停往上爬但是腿短爬不上去，场面十分滑稽。最后肯定是学会了，但是我没想到的是后来出去玩的时候车子没电了，她竟然不！下！车！我愣是推着她走回家的。",
      },
    ],
  },
  {
    row: 3,
    list: [
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_4.jpg"),
        desc: "雪球是一只可爱的萨摩耶，她很聪明，像坐下、握手、打滚这些互动技能，都是几遍就学会了。她生性活泼爱动，喜欢和人一起玩耍。每次带她下楼遛弯都不免遇到热情的朋友想要给她拍照，亦或想摸摸毛茸茸的她。",
        sizeStyle: { width: "170px", height: "130px" },
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_1.jpg"),
        desc: "她总共陪了我一年多时间，是那时我只身在外地生活的唯一陪伴。开始总是担心万一教不会定点，那每天清洁地面多麻烦。可是没过几天，我突然发现她自己学会了！这种惊喜感难以言说，我非常开心，感叹自己运气真好。",
        // sizeStyle: { width: "130px", height: "277px" },
        sizeStyle: { width: "170px", height: "130px" },
      },
    ],
  },
  {
    row: 4,
    list: [
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_8.jpg"),
        desc: "闲得无聊时我喜欢举起手模仿枪对着她“啪”一声，她哒哒哒的跑过来然后仰面躺下，逗得我哈哈大笑。这是她睡觉的照片，狗狗只有对环境非常信任的时候才会这样四脚朝天睡觉。在我身边她总是睡得很安心。",
        sizeStyle: { width: "170px", height: "130px" },
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_11.jpg"),
        desc: "有时候夜里醒来，一转身发现她把头搭在床边看着我，起初吓我一大跳，而她就两眼无辜的冲我傻笑，我不忍怪她，这样次数多了我醒来都会先伸手摸摸她的头。",
        sizeStyle: { width: "170px", height: "130px" },
      },
    ],
  },
  {
    row: 5,
    list: [
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_12.jpg"),
        desc: "其实父母一开始是反对她的存在的，但是过年期间我带她回家后全都变了。我爸每天饭后都要带着她出去遛弯消食，把她带到人少的地方让她撒欢的玩，比我带在身边的时候还要快活。",
        sizeStyle: { width: "95px", height: "177px" },
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_3.jpg"),
        desc: "有一次快要睡着时听见门外的声音，老爸问狗子呢，老妈说在我旁边睡觉呢。天知道那刻真的很温馨。后来她出现意外离开了，我为此难过了许久。这个照片是带她回家的路上拍的，不知道她在想什么呢。",
        sizeStyle: { width: "95px", height: "177px" },
      },
    ],
  },
  {
    row: 6,
    list: [
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_13.jpg"),
        desc: "我妈就喜欢拉着她拍照，给她穿上小衣服小鞋，跟个人儿似的照顾她。我把她的窝放在我的房间，但是她不睡，她总是在我睡着后躺在我床边，离我很近。",
        sizeStyle: { width: "95px", height: "177px" },
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "雪球",
        img: require("@/imgs/pet/snowball/pet_snowball_10.jpg"),
        desc: "这是带她去公园露营时拍的照片，别看她咧着嘴一副人畜无害的样子，实际上机警的很。此时她趴在我身边，有人靠近的话她就会紧紧盯住对方。",
        sizeStyle: { width: "95px", height: "177px" },
      },
    ],
  },
];

const Snowball = () => {
  return (
    <PetCard petInfo={petInfo} />
  );
};

export default Snowball;

