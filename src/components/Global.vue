<script type="text/javascript">
// import func from "./vue-temp/vue-editor-bridge";

function get_night_mode() {
  const flag = sessionStorage.getItem("night_mode");
  if (flag == null || flag == "undefined" || flag == false || flag == "false") {
    return false;
  } else {
    return true;
  }
}

function get_night_mode_css_bg_color() {
  return sessionStorage.getItem("night_mode_css_bg_color") != null
    ? sessionStorage.getItem("night_mode_css_bg_color")
    : "#f5f5f59e";
}

function get_night_mode_css_bg_image() {
  const _img = sessionStorage.getItem("night_mode_css_bg_image");
  if (_img.indexOf("read_bg_2") != -1) {
    return require("./../assets/images/read_bg_2.jpg");
  } else if (_img.indexOf("read_bg_3") != -1) {
    return require("./../assets/images/read_bg_3.jpg");
  } else if (_img.indexOf("read_bg_4") != -1) {
    return require("./../assets/images/read_bg_4.jpg");
  } else if (_img.indexOf("read_bg_5") != -1) {
    return require("./../assets/images/read_bg_5.jpg");
  }
  return require("./../assets/images/read_bg_1.jpg");
}

function get_night_mode_css_font_color() {
  const flag = sessionStorage.getItem("night_mode_css_font_color");
  if (flag == null || flag == "undefined" || flag == "null") {
    return "dark";
  } else {
    return flag;
  }
}

function get_night_mode_css_font_size() {
  const flag = sessionStorage.getItem("night_mode_css_font_size");
  if (flag == null || flag == "undefined") {
    return 14;
  } else {
    return parseInt(flag);
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
    backgroundImage: "url(" + get_night_mode_css_bg_image() + ")"
  };
}

function setViewHistory_old(data_type, content_id, chapter_id, title, chapter_title) {
  const key = content_id + "-" + chapter_id + "-" + data_type;
  const value = title + "-&&-" + chapter_title;
  const VIEW_HISTORY = localStorage.getItem("VIEW_HISTORY");

  if (VIEW_HISTORY == "" ||VIEW_HISTORY == "[]" ||VIEW_HISTORY == null || VIEW_HISTORY == "undefined" || VIEW_HISTORY == "null") {
    // 不存在时保存
    const history_dict = {};
    history_dict[key] = value;
    const history_dict_str = JSON.stringify(history_dict)
    localStorage.setItem("VIEW_HISTORY", history_dict_str);
  } else {
    const history_dict = JSON.parse(VIEW_HISTORY);
    const flag = history_dict[key];
    // 不存在时保存
    if (!flag) {
      history_dict[key] = value;
      console.log(history_dict);
      localStorage.setItem("VIEW_HISTORY", JSON.stringify(history_dict));
    }
  }
}


function setViewHistoryContentId(data_type, content_id, chapter_id) {
  const content_ids = localStorage.getItem("VIEW_HISTORY_CONTENT_LIST");
  const key = content_id + "-" + data_type;
  const val = chapter_id + "-" + data_type;

  if (content_ids == "" ||content_ids == "[]" ||content_ids == null || content_ids == "undefined" || content_ids == "null") {
    // 第一次保存
    const history_dict = {};
    history_dict[key] = val;
    const history_dict_str = JSON.stringify(history_dict)
    localStorage.setItem("VIEW_HISTORY_CONTENT_LIST", history_dict_str);
  } else {
    const history_dict = JSON.parse(content_ids);
    history_dict[key] = val;
    const history_dict_str = JSON.stringify(history_dict)
    localStorage.setItem("VIEW_HISTORY_CONTENT_LIST", history_dict_str);
  }
}

function getViewHistoryContentId(data_type="", content_id="") {
  const content_ids = localStorage.getItem("VIEW_HISTORY_CONTENT_LIST");
  const history_dict = JSON.parse(content_ids);

  if(history_dict == "" || history_dict == undefined){
    return false;
  }
  const key = content_id + "-" + data_type;
  const val = history_dict[key];
  return history_dict.hasOwnProperty(key)?val:false;
}


function setViewHistory(data_type, content_id, chapter_id, title, chapter_title) {
  const VIEW_HISTORY = localStorage.getItem("VIEW_HISTORY");
  const key = chapter_id + "-" + data_type;
  const value = {content_id: content_id, chapter_title: chapter_title, title};

  const del_old_key = getViewHistoryContentId(data_type, content_id);

  if (VIEW_HISTORY == "" ||VIEW_HISTORY == "[]" ||VIEW_HISTORY == null || VIEW_HISTORY == "undefined" || VIEW_HISTORY == "null") {
    // 第一次保存
    const history_dict = {};
    history_dict[key] = value;
    const history_dict_str = JSON.stringify(history_dict)
    localStorage.setItem("VIEW_HISTORY", history_dict_str);
  } else {
    const history_dict = JSON.parse(VIEW_HISTORY);
    const flag = history_dict[key];
    // 不存在时保存
    if (!flag) {
      delete(history_dict[del_old_key]);
      history_dict[key] = value;
      localStorage.setItem("VIEW_HISTORY", JSON.stringify(history_dict));
    }
  }
  setViewHistoryContentId(data_type, content_id, chapter_id);
}


function getViewHistory(item_key="") {
  const VIEW_HISTORY = localStorage.getItem("VIEW_HISTORY");
  const history_dict = JSON.parse(VIEW_HISTORY);
  if( item_key != "" ){
    return history_dict.hasOwnProperty(key)?history_dict[item_key]:false;
  }
  const history_list = [];
  for (var key in history_dict) {
    const _key = key.split("-");
    const _val = history_dict[key];
    const temp = {
      data_type: _key[1],
      content_id: _val["content_id"],
      chapter_id: _key[0],
      title: _val["title"],
      chapter_title: _val["chapter_title"]
    };
    history_list.push(temp);
  }

  return history_list;
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
  footer_selected,
  getViewHistory,
  setViewHistory,
  getViewHistoryContentId,
};
</script>

