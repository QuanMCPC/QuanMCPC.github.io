"use strict";

function initialize_editor(e, t) {
  if (t) {
    if (document.getElementById(e)) {
      if (document.getElementsByClassName("moNndhEOCbPJu65PiwZQ0L2N0QFMkp4zpHawfJIY6c7R7AY4MJK0oVKY2CelpMou")[0]) console.error("Failed to Initialize EDIT"), console.error("Error: EDIT has already been initialized");else {
        console.log("%cSo you have accepted the risk. Be careful!", "color: white; background-color: red");
        document.getElementById(e).innerHTML += '<div id="editor" class="moNndhEOCbPJu65PiwZQ0L2N0QFMkp4zpHawfJIY6c7R7AY4MJK0oVKY2CelpMou"> <div id="editor_bar" style="text-align: center;"><button style="position: absolute; left: 10px" onclick="exit_edit()">Close</button>Edit Document In Terminal [Edit]</div><div id="editor_overlay" style="position: absolute; display: none; width: 100%; height: 93%; background-color: rgba(0, 0, 0, 0.3); z-index: 1;"></div><div id="editor_menu"> <div id="edit_file_dropdown" class="edit_dropdown"> <a rel="noreferrer" href="#" class="edit_button" id="file_edit">File</a> <div id="edit_file_menu" class="test123"> <a rel="noreferrer" onclick="editor_new()" href="#" class="edit_button_1"><b>New</b></a> <a rel="noreferrer" onclick="editor_open()" href="#" class="edit_button_1"><b>Open</b></a> <a rel="noreferrer" onclick="editor_save()" href="#" class="edit_button_1"><b>Download</b></a> <a rel="noreferrer" onclick="editor_exit()" href="#" class="edit_button_1"><b>Reset and Exit</b></a> </div></div><div id="edit_edit_dropdown" class="edit_dropdown"> <a rel="noreferrer" href="#" class="edit_button" id="edit_edit">Edit</a> <div id="edit_edit_menu" class="test123"> <a rel="noreferrer" onclick="editor_cut_text()" href="#" class="edit_button_1"><b>Cut Selected Text</b></a> <a rel="noreferrer" onclick="editor_copy_text()" href="#" class="edit_button_1"><b>Copy Selected Text</b></a> <a rel="noreferrer" onclick="editor_paste_text()" href="#" class="edit_button_1"><b>Paste [Deprecated]</b></a> <a rel="noreferrer" onclick="editor_selectall_text()" href="#" class="edit_button_1"><b>Select All</b></a> <a rel="noreferrer" onclick="editor_undo_text()" href="#" class="edit_button_1"><b>Undo</b></a> <a rel="noreferrer" onclick="editor_redo_text()" href="#" class="edit_button_1"><b>Redo</b></a> <a rel="noreferrer" onclick="editor_td_text()" href="#" class="edit_button_1"><b>Time/Date</b></a> </div></div><div id="edit_search_dropdown" class="edit_dropdown"> <a rel="noreferrer" href="#" class="edit_button" id="search_edit">Search</a> <div id="edit_search_menu" class="test123"> <a rel="noreferrer" onclick="editor_find()" href="#" class="edit_button_1"><b>Find</b></a> <a rel="noreferrer" onclick="editor_replace()" href="#" class="edit_button_1"><b>Replace</b></a> <a rel="noreferrer" onclick="editor_gotoline()" href="#" class="edit_button_1"><b>Go to line</b></a> <a rel="noreferrer" onclick="editor_search_with_google()" href="#" class="edit_button_1"><b>Search selected text with Google</b></a> </div></div><div id="edit_about_dropdown" class="edit_dropdown"> <a rel="noreferrer" href="#" class="edit_button" id="about_edit">Help</a> <div id="edit_about_menu" class="test123"> <a rel="noreferrer" onclick="editor_about()" href="#" class="edit_button_1"><b>About</b></a> </div></div></div><div style="background-color: black; line-height: 23px; vertical-align: middle; text-align: center; color: white; width: 738px; height: 23px; border: 6px double rgb(156, 156, 156)" id="editor_filename">UNTITLED 1</div><textarea id="editor_input" style="width: 735px; height: 80%; bottom: 0px; position: absolute; z-index: -1; resize: none; outline: none; background-color: black; color: white; border: 6px double rgb(197, 197, 197);"></textarea> <div id="editor_save" style="z-index: 3; display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; height: 150px; color: white; border: 6px double white"> <p style="text-align: center;">Download Document</p><center> <label for="editor_save_name" style="text-align: center">Download file as: </label> <input placeholder="Filename" id="editor_save_name" style="outline: none"> <br><br><button onclick="editor_save1()">Download file</button><button onclick="editor_cancel_save()">Cancel</button> </center> </div><div id="editor_open" style="z-index: 3; display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; height: 150px; color: white; border: 6px double white"> <p style="text-align: center;">Open Document</p><center> <label for="editor_open_name" style="text-align: center">Load file: </label> <input id="editor_open_name" type="file"> <br><br><button onclick="editor_load1()">Load file</button><button onclick="editor_cancel_load()">Cancel</button> </center> </div><div id="editor_find" style="bottom: 0; right: 0; padding: 5px 5px; z-index: 3; display: none; position: absolute; width: 360px; height: 25px; color: white; border: 6px double white"> <label for="editor_find_name" style="text-align: center">Find: </label> <input placeholder="Find word" id="editor_find_name" style="outline: none; border: 2px solid gray; width: 80px;"> <button onclick="editor_find1()">Find</button><button onclick="editor_cancel_find()">Cancel</button> <input type="checkbox" id="editor_wrap_around"><label for="editor_wrap_around">Wrap Around</label> </div><div id="editor_replace" style="bottom: 0; right: 0; padding: 5px 5px; z-index: 3; display: none; position: absolute; width: 685px; height: 25px; color: white; border: 6px double white"> <label for="editor_find_replace_name" style="text-align: center">Find:&nbsp;</label> <input onkeydown="editor_replace_find_replace()" placeholder="Find word" id="editor_find_replace_name" style="outline: none; border: 2px solid gray; width: 80px;"> <label for="editor_replace_find_name" style="text-align: center">Replace:&nbsp;</label> <input onkeydown="editor_replace_find_replace()" placeholder="Replace with" id="editor_replace_find_name" style="outline: none; border: 2px solid gray; width: 80px;"> <button onclick="editor_find2()">Find</button><button onclick="editor_replace1()">Replace</button><button onclick="editor_replace2()">Replace all</button><button onclick="editor_cancel_replace()">Cancel</button> <input type="checkbox" id="editor_wrap_around1"><label for="editor_wrap_around1">Wrap Around</label> </div><div id="editor_gotoline" style="bottom: 0; right: 0; padding: 5px 5px; z-index: 3; display: none; position: absolute; width: 310px; height: 25px; color: white; border: 6px double white"> <label for="editor_goto_input" style="text-align: center">Line number:&nbsp;</label> <input type="number" placeholder="Number" id="editor_goto_input" style="outline: none; border: 2px solid gray; width: 80px;"> <button onclick="editor_goto()">Go to</button><button onclick="editor_cancel_gotoline()">Cancel</button> </div><div id="editor_about" style="z-index: 3; display: none; position: absolute; width: 400px; height: 275px; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: gray; border: 6px double white"> <p style="text-align: center">About EDIT (Edit Document In Terminal)</p><p style="text-align: center">Version: 1.4</p><p style="text-align: center">Release Date: Friday, 23th 2020</p><p style="text-align: center">First release: Wednesday, 9th, 2020</p><p style="text-align: center">Copyright (C) 2021 Quan_MCPC</p><p style="text-align: center">Source code are free to copy, modify and publish. Just remember to include my Copyright</p><center> <button onclick="editor_about_close()">OK</button> </center> </div></div>';
        document.getElementsByTagName("head")[0].innerHTML += '<style id="CO9ddjOBdmvS6GhtgsR1IeOBcyxmNzWxphpdFwJJP3BLYGiWUJNbof4X4frKDY0F">#editor{display: none; background-color: rgb(0, 0, 255); width: 750px; height: 550px; border: 3px solid white; position: absolute; z-index: 9; font-size: 16px;}#editor_bar{padding: 10px; cursor: move; z-index: 10; background-color: rgba(0, 255, 136, 0.5); color: #fff;}#editor_menu{padding: 1px; z-index: 11; background-color: rgb(70, 70, 70); color: #fff;}#editor_menu > div{display:inline-block;}.edit_button{background-color: rgb(70, 70, 70); border: none; color: rgb(255, 255, 255); width: 80px; height: 20px; text-decoration: none; display: inline-block; font-size: 16px; margin-right: -1px; margin-left: -1px; margin-top: -1px; margin-bottom: -1px; cursor: context-menu; text-align: center; border: 0px solid}.edit_button:hover{background-color: rgb(0, 0, 0);}.edit_button_1{margin-left: 1px; width: 248px; height: 19px; color: rgb(201, 201, 201);}.edit_button_1:hover{background-color: rgb(0, 0, 0);}#edit_file_menu, #edit_edit_menu, #edit_search_menu, #edit_about_menu{position: absolute; background-color: rgb(175, 175, 175); text-align: left; width: 250px; padding: 2px 0px; margin: 0px -1px; border: 4px double black; display: none;}#edit_file_menu a, #edit_edit_menu a, #edit_search_menu a, #edit_about_menu a{color: rgb(236, 236, 236); display: block; text-align: left; text-decoration: none;}#editor_input::-webkit-scrollbar{display: none;}#editor_input{-ms-overflow-style: none; /* IE and Edge */ scrollbar-width: none; /* Firefox */}#edit_file_dropdown:hover #edit_file_menu{display: block;}#edit_edit_dropdown:hover #edit_edit_menu{display: block;}#edit_search_dropdown:hover #edit_search_menu{display: block;}#edit_about_dropdown:hover #edit_about_menu{display: block;}.edit_button_1{cursor: context-menu;}button{background-color: #707070; border: none; color: white; padding: 2px 10px; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; margin: 0px 1px; cursor: pointer;}</style>', dragElement1(document.getElementById("editor")), console.info("EDIT has been Initialized successfully!");
      }
    } else console.error("Failed to Initialize EDIT"), console.error("Error: No ID with name:", e, "exist. Please check the name again");
  } else console.error("Failed to Initialize EDIT"), console.info('Please read this carefully:\n  + By using EDIT, that mean you have accepted the risk that style, script, id, class name that started with "editor" can cause the script to malfunction.\n  + Even though this script is free to use and distribute, please remember to keep my copyright info.\nOnce you have read the note carefully, type: initialize_editor(<insert_id>, true) (Replace <insert_id> with the id that you want the edit to sit on)');
}

