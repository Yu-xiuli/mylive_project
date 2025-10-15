import { PetList } from "@/config/petConfig";
import PetCard from "@/components/petCard";

const petInfo: PetList[] = [
  {
    row: 1,
    list: [
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_5.jpg"),
        sizeStyle: { width: "130px", height: "170px" },
        desc: "团子是一只憨憨的小博美，目前两岁多。她的性格很活泼，但是有些犟，她能听懂你说的话，但是会不会搭理你要看她的心情了。养久了发现，其实她会有自己的想法，也有自己的情绪，就像个小人儿一样。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_10.jpg"),
        sizeStyle: { width: "130px", height: "170px" },
        desc: "有时候真的会怀疑她是不是知道自己很可爱，总是睁着圆圆的眼睛看着你。这个是刚给她洗完澡换了新衣服，她躺在自己的窝里睡觉，我过去逗她玩她抬眼看我的场景。看她的表情好像在说“你咋来了”。",
      },
    ],
  },
  {
    row: 2,
    list: [
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_11.jpg"),
        sizeStyle: { width: "130px", height: "170px" },
        desc: "这张照片是过年的时候带她回家，邻居小孩经常来家里跟她玩，孩子小不会把握力度，可能弄疼了她，于是她跑到我腿边坐下，让我护着她。这时候看着她圆圆的脑袋，感觉她还挺聪明的。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_8.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "空闲的时候我喜欢在楼顶晒太阳，感觉温暖又惬意。而她总是可以在我要出门之前精准的感知到，然后兴奋的围着我转圈跑，最后我只好默许她屁颠屁颠的跟在后边一起出门。那时候她好像就有七八斤重了，再加上毛长就显得格外圆润。",
      },
    ],
  },
  {
    row: 3,
    list: [
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_1.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "有一次带她出门溜达，她死活不愿意出来，不管怎么喊她她都不理，后来才知道是地上太凉了冻脚。于是我开始了给她买衣服之旅。至于鞋子，她的脚实在是太小了，鞋子总是跑掉，后来干脆不穿了。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_4.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "博美三个月之后会有个尴尬期，脸白白的像只小猴子。记得这是在一家奶茶店里，等奶茶的那几分钟里有几个小姐姐夸她可爱，还给她拍照，可给她开心坏了，咧着嘴一直笑。",
      },
    ],
  },
  {
    row: 4,
    list: [
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_6.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "我在围栏边逗她玩给她拍照，她趴在围栏上俏皮的望着我，这一幕我感觉好像在哪看见过，有种很熟悉的感觉，后来想起来了，这是不是跟旺仔牛奶上的小人一模一样！",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_3.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "晚饭后带着狗子在楼下散散步也是一种惬意，一人一狗在昏黄的路灯下慢慢的走，什么都不用想。人少的时候我也会撒开绳子，看她兴奋的到处跑到处嗅。这时候你是喊不回来的，不是听不见，是她还没玩够不想往回走。不过也不用急，稍微等等她就会自己回来了。",
      },
    ],
  },
  {
    row: 5,
    list: [
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_2.jpg"),
        sizeStyle: { width: "250px", height: "106px" },
        desc: "想来也是搞笑，有时候我牵着她，拿手机的时候不注意她就会连带着绳子一起挣脱掉跑开，呼哧呼哧的跑远再呼哧呼哧的跑回来，如此反复，直到最后筋疲力尽的回到我脚边趴着。",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_7.jpg"),
        sizeStyle: { width: "250px", height: "106px" },
        desc: "看她在屋里太疯了我就会把她带出去消耗体力，这次是去城隍庙。在里边的小巷子走了几个来回，把她累的够呛。路上碰见别的狗狗，她跑上去跟人家打招呼，但是人家汪一声她就吓得飞奔回来，着实好笑。",
      },
    ],
  },
  {
    row: 5,
    list: [
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_12.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "隔壁邻居家里办喜事，用来染鸡蛋的颜料有点剩余，被我拿回来了，给她洗个澡染了耳朵和尾巴尖，还真别说，染色之后像只小狐狸，还怪好看呢！",
      },
      { isBlack: true, name: "", img: "", desc: "" },
      {
        name: "团子",
        img: require("@/imgs/pet/dumpling/pet_dumpling_9.jpg"),
        sizeStyle: { width: "76px", height: "177px" },
        desc: "她就像个小孩一样，年后准备返程时我们搬东西，她在脚下跑来跑去的，我们怕踩到她让老妈把她抱起来。她以为我不带她走不要她了，激动的汪汪直叫，我突然明白她其实什么都懂。",
      },
    ],
  },
];

const Dumpling = () => {
  return <PetCard petInfo={petInfo} />;
};

export default Dumpling;
