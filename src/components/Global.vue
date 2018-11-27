<script type="text/javascript">
const night_mode = sessionStorage.getItem("night_mode")!=null?sessionStorage.getItem("night_mode"): false;
const night_mode_css_bg_color = sessionStorage.getItem("night_mode_css_bg_color")!=null?sessionStorage.getItem("night_mode_css_bg_color"): "darkgray";
const night_mode_css_font_color = sessionStorage.getItem("night_mode_css_font_color")!=null?sessionStorage.getItem("night_mode_css_font_color"): "darkslategray";
const night_mode_css_font_size = sessionStorage.getItem("night_mode_css_font_size")!="undefined"?sessionStorage.getItem("night_mode_css_font_size"): 14;
const night_mode_css = {
    backgroundColor: night_mode_css_bg_color,
    color: night_mode_css_font_color,
    fontSize: night_mode_css_font_size+"px"
};
const footer_selected = "comic";
const colorList = [
  '#F9F900',
  '#6FB7B7',
  '#9999CC',
  '#B766AD',
  '#B87070',
  '#FF8F59',
  '#FFAF60',
  '#FFDC35',
  '#FFFF37',
  '#B7FF4A',
  '#28FF28',
  '#1AFD9C',
  '#00FFFF',
  '#2894FF',
  '#6A6AFF',
  '#BE77FF',
  '#FF77FF',
  '#FF79BC',
  '#FF2D2D',
  '#ADADAD'
]
const colorListLength = 20
function getRandColor () {
  var tem = Math.round(Math.random() * colorListLength)
  return colorList[tem]
}
export default
{
  colorList,
  colorListLength,
  getRandColor,
  night_mode,
  night_mode_css,
  footer_selected,
}
</script>