function open_editor() {
  document.querySelector("#editor").style.display = "block";
}

function close_editor() {
  document.querySelector("#editor").style.display = "none";
}

function uninitialize_editor() {
  document.getElementsByClassName("moNndhEOCbPJu65PiwZQ0L2N0QFMkp4zpHawfJIY6c7R7AY4MJK0oVKY2CelpMou")[0] && document.getElementById("CO9ddjOBdmvS6GhtgsR1IeOBcyxmNzWxphpdFwJJP3BLYGiWUJNbof4X4frKDY0F") ? (document.getElementsByClassName("moNndhEOCbPJu65PiwZQ0L2N0QFMkp4zpHawfJIY6c7R7AY4MJK0oVKY2CelpMou")[0].remove(), document.getElementById("CO9ddjOBdmvS6GhtgsR1IeOBcyxmNzWxphpdFwJJP3BLYGiWUJNbof4X4frKDY0F").remove(), console.info("EDIT has been Un-Initialized successfully!")) : (console.error("Failed to Un-Initialize EDIT"), console.error("Error: EDIT is nowhere to be found!"));
}

function dragElement1(e) {
  function t(e) {
    (e = e || window.event).preventDefault(), pos3_1 = e.clientX, pos4_1 = e.clientY, document.onmouseup = n, document.onmousemove = o;
  }

  function o(t) {
    (t = t || window.event).preventDefault(), pos1_1 = pos3_1 - t.clientX, pos2_1 = pos4_1 - t.clientY, pos3_1 = t.clientX, pos4_1 = t.clientY, test_1_1 = e.offsetTop - pos2_1, test_2_1 = e.offsetLeft - pos1_1, test_2_1 <= 0 || test_1_1 <= 0 || window.innerWidth - 757 < test_2_1 || window.innerHeight - 557 < test_1_1 || (e.style.top = e.offsetTop - pos2_1 + "px", e.style.left = e.offsetLeft - pos1_1 + "px");
  }

  function n() {
    document.onmouseup = null, document.onmousemove = null;
  }

  document.getElementById(e.id + "_bar") ? document.getElementById(e.id + "_bar").onmousedown = t : elmnt.onmousedown = t;
}

