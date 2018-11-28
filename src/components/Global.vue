<script type="text/javascript">
// const night_mode = sessionStorage.getItem("night_mode")!=null?sessionStorage.getItem("night_mode"): false;
// const night_mode_css_bg_color = sessionStorage.getItem("night_mode_css_bg_color")!=null?sessionStorage.getItem("night_mode_css_bg_color"): "darkgray";
// const night_mode_css_font_color = sessionStorage.getItem("night_mode_css_font_color")!=null?sessionStorage.getItem("night_mode_css_font_color"): "darkslategray";
// const night_mode_css_font_size = sessionStorage.getItem("night_mode_css_font_size")!="undefined"?sessionStorage.getItem("night_mode_css_font_size"): 14;

function get_night_mode() {
  const flag = sessionStorage.getItem("night_mode");
  if(flag == null || flag == "undefined" || flag == false || flag == "false"){
    return false
  }else{
    return true
  }  
}

function get_night_mode_css_bg_color() {
  return sessionStorage.getItem("night_mode_css_bg_color") != null
    ? sessionStorage.getItem("night_mode_css_bg_color")
    : "#f5f5f59e";
}

function get_night_mode_css_bg_image() {
  const _img = sessionStorage.getItem("night_mode_css_bg_image");
  if(_img.indexOf("read_bg_2") != -1){
    return require("./../assets/images/read_bg_2.jpg")
  }else if(_img.indexOf("read_bg_3") != -1){
    return require("./../assets/images/read_bg_3.jpg")
  }else if(_img.indexOf("read_bg_4") != -1){
    return require("./../assets/images/read_bg_4.jpg")
  }else if(_img.indexOf("read_bg_5") != -1){
    return require("./../assets/images/read_bg_5.jpg")
  }
  return require("./../assets/images/read_bg_1.jpg")
}

function get_night_mode_css_font_color() {
  const flag = sessionStorage.getItem("night_mode_css_font_color");
  if(flag == null || flag == "undefined" || flag == "null"){
    return "dark"
  }else{
    return flag
  }  
}

function get_night_mode_css_font_size() {
  const flag = sessionStorage.getItem("night_mode_css_font_size");
  if(flag == null || flag == "undefined"){
    return 14
  }else{
    return parseInt(flag)
  }
}

// const night_mode_css = {
//   backgroundColor: night_mode_css_bg_color,
//   color: night_mode_css_font_color,
//   fontSize: night_mode_css_font_size + "px"
// };

function get_night_mode_css() {
  return {
    backgroundColor: get_night_mode_css_bg_color(),
    color: get_night_mode_css_font_color(),
    fontSize: get_night_mode_css_font_size() + "px",
    backgroundImage: 'url('+ get_night_mode_css_bg_image()+')'
  };
}

const footer_selected = "comic";
const colorList = [
  "#F9F900",
  "#6FB7B7",
  "#9999CC",
  "#B766AD",
  "#B87070",
  "#FF8F59",
  "#FFAF60",
  "#FFDC35",
  "#FFFF37",
  "#B7FF4A",
  "#28FF28",
  "#1AFD9C",
  "#00FFFF",
  "#2894FF",
  "#6A6AFF",
  "#BE77FF",
  "#FF77FF",
  "#FF79BC",
  "#FF2D2D",
  "#ADADAD"
];
const colorListLength = 20;
function getRandColor() {
  var tem = Math.round(Math.random() * colorListLength);
  return colorList[tem];
}
export default {
  colorList,
  colorListLength,
  getRandColor,
  get_night_mode,
  get_night_mode_css,
  get_night_mode_css_font_size,
  footer_selected
};
</script>