function exit_edit() {
  document.querySelector("#editor").style.display = "none";
}

var start_1 = 0;
window.count_1 = 0;
var start_2 = 0;
window.count_2 = 0;
var start_3 = 0,
    v3 = 1;
window.console_output = !0;
var open_window = !1,
    save_window = !1;

function editor_search_with_google() {
  var e = document.getSelection();
  window.open("https://www.google.com/search?q=" + e, "_blank");
}

function editor_replace_find_replace() {
  window.start_1 = 0, window.start_2 = 0, window.start_3 = 0, window.count_1 = 0, window.count_2 = 0;
}

function editor_td_text() {
  var e = new Date();
  document.getElementById("editor_input").value += e;
}

function editor_cancel_gotoline() {
  document.querySelector("#editor_gotoline").style.display = "none", document.querySelector("#editor_overlay").style.display = "none";
}

function editor_goto() {
  selectTextareaLine3(document.getElementById("editor_input"), document.getElementById("editor_goto_input").value);
}

function editor_gotoline() {
  document.querySelector("#editor_gotoline").style.display = "block", document.querySelector("#editor_overlay").style.display = "block";
}

function editor_about() {
  document.querySelector("#editor_about").style.display = "block", document.querySelector("#editor_overlay").style.display = "block";
}

function editor_about_close() {
  document.querySelector("#editor_about").style.display = "none", document.querySelector("#editor_overlay").style.display = "none";
}

function editor_new() {
  if ("" == document.getElementById("editor_input").value) document.getElementById("editor_input").value = "", v3++, document.getElementById("editor_filename").innerHTML = "UNTITLED " + v3;else {
    if (!confirm("There is some text in the editor. If you already downloaded the document, press Ok to create new document, if not, press Cancel, download the document then press Ok to create new document")) throw new Error("This is not an error");
    document.getElementById("editor_input").value = "", v3++, document.getElementById("editor_filename").innerHTML = "UNTITLED " + v3;
  }
}

function editor_replace() {
  document.querySelector("#editor_replace").style.display = "block", document.querySelector("#editor_overlay").style.display = "block";
}

function editor_cancel_replace() {
  document.querySelector("#editor_replace").style.display = "none", document.querySelector("#editor_overlay").style.display = "none", window.start_1 = 0, window.start_2 = 0, window.start_3 = 0, window.count_1 = 0, window.count_2 = 0;
}

function editor_replace2() {
  if ("" === document.getElementById("editor_find_replace_name").value) throw alert("Do not leave the search box empty!"), new Error("This is not an error");
  if (!confirm("Are you sure that you want to replace ALL OCCURRENCES?")) throw new Error("This is not an error");
  {
    var e = document.getElementById("editor_find_replace_name").value,
        t = document.getElementById("editor_replace_find_name").value,
        o = document.getElementById("editor_input").value.split(e).join(t);
    document.getElementById("editor_input").value = o;
  }
}

function editor_replace1() {
  if ("" === document.getElementById("editor_find_replace_name").value) throw alert("Do not leave the search box empty!"), new Error("This is not an error");
  editor_find3(), replaceSelectedText(document.getElementById("editor_input"), document.getElementById("editor_replace_find_name").value);
}

function getInputSelection(e) {
  var t,
      o,
      n,
      r,
      i,
      d = 0,
      l = 0;
  return "number" == typeof e.selectionStart && "number" == typeof e.selectionEnd ? (d = e.selectionStart, l = e.selectionEnd) : (o = document.selection.createRange()) && o.parentElement() == e && (r = e.value.length, t = e.value.replace(/\r\n/g, "\n"), (n = e.createTextRange()).moveToBookmark(o.getBookmark()), (i = e.createTextRange()).collapse(!1), n.compareEndPoints("StartToEnd", i) > -1 ? d = l = r : (d = -n.moveStart("character", -r), d += t.slice(0, d).split("\n").length - 1, n.compareEndPoints("EndToEnd", i) > -1 ? l = r : (l = -n.moveEnd("character", -r), l += t.slice(0, l).split("\n").length - 1))), {
    start: d,
    end: l
  };
}

function replaceSelectedText(e, t) {
  var o = getInputSelection(e),
      n = e.value;
  e.value = n.slice(0, o.start) + t + n.slice(o.end);
}

function editor_find1() {
  if ("" === document.getElementById("editor_find_name").value) throw alert("Do not leave the search box empty!"), new Error("This is not an error");
  var e = document.getElementById("editor_find_name");
  selectTextareaLine(document.getElementById("editor_input"), e.value);
}

function editor_find2() {
  if ("" === document.getElementById("editor_find_replace_name").value) throw alert("Do not leave the search box empty!"), new Error("This is not an error");
  var e = document.getElementById("editor_find_replace_name");
  selectTextareaLine1(document.getElementById("editor_input"), e.value);
}

function editor_find3() {
  var e = document.getElementById("editor_find_replace_name");
  selectTextareaLine2(document.getElementById("editor_input"), e.value);
}

function selectTextareaLine3(e, t) {
  if (--t > -1) {
    for (var o = e.value.split("\n"), n = 0, r = e.value.length, i = 0; i < o.length && i != t; i++) {
      n += o[i].length + 1;
    }

    r = o[t].length + n;

    if (void 0 !== e.selectionStart) {
      e.focus(), e.selectionStart = n, e.selectionEnd = r;
      var d = e.value.substr(0, e.selectionStart).split("\n").length;

      if (d >= 29) {
        var l = 15 * (d - 29) + 30;
        e.scrollTop = l;
      } else e.scrollTop = 0;

      return !0;
    }

    if (document.selection && document.selection.createRange) {
      e.focus(), e.select();
      var a = document.selection.createRange();
      return a.collapse(!0), a.moveEnd("character", r), a.moveStart("character", n), a.select(), !0;
    }

    return !1;
  }

  return alert("A line number can't be a negative number"), !1;
}

function selectTextareaLine2(e, t) {
  if (!(e.value.indexOf(t, window.start_3) > -1)) throw alert("End of line reached!"), new Error("Do not panic! This is not a error");
  {
    e.value.split(" ");

    var _r = e.value.indexOf(t, window.start_3),
        i = _r + t.length;

    if (void 0 !== e.selectionStart) {
      e.focus(), e.selectionStart = _r, e.selectionEnd = i, count_1++, window.start_3 = e.value.indexOf(t, window.start_3) + 1;
      var o = e.value.substr(0, e.selectionStart).split("\n").length;

      if (o >= 29) {
        var n = 15 * (o - 29) + 30;
        e.scrollTop = n;
      } else e.scrollTop = 0;

      return !0;
    }
  }

  if (document.selection && document.selection.createRange) {
    e.focus(), e.select();
    var r = document.selection.createRange();
    return r.collapse(!0), r.moveEnd("character", endPos_1), r.moveStart("character", startPos_1), r.select(), !0;
  }

  return !1;
}

function selectTextareaLine(e, t) {
  if (e.value.indexOf(t, window.start_1) > -1) {
    e.value.split(" ");

    var _r2 = e.value.indexOf(t, window.start_1),
        i = _r2 + t.length;

    if (void 0 !== e.selectionStart) {
      e.focus(), e.selectionStart = _r2, e.selectionEnd = i, count_1++, window.start_1 = e.value.indexOf(t, window.start_1) + 1;
      var o = e.value.substr(0, e.selectionStart).split("\n").length;

      if (o >= 29) {
        var n = 15 * (o - 29) + 30;
        e.scrollTop = n;
      } else e.scrollTop = 0;

      return !0;
    }
  } else {
    if (!document.getElementById("editor_wrap_around").checked) throw alert("End of line reached!"), new Error("Do not panic! This is not a error");
    window.start_1 = 0;
  }

  if (document.selection && document.selection.createRange) {
    e.focus(), e.select();
    var r = document.selection.createRange();
    return r.collapse(!0), r.moveEnd("character", endPos_1), r.moveStart("character", startPos_1), r.select(), !0;
  }

  return !1;
}

function selectTextareaLine1(e, t) {
  if (e.value.indexOf(t, window.start_2) > -1) {
    e.value.split(" ");

    var _r3 = e.value.indexOf(t, window.start_2),
        i = _r3 + t.length;

    if (void 0 !== e.selectionStart) {
      e.focus(), e.selectionStart = _r3, e.selectionEnd = i, count_2++, window.start_2 = e.value.indexOf(t, window.start_2) + 1;
      var o = e.value.substr(0, e.selectionStart).split("\n").length;

      if (o >= 29) {
        var n = 15 * (o - 29) + 30;
        e.scrollTop = n;
      } else e.scrollTop = 0;

      return !0;
    }
  } else {
    if (!document.getElementById("editor_wrap_around1").checked) throw alert("End of line reached!"), new Error("Do not panic! This is not a error");
    window.start_2 = 0;
  }

  if (document.selection && document.selection.createRange) {
    e.focus(), e.select();
    var r = document.selection.createRange();
    return r.collapse(!0), r.moveEnd("character", endPos_2), r.moveStart("character", startPos_2), r.select(), !0;
  }

  return !1;
}

function editor_find() {
  document.querySelector("#editor_find").style.display = "block", document.querySelector("#editor_overlay").style.display = "block";
}

function editor_cancel_find() {
  document.querySelector("#editor_find").style.display = "none", document.querySelector("#editor_overlay").style.display = "none", window.start_1 = 0, window.start_2 = 0, window.start_3 = 0, window.count_1 = 0, window.count_2 = 0;
}

function editor_cut_text() {
  document.getSelection();
  if (!document.execCommand("cut")) return alert("Sorry! Browser not support or document.execCommand is not supported"), !1;
  document.execCommand("cut");
}

function editor_copy_text() {
  document.getSelection();
  if (!document.execCommand("copy")) return alert("Sorry! Browser not support or document.execCommand is not supported"), !1;
  document.execCommand("copy");
}

function editor_paste_text() {
  if (!document.execCommand("paste")) return alert("Sorry! Due to security concern, document.execCommand('paste') is no longer support on major browser and only work in Internet Explorer"), !1;
  document.querySelector("#editor_input").focus(), document.execCommand("paste"), navigator.clipboard.readText();
}

function editor_undo_text() {
  if (!document.execCommand("undo")) return alert("Sorry! Browser not support or document.execCommand is not supported"), !1;
  document.execCommand("undo");
}

function editor_redo_text() {
  if (!document.execCommand("redo")) return alert("Sorry! Browser not support or document.execCommand is no longer supported"), !1;
  document.execCommand("redo");
}

function editor_selectall_text() {
  document.getElementById("editor_input").focus(), document.getElementById("editor_input").select();
}

function editor_exit() {
  confirm("WARNING: Unlike the close button up the top that only close the window but still keep the progress. Reset and Close will reset your progress [including the console log] and close the window. Please download any document that you're currently writing!\r\n Are you sure you want to continue?") && window.location.reload(!0);
}

function editor_open() {
  document.querySelector("#editor_open").style.display = "block", document.querySelector("#editor_overlay").style.display = "block";
}

function editor_cancel_save() {
  document.querySelector("#editor_save").style.display = "none", document.querySelector("#editor_overlay").style.display = "none";
}

function editor_cancel_load() {
  document.querySelector("#editor_open").style.display = "none", document.querySelector("#editor_overlay").style.display = "none";
}

function editor_save() {
  document.querySelector("#editor_save").style.display = "block", document.querySelector("#editor_overlay").style.display = "block";
}

function editor_load1() {
  var e = document.getElementById("editor_open_name").files[0],
      t = new FileReader();
  t.onload = function (e) {
    var t = e.target.result;
    document.getElementById("editor_input").value = t;
  }, t.readAsText(e, "UTF-8"), document.querySelector("#editor_open").style.display = "none", document.querySelector("#editor_overlay").style.display = "none";
  var o = document.getElementById("editor_open_name").value;

  if (o) {
    var n = o.indexOf("\\") >= 0 ? o.lastIndexOf("\\") : o.lastIndexOf("/"),
        r = o.substring(n);
    0 !== r.indexOf("\\") && 0 !== r.indexOf("/") || (r = r.substring(1)), document.getElementById("editor_filename").innerHTML = "File: " + r;
  }
}

function editor_save1() {
  var e = document.getElementById("editor_input").value,
      t = new Blob([e], {
    type: "text/plain"
  }),
      o = window.URL.createObjectURL(t);

  if ("" == document.getElementById("editor_save_name").value) {
    var n = "DEFAULT";
    (r = document.createElement("a")).download = n, r.innerHTML = "Download File", r.href = o, r.onclick = destroyClickedElement, r.style.display = "none", document.body.appendChild(r), r.click();
  } else {
    var r;
    n = document.getElementById("editor_save_name").value;
    (r = document.createElement("a")).download = n, r.innerHTML = "Download File", r.href = o, r.onclick = destroyClickedElement, r.style.display = "none", document.body.appendChild(r), r.click();
  }

  document.querySelector("#editor_save").style.display = "none", document.getElementById("editor_filename").innerHTML = "File: " + document.getElementById("editor_save_name").value, document.querySelector("#editor_overlay").style.display = "none";
}

function destroyClickedElement(e) {
  document.body.removeChild(e.target);
}