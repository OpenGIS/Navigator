import { Fragment as e, computed as t, createApp as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createStaticVNode as s, createTextVNode as c, createVNode as l, markRaw as u, normalizeClass as d, onMounted as f, openBlock as p, reactive as m, ref as h, resolveDynamicComponent as g, toDisplayString as _, unref as v, watch as y } from "vue";
import { WaymarkMarker as b, createInstance as x } from "@ogis/waymark-js";
//#region \0rolldown/runtime.js
var S = Object.defineProperty, C = (e, t) => {
	let n = {};
	for (var r in e) S(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || S(n, Symbol.toStringTag, { value: "Module" }), n;
}, w = "<?xml version=\"1.0\" encoding=\"utf-8\"?><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><symbol fill=\"currentColor\" class=\"bwbi bwbi-arrow-clockwise\" viewBox=\"0 0 16 16\" id=\"arrow-clockwise\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z\"/><path d=\"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466\"/></symbol><symbol fill=\"currentColor\" class=\"bvbi bvbi-arrow-down-right\" viewBox=\"0 0 16 16\" id=\"arrow-down-right\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z\"/></symbol><symbol fill=\"currentColor\" class=\"bubi bubi-arrow-left-right\" viewBox=\"0 0 16 16\" id=\"arrow-left-right\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5\"/></symbol><symbol fill=\"currentColor\" class=\"btbi btbi-bell\" viewBox=\"0 0 16 16\" id=\"bell\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6\"/></symbol><symbol fill=\"currentColor\" class=\"bsbi bsbi-caret-down\" viewBox=\"0 0 16 16\" id=\"caret-down\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659\"/></symbol><symbol fill=\"currentColor\" class=\"brbi brbi-caret-left\" viewBox=\"0 0 16 16\" id=\"caret-left\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753\"/></symbol><symbol fill=\"currentColor\" class=\"bqbi bqbi-caret-right\" viewBox=\"0 0 16 16\" id=\"caret-right\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753\"/></symbol><symbol fill=\"currentColor\" class=\"bpbi bpbi-caret-up\" viewBox=\"0 0 16 16\" id=\"caret-up\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659\"/></symbol><symbol fill=\"currentColor\" class=\"bnbi bnbi-check\" viewBox=\"0 0 16 16\" id=\"check\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z\"/></symbol><symbol fill=\"currentColor\" class=\"bobi bobi-check-circle\" viewBox=\"0 0 16 16\" id=\"check-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/><path d=\"m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05\"/></symbol><symbol fill=\"currentColor\" class=\"bmbi bmbi-circle\" viewBox=\"0 0 16 16\" id=\"circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/></symbol><symbol fill=\"currentColor\" class=\"blbi blbi-cloud-arrow-up\" viewBox=\"0 0 16 16\" id=\"cloud-arrow-up\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z\"/><path d=\"M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z\"/></symbol><symbol fill=\"currentColor\" class=\"bkbi bkbi-dash-circle\" viewBox=\"0 0 16 16\" id=\"dash-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/><path d=\"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8\"/></symbol><symbol fill=\"currentColor\" class=\"bjbi bjbi-envelope\" viewBox=\"0 0 16 16\" id=\"envelope\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z\"/></symbol><symbol fill=\"currentColor\" class=\"bibi bibi-eraser\" viewBox=\"0 0 16 16\" id=\"eraser\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z\"/></symbol><symbol fill=\"currentColor\" class=\"bhbi bhbi-exclamation-circle\" viewBox=\"0 0 16 16\" id=\"exclamation-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/><path d=\"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z\"/></symbol><symbol fill=\"currentColor\" class=\"bgbi bgbi-file-earmark\" viewBox=\"0 0 16 16\" id=\"file-earmark\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z\"/></symbol><symbol fill=\"currentColor\" class=\"bfbi bfbi-file-text\" viewBox=\"0 0 16 16\" id=\"file-text\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z\"/><path d=\"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1\"/></symbol><symbol fill=\"currentColor\" class=\"bebi bebi-folder\" viewBox=\"0 0 16 16\" id=\"folder\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z\"/></symbol><symbol fill=\"currentColor\" class=\"bdbi bdbi-folder2-open\" viewBox=\"0 0 16 16\" id=\"folder2-open\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z\"/></symbol><symbol fill=\"currentColor\" class=\"bcbi bcbi-gear\" viewBox=\"0 0 16 16\" id=\"gear\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0\"/><path d=\"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z\"/></symbol><symbol fill=\"currentColor\" class=\"bbbi bbbi-globe\" viewBox=\"0 0 16 16\" id=\"globe\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z\"/></symbol><symbol fill=\"currentColor\" class=\"babi babi-graph-down\" viewBox=\"0 0 16 16\" id=\"graph-down\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M0 0h1v15h15v1H0zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07\"/></symbol><symbol fill=\"currentColor\" class=\"azbi azbi-heart\" viewBox=\"0 0 16 16\" id=\"heart\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15\"/></symbol><symbol fill=\"currentColor\" class=\"aybi aybi-house\" viewBox=\"0 0 16 16\" id=\"house\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z\"/></symbol><symbol fill=\"currentColor\" class=\"axbi axbi-info-circle\" viewBox=\"0 0 16 16\" id=\"info-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/><path d=\"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0\"/></symbol><symbol fill=\"currentColor\" class=\"awbi awbi-layout-sidebar-inset\" viewBox=\"0 0 16 16\" id=\"layout-sidebar-inset\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z\"/><path d=\"M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"/></symbol><symbol fill=\"currentColor\" class=\"avbi avbi-list\" viewBox=\"0 0 16 16\" id=\"list\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5\"/></symbol><symbol fill=\"currentColor\" class=\"aubi aubi-lock\" viewBox=\"0 0 16 16\" id=\"lock\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3\"/></symbol><symbol fill-rule=\"evenodd\" viewBox=\"0 0 16 16\" id=\"logo\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.408 3.033a.35.35 0 0 0-.15.301v.183l-.486.1a4.48 4.48 0 0 0-3.266 2.668 4.6 4.6 0 0 0-.252.8c-.096.523-.092.515-.249.515-.208 0-.448.23-.448.429 0 .209.243.428.475.428.144 0 .168.022.168.154 0 .245.173.868.353 1.268.216.482.58.987.998 1.381.746.707 1.329.985 2.578 1.231.103.02.128.064.128.22a.4.4 0 0 0 .68.29c.044-.044.095-.175.115-.293l.035-.215.4-.07c1.675-.293 3.066-1.603 3.51-3.305.156-.605.16-1.6.008-2.188a4.53 4.53 0 0 0-3.5-3.32c-.446-.093-.448-.094-.448-.276 0-.196-.213-.42-.4-.42-.054 0-.167.054-.25.119m-.6 1.857C3.165 5.332 2.1 7.084 2.481 8.71a3.31 3.31 0 0 0 2.436 2.459c2.008.473 3.94-1.062 3.94-3.13 0-.958-.274-1.628-.941-2.302-.423-.427-.99-.755-1.516-.875-.367-.084-1.232-.069-1.593.028m5.427.818c.314.747.416 1.31.416 2.292 0 .954-.085 1.444-.39 2.255-.148.393-.153.495-.018.39.04-.032.844-.45 1.787-.93s2.083-1.065 2.534-1.3l.82-.428-1.905-.969a471 471 0 0 1-2.613-1.336c-.388-.202-.726-.368-.751-.368s.029.178.12.394m-5.091.38c-.99.275-1.601 1.256-1.395 2.239.172.822.724 1.364 1.59 1.558.521.117 1.249-.129 1.69-.57.923-.923.648-2.512-.534-3.084a1.92 1.92 0 0 0-1.351-.142m.207.999c-.386.115-.631.503-.595.94.03.356.21.637.48.75.828.346 1.613-.455 1.212-1.235a.91.91 0 0 0-1.097-.455m6.45-.031c-.031.01-.128.034-.214.053-.164.036-.222.204-.072.204.113 0 .11.036-.057.857-.078.386-.143.711-.143.723s.114.02.253.02h.252l.126-.557c.189-.834.299-1.006.541-.848.076.05.166.091.2.091.082 0 .244-.39.205-.492-.06-.159-.33-.088-.551.145l-.214.225.03-.225c.03-.217.025-.224-.134-.22-.09.002-.19.013-.222.024\"/></symbol><symbol fill=\"currentColor\" class=\"asbi asbi-moon\" viewBox=\"0 0 16 16\" id=\"moon\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286\"/></symbol><symbol fill=\"currentColor\" class=\"arbi arbi-pause-circle\" viewBox=\"0 0 16 16\" id=\"pause-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/><path d=\"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z\"/></symbol><symbol fill=\"currentColor\" class=\"aqbi aqbi-pencil\" viewBox=\"0 0 16 16\" id=\"pencil\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325\"/></symbol><symbol fill=\"currentColor\" class=\"apbi apbi-person-circle\" viewBox=\"0 0 16 16\" id=\"person-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/><path fill-rule=\"evenodd\" d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1\"/></symbol><symbol fill=\"currentColor\" class=\"aobi aobi-plus-circle\" viewBox=\"0 0 16 16\" id=\"plus-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/><path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4\"/></symbol><symbol fill-rule=\"evenodd\" viewBox=\"0 0 16 16\" id=\"position\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.875 2.635c-.21.106-.275.206-.275.422 0 .18-.01.19-.187.219-1.69.27-2.956 1.185-3.662 2.642-.25.516-.451 1.168-.451 1.466 0 .152-.013.166-.152.166-.338 0-.571.257-.512.564.035.184.184.3.425.333l.207.028.065.38c.234 1.391 1.16 2.667 2.426 3.34.46.245.849.383 1.391.494l.425.088.027.199c.034.256.076.32.263.398.3.126.585-.083.585-.428v-.181l.348-.058c1.845-.304 3.366-1.71 3.83-3.537.067-.266.122-.536.122-.601 0-.098.026-.119.147-.119.247 0 .403-.088.48-.272.124-.296-.058-.565-.414-.613l-.194-.026-.083-.44a4.6 4.6 0 0 0-1.208-2.336 6 6 0 0 0-.708-.643c-.562-.401-1.395-.732-2.133-.845-.178-.028-.187-.039-.187-.218 0-.133-.034-.22-.112-.292-.204-.186-.3-.212-.463-.13m-.653 2.04c-1.21.326-2.09 1.142-2.48 2.3-.1.302-.117.446-.116 1.05 0 .633.013.735.133 1.067.2.546.421.888.866 1.333 1.118 1.119 2.773 1.324 4.147.514.695-.41 1.247-1.108 1.513-1.914.113-.345.132-.486.133-1.025 0-.553-.015-.67-.137-1.025-.399-1.159-1.274-1.986-2.411-2.276-.457-.117-1.26-.129-1.648-.024M7.5 6.022a2.1 2.1 0 0 0-1.48 1.495 1.87 1.87 0 0 0 .008 1.01c.403 1.55 2.369 2.06 3.466.9 1.077-1.14.547-3.005-.967-3.4A2 2 0 0 0 7.5 6.023m.058 1.135c-.598.297-.684 1.168-.158 1.61.466.392 1.193.23 1.47-.326.142-.284.157-.418.078-.702-.158-.57-.839-.854-1.39-.582\"/></symbol><symbol fill-rule=\"evenodd\" viewBox=\"0 0 16 16\" id=\"position-heading\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.935.416c-.021.056-1.574 2.481-2.207 3.448l-.09.135.218-.076A7 7 0 0 1 8.4 3.575c.517.035 1.306.179 1.65.3.118.042.225.066.237.055s-.09-.187-.225-.389-.635-.973-1.11-1.716C7.993.33 7.977.307 7.935.416m-.894 3.782a3.98 3.98 0 0 0-2.883 3.06c-.08.39-.081.392-.24.392-.173 0-.368.186-.368.35s.195.35.367.35h.16l.088.424A3.92 3.92 0 0 0 6.5 11.633c.206.088.521.187.7.22.457.084.45.08.45.218 0 .182.2.392.375.392.183 0 .375-.213.375-.416 0-.126.019-.147.134-.147.215 0 .76-.152 1.11-.309a4 4 0 0 0 1.209-.873c.618-.653.861-1.163 1.077-2.255.018-.09.056-.113.192-.113.316 0 .473-.37.253-.595a.6.6 0 0 0-.256-.1l-.187-.03-.062-.35c-.256-1.467-1.402-2.684-2.892-3.072-.516-.134-1.443-.137-1.937-.005m.215 1.081c-.719.193-1.45.8-1.77 1.471-.228.474-.283.718-.285 1.252a2.77 2.77 0 0 0 1.303 2.397c.826.533 1.876.585 2.793.138.444-.217 1.023-.795 1.24-1.24.407-.834.413-1.68.019-2.522-.313-.667-.96-1.226-1.687-1.457-.44-.14-1.174-.157-1.613-.039m.34 1.09c-.904.243-1.45 1.152-1.223 2.039.175.684.684 1.153 1.4 1.287.3.056.805-.043 1.1-.216.592-.347.952-1.101.823-1.724-.154-.745-.637-1.25-1.336-1.399-.326-.069-.47-.067-.764.012m.054.941c-.457.235-.578.834-.247 1.212.193.22.393.297.691.268.294-.028.541-.191.637-.42.302-.724-.398-1.41-1.081-1.06\"/></symbol><symbol fill-rule=\"evenodd\" viewBox=\"0 0 16 16\" id=\"position-lock\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.875 2.635c-.21.106-.275.206-.275.422 0 .18-.01.19-.187.219-1.69.27-2.956 1.185-3.662 2.642-.25.516-.451 1.168-.451 1.466 0 .152-.013.166-.152.166-.338 0-.571.257-.512.564.035.184.184.3.425.333l.207.028.065.38c.234 1.391 1.16 2.667 2.426 3.34.46.245.849.383 1.391.494l.425.088.027.199c.034.256.076.32.263.398.3.126.585-.083.585-.428v-.181l.348-.058c1.845-.304 3.366-1.71 3.83-3.537.067-.266.122-.536.122-.601 0-.098.026-.119.147-.119.247 0 .403-.088.48-.272.124-.296-.058-.565-.414-.613l-.194-.026-.083-.44a4.6 4.6 0 0 0-1.208-2.336 6 6 0 0 0-.708-.643c-.562-.401-1.395-.732-2.133-.845-.178-.028-.187-.039-.187-.218 0-.133-.034-.22-.112-.292-.204-.186-.3-.212-.463-.13m-.653 2.04c-1.21.326-2.09 1.142-2.48 2.3-.1.302-.117.446-.116 1.05 0 .633.013.735.133 1.067.2.546.421.888.866 1.333 1.118 1.119 2.773 1.324 4.147.514.695-.41 1.247-1.108 1.513-1.914.113-.345.132-.486.133-1.025 0-.553-.015-.67-.137-1.025-.399-1.159-1.274-1.986-2.411-2.276-.457-.117-1.26-.129-1.648-.024m.422 1.191c-.514.192-.752.547-.785 1.167-.014.274-.042.417-.08.417-.088 0-.365.304-.426.466-.03.077-.053.482-.052.9 0 .692.01.777.113.959a.8.8 0 0 0 .334.313c.21.105.284.112 1.252.112s1.042-.007 1.252-.112a.8.8 0 0 0 .334-.313c.102-.182.112-.267.113-.96 0-.477-.021-.812-.058-.9-.072-.17-.338-.465-.42-.465-.038 0-.066-.144-.08-.422-.02-.358-.045-.458-.17-.661-.276-.445-.873-.67-1.327-.501m.123.437c-.314.094-.494.437-.458.874l.016.198h1.35l.014-.275c.028-.582-.4-.953-.922-.797\"/></symbol><symbol fill=\"currentColor\" class=\"akbi akbi-question-circle\" viewBox=\"0 0 16 16\" id=\"question-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/><path d=\"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94\"/></symbol><symbol fill=\"currentColor\" class=\"ajbi ajbi-record-btn-fill\" viewBox=\"0 0 16 16\" id=\"record-btn-fill\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6\"/></symbol><symbol fill-rule=\"evenodd\" viewBox=\"0 0 16 16\" id=\"route\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.8.587c-.798.1-1.338.564-1.529 1.311a1.6 1.6 0 0 0-.051.587c.028.244.197.68.337.87.049.068-.124.423-1.017 2.092l-1.076 2.01-.295.016c-.448.025-1.069.317-1.233.58-.066.107-.172.122-.346.049a40 40 0 0 0-1.146-.376L6.413 7.4l-.033-.202c-.079-.494-.41-.941-.889-1.2-.296-.16-.346-.17-.791-.17-.569-.001-.835.105-1.216.485a1.706 1.706 0 0 0-.212 2.156c.098.147.178.287.178.312s-.31.754-.689 1.62l-.688 1.575-.285.036c-.886.11-1.501.826-1.501 1.745 0 .486.145.822.51 1.182a1.695 1.695 0 0 0 2.346.037c.618-.558.722-1.555.237-2.26l-.17-.248.162-.371.7-1.604.536-1.234.259-.033c.357-.047.77-.242 1.014-.482l.207-.202 1.068.31c1.435.414 1.312.354 1.414.69.166.54.517.945 1.018 1.173.359.163.992.153 1.362-.02a1.83 1.83 0 0 0 .836-.836c.122-.25.139-.34.139-.758 0-.453-.009-.49-.182-.804l-.181-.329.135-.246c.074-.135.503-.932.952-1.771s.874-1.63.945-1.757l.129-.231.33-.024c1.374-.098 2.112-1.69 1.264-2.726-.337-.411-1.01-.69-1.517-.625m-.082 1.263c-.278.112-.36.537-.147.766.154.166.34.212.532.133.206-.086.297-.232.297-.48 0-.349-.34-.557-.682-.42m-9.25 5.248c-.233.1-.345.465-.216.706.08.152.336.26.527.225.51-.096.486-.888-.029-.954a.7.7 0 0 0-.282.023m5.556 1.623c-.17.074-.274.26-.274.486 0 .209.238.444.45.444.312 0 .496-.172.498-.466.003-.254-.071-.378-.275-.463-.203-.085-.207-.085-.4-.001m-8.377 4.676c-.397.397.05 1.04.547.783.184-.095.257-.217.257-.429 0-.221-.082-.347-.277-.43-.25-.103-.364-.087-.527.076\"/></symbol><symbol fill=\"currentColor\" class=\"ahbi ahbi-search\" viewBox=\"0 0 16 16\" id=\"search\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0\"/></symbol><symbol fill-rule=\"evenodd\" viewBox=\"0 0 16 16\" id=\"sidebar-info\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.32 1.92c-.51.125-.936.476-1.182.976l-.113.229v9.75l.132.282c.169.36.476.667.836.836l.282.132 5.659.013c5.64.013 5.66.013 5.94-.091.52-.195.939-.625 1.088-1.114.049-.161.063-1.274.063-4.958v-4.75l-.141-.305a1.93 1.93 0 0 0-.909-.905l-.3-.14-5.55-.009c-4.3-.007-5.608.006-5.806.054m-.04.943a.85.85 0 0 0-.313.332l-.116.22V8.02c0 5.161-.027 4.787.367 5.102l.192.153 5.483.015c3.829.01 5.54-.002 5.67-.04.273-.079.52-.357.585-.657s.07-8.804.007-9.136a.88.88 0 0 0-.403-.594l-.166-.113H8.03l-5.555.002Zm1.096.762a1 1 0 0 0-.571.608c-.086.31-.07 7.287.018 7.533.086.24.202.368.444.492.175.09.282.096 1.303.082 1.11-.015 1.114-.015 1.314-.148.387-.256.367-.029.367-4.214 0-3.038-.013-3.762-.068-3.894-.087-.209-.333-.416-.571-.482-.29-.08-1.993-.063-2.236.023m1.208 1.982c-.158.091-.247.374-.181.573.137.415.877.433 1.046.026a.48.48 0 0 0-.134-.555c-.142-.113-.57-.138-.731-.044m-.164 1.545c-.52.103-.619.146-.619.273 0 .1.037.131.2.175.11.03.2.072.2.095s-.112.55-.25 1.175c-.369 1.673-.352 1.764.311 1.718.484-.034.839-.187.839-.361 0-.114-.02-.127-.197-.127-.108 0-.206-.017-.218-.037s.11-.657.27-1.413.292-1.414.293-1.463c.002-.074-.043-.086-.31-.082a4 4 0 0 0-.519.047\"/></symbol><symbol fill=\"currentColor\" class=\"afbi afbi-speedometer2\" viewBox=\"0 0 16 16\" id=\"speedometer2\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z\"/><path fill-rule=\"evenodd\" d=\"M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3\"/></symbol><symbol fill=\"currentColor\" class=\"aebi aebi-sun\" viewBox=\"0 0 16 16\" id=\"sun\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708\"/></symbol><symbol fill=\"currentColor\" class=\"adbi adbi-three-dots\" viewBox=\"0 0 16 16\" id=\"three-dots\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3\"/></symbol><symbol fill=\"currentColor\" class=\"acbi acbi-trash\" viewBox=\"0 0 16 16\" id=\"trash\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z\"/><path d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z\"/></symbol><symbol fill=\"currentColor\" class=\"aabi aabi-x\" viewBox=\"0 0 16 16\" id=\"x\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/></symbol><symbol fill=\"currentColor\" class=\"abbi abbi-x-circle\" viewBox=\"0 0 16 16\" id=\"x-circle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/></symbol></svg>", T = [];
T.primary = "#42c635";
function E(e = "primary") {
	return T[e] ? T[e] : !1;
}
//#endregion
//#region src/composables/useStorage.js
function D(e, t = {}) {
	let n = `navigator_${e}`, r = m(t);
	try {
		let e = localStorage.getItem(n);
		if (e) {
			let t = JSON.parse(e);
			Object.assign(r, t);
		}
	} catch (t) {
		console.error(`Failed to load storage for [${e}]`, t);
	}
	return y(r, (t) => {
		try {
			localStorage.setItem(n, JSON.stringify(t));
		} catch (t) {
			console.error(`Failed to save storage for [${e}]`, t);
		}
	}, { deep: !0 }), r;
}
//#endregion
//#region src/helpers/Navigator.js
var O = (e = {}) => new Promise((t, n) => {
	if (!("geolocation" in navigator)) {
		n(/* @__PURE__ */ Error("Geolocation is not supported by this browser."));
		return;
	}
	navigator.geolocation.getCurrentPosition(t, n, {
		enableHighAccuracy: !0,
		maximumAge: 0,
		timeout: 5e3,
		...e
	});
}), k = async () => typeof DeviceOrientationEvent < "u" && typeof DeviceOrientationEvent.requestPermission == "function" ? await DeviceOrientationEvent.requestPermission() === "granted" : !0, ee = (e) => {
	let t = (t) => {
		let n = null;
		t.webkitCompassHeading !== void 0 && t.webkitCompassHeading !== null ? n = t.webkitCompassHeading : t.alpha !== null && (t.absolute === !0 || t.type === "deviceorientationabsolute") && (n = 360 - t.alpha), n !== null && e(n);
	};
	return "ondeviceorientationabsolute" in window ? window.addEventListener("deviceorientationabsolute", t, !0) : window.addEventListener("deviceorientation", t, !0), t;
}, A = (e) => {
	e && (window.removeEventListener("deviceorientationabsolute", e, !0), window.removeEventListener("deviceorientation", e, !0));
}, j = class e extends b {
	constructor(t = {}, n = null, r = {}) {
		let i = e.generateProperties(t, n), a = e.generateGeometry(t);
		r.properties = {
			...r.properties,
			...i
		}, r.geometry = a, super(r);
	}
	update(t = {}, n = null) {
		let r = e.generateProperties(t, n), i = e.generateGeometry(t);
		this.properties = {
			...this.properties,
			...r
		}, this.geometry = i;
	}
	static generateGeometry(e) {
		if (!e.coords || typeof e.coords.longitude != "number" || typeof e.coords.latitude != "number") return {
			type: "Point",
			coordinates: [
				0,
				0,
				0
			]
		};
		let t = e.coords, n = typeof t.altitude == "number" ? t.altitude : null;
		return {
			type: "Point",
			coordinates: [
				t.longitude,
				t.latitude,
				n
			]
		};
	}
	static generateProperties(e, t) {
		if (!e.coords) return {};
		let n = e.coords, r = typeof n.altitude == "number" ? n.altitude : null, i = {
			heading: t,
			speed: n.speed,
			altitude: r,
			accuracy: n.accuracy,
			altitudeAccuracy: n.altitudeAccuracy,
			timestamp: e.timestamp
		}, a = typeof t == "number" && !isNaN(t) ? t : null;
		return {
			ogisNav: i,
			waymark: {
				icon: {
					html: a ? `<svg class="oi" width="40" height="40" fill="${E("primary")}" style="display: inline-block; transform: rotate(${a}deg);"><use xlink:href="#position-heading" /></svg>` : `<svg class="oi" width="40" height="40" fill="${E("primary")}" style="display: inline-block;"><use xlink:href="#position" /></svg>`,
					width: 48,
					height: 48
				},
				paint: {
					"circle-radius": 0,
					"circle-color": "transparent",
					"circle-stroke-color": "transparent",
					"circle-stroke-width": 0
				}
			}
		};
	}
}, te = typeof global == "object" && global && global.Object === Object && global, ne = typeof self == "object" && self && self.Object === Object && self, re = te || ne || Function("return this")(), ie = re.Symbol, ae = Object.prototype, oe = ae.hasOwnProperty, se = ae.toString, ce = ie ? ie.toStringTag : void 0;
function le(e) {
	var t = oe.call(e, ce), n = e[ce];
	try {
		e[ce] = void 0;
		var r = !0;
	} catch {}
	var i = se.call(e);
	return r && (t ? e[ce] = n : delete e[ce]), i;
}
//#endregion
//#region node_modules/lodash-es/_objectToString.js
var ue = Object.prototype.toString;
function de(e) {
	return ue.call(e);
}
//#endregion
//#region node_modules/lodash-es/_baseGetTag.js
var fe = "[object Null]", pe = "[object Undefined]", me = ie ? ie.toStringTag : void 0;
function he(e) {
	return e == null ? e === void 0 ? pe : fe : me && me in Object(e) ? le(e) : de(e);
}
//#endregion
//#region node_modules/lodash-es/isObjectLike.js
function ge(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/lodash-es/isSymbol.js
var _e = "[object Symbol]";
function ve(e) {
	return typeof e == "symbol" || ge(e) && he(e) == _e;
}
//#endregion
//#region node_modules/lodash-es/_trimmedEndIndex.js
var ye = /\s/;
function be(e) {
	for (var t = e.length; t-- && ye.test(e.charAt(t)););
	return t;
}
//#endregion
//#region node_modules/lodash-es/_baseTrim.js
var xe = /^\s+/;
function Se(e) {
	return e && e.slice(0, be(e) + 1).replace(xe, "");
}
//#endregion
//#region node_modules/lodash-es/isObject.js
function Ce(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/lodash-es/toNumber.js
var we = NaN, Te = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, De = /^0o[0-7]+$/i, Oe = parseInt;
function ke(e) {
	if (typeof e == "number") return e;
	if (ve(e)) return we;
	if (Ce(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = Ce(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = Se(e);
	var n = Ee.test(e);
	return n || De.test(e) ? Oe(e.slice(2), n ? 2 : 8) : Te.test(e) ? we : +e;
}
//#endregion
//#region node_modules/lodash-es/now.js
var Ae = function() {
	return re.Date.now();
}, je = "Expected a function", Me = Math.max, Ne = Math.min;
function Pe(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(je);
	t = ke(t) || 0, Ce(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? Me(ke(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? Ne(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = Ae();
		if (g(e)) return v(e);
		s = setTimeout(_, h(e));
	}
	function v(e) {
		return s = void 0, f && r ? p(e) : (r = i = void 0, o);
	}
	function y() {
		s !== void 0 && clearTimeout(s), l = 0, r = c = i = s = void 0;
	}
	function b() {
		return s === void 0 ? o : v(Ae());
	}
	function x() {
		var e = Ae(), n = g(e);
		if (r = arguments, i = this, c = e, n) {
			if (s === void 0) return m(c);
			if (d) return clearTimeout(s), s = setTimeout(_, t), p(c);
		}
		return s === void 0 && (s = setTimeout(_, t)), o;
	}
	return x.cancel = y, x.flush = b, x;
}
//#endregion
//#region node_modules/lodash-es/throttle.js
var Fe = "Expected a function";
function Ie(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(Fe);
	return Ce(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Pe(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
//#endregion
//#region src/core/useWaymark.js
var Le = D("waymark", { mapView: {
	center: null,
	zoom: null
} }), Re = null, ze = () => ({
	waymarkInstance: Re,
	setInstance: (e) => {
		if (Re = e, typeof Re.mapLibreMap?.on != "function") throw Error("Waymark instance does not have a MapLibre map.");
		Le.mapView.center && Le.mapView.zoom && Re.mapLibreMap.jumpTo({
			center: Le.mapView.center,
			zoom: Le.mapView.zoom
		}), Re.mapLibreMap.on("moveend", Ie(() => {
			Le.mapView.center = Re.mapLibreMap.getCenter(), Le.mapView.zoom = Re.mapLibreMap.getZoom();
		}, 1e3));
	}
}), M = D("position", {
	positionMode: null,
	currentPosition: null,
	positionHistory: []
}), Be = null, Ve = null, He = null, Ue = () => {
	let e = (e) => {
		He = e;
	}, n = () => {
		if (!M.currentPosition) return;
		let { waymarkInstance: e } = ze();
		e && (e.geoJSONStore.hasItem(M.currentPosition.id) ? e.geoJSONStore.updateItem(M.currentPosition) : e.geoJSONStore.addItem(M.currentPosition), M.positionMode === "follow" && e.mapLibreMap.jumpTo({ center: M.currentPosition.geometry.coordinates.slice(0, 2) }));
	}, r = async () => {
		let e = await O();
		M.currentPosition instanceof j ? M.currentPosition.update(e, He) : M.currentPosition = new j(e, He, { id: "current-position" });
		let t = new j(e, He, { id: "current-position" });
		M.positionHistory.unshift(t), M.positionHistory.length > 5 && (M.positionHistory = M.positionHistory.slice(0, 5)), n();
	}, i = async () => {
		if (!Be) {
			try {
				await k();
			} catch (e) {
				console.error("Error requesting compass permission:", e);
			}
			await r(), Be = setInterval(() => {
				r();
			}, 5e3), Ve = ee((t) => {
				e(t);
			});
		}
	}, a = () => {
		Be &&= (clearInterval(Be), null), Ve &&= (A(Ve), null);
	};
	return M.positionMode && !Be && i(), {
		positionMode: t(() => M.positionMode),
		currentPosition: t(() => M.currentPosition),
		cyclePositionMode: async () => {
			if (!M.positionMode) {
				let e = M.positionHistory.length === 0;
				M.positionMode = "show", await i();
				let { waymarkInstance: t } = ze();
				if (M.currentPosition) {
					let n = { center: M.currentPosition.geometry.coordinates.slice(0, 2) };
					e && (n.zoom = 14), t.mapLibreMap.jumpTo(n);
				}
			} else if (M.positionMode === "show") M.positionMode = "follow", n();
			else {
				M.positionMode = null, a();
				let { waymarkInstance: e } = ze();
				M.currentPosition && e.geoJSONStore.removeItem(M.currentPosition);
			}
		},
		startPositioning: i,
		stopPositioning: a
	};
}, We = [
	"width",
	"height",
	"fill"
], Ge = ["xlink:href"], Ke = {
	__name: "icon",
	props: {
		name: {
			type: String,
			required: !0
		},
		width: {
			type: [Number, String],
			default: 24
		},
		height: {
			type: [Number, String],
			default: 24
		},
		fill: {
			type: String,
			default: "currentColor"
		}
	},
	setup(e) {
		return (t, n) => (p(), a("svg", {
			width: e.width,
			height: e.height,
			fill: e.fill
		}, [o("use", { "xlink:href": `#${e.name}` }, null, 8, Ge)], 8, We));
	}
}, qe = {
	__name: "position",
	setup(e) {
		let { positionMode: n, cyclePositionMode: r } = Ue(), i = t(() => n.value === "follow" ? "position-lock" : "position"), o = t(() => n.value ? E("primary") : "white");
		return (e, t) => (p(), a("a", {
			href: "#",
			class: d(["navbar-nav-link navbar-nav-link-icon rounded-pill", { active: v(n) }]),
			id: "locate-button",
			onClick: t[0] ||= (e) => v(r)()
		}, [l(Ke, {
			class: "oi",
			width: "40",
			height: "40",
			fill: o.value,
			name: i.value
		}, null, 8, ["fill", "name"])], 2));
	}
}, Je = { class: "sidebar-section sidebar-section-body p-3" }, Ye = { key: 0 }, Xe = { class: "row g-3" }, Ze = { class: "col-6" }, Qe = { class: "card card-body mb-0 p-3 h-100 border-primary-subtle" }, $e = { class: "fw-semibold text-end" }, et = { class: "col-6" }, tt = { class: "card card-body mb-0 p-3 h-100 border-primary-subtle" }, nt = { class: "fw-semibold text-end" }, rt = {
	key: 0,
	class: "col-12"
}, it = { class: "card card-body mb-0 p-3 ps-0 border-warning-subtle" }, at = { class: "d-flex align-items-center justify-content-between" }, ot = { class: "d-flex align-items-center" }, st = { class: "text-end" }, ct = { class: "fw-bold me-2" }, lt = { class: "text-muted small" }, ut = {
	key: 1,
	class: "col-6"
}, dt = { class: "card card-body mb-0 p-3 h-100 border-success-subtle" }, ft = { class: "fw-semibold text-end" }, pt = {
	key: 2,
	class: "col-6"
}, mt = { class: "card card-body mb-0 p-3 h-100 border-info-subtle" }, ht = { class: "fw-semibold text-end" }, gt = {
	key: 1,
	class: "text-muted text-center py-3"
}, _t = { class: "sidebar-section sidebar-section-body p-3 border-top" }, vt = { class: "mb-3 w-100 d-flex align-items-center" }, yt = {
	__name: "panel",
	setup(t) {
		let { currentPosition: n } = Ue(), r = (e) => e == null ? "—" : e.toFixed(6), u = (e) => e == null ? "—" : (e * 3.6).toFixed(1) + " km/h", d = (e) => e == null ? "—" : Math.round(e) + " m", f = (e) => e == null ? "—" : [
			"N",
			"NNE",
			"NE",
			"ENE",
			"E",
			"ESE",
			"SE",
			"SSE",
			"S",
			"SSW",
			"SW",
			"WSW",
			"W",
			"WNW",
			"NW",
			"NNW"
		][Math.round(((e %= 360) < 0 ? e + 360 : e) / 22.5) % 16], m = (e) => e == null ? "—" : Math.round(e) + "°";
		return (t, h) => (p(), a(e, null, [
			h[12] ||= o("div", { class: "sidebar-section sidebar-section-body p-3 pb-0" }, [o("h5", { class: "mb-0" }, "Current Location")], -1),
			o("div", Je, [v(n) && v(n).properties.ogisNav ? (p(), a("div", Ye, [o("div", Xe, [
				o("div", Ze, [o("div", Qe, [h[0] ||= o("div", { class: "d-flex align-items-center mb-1" }, [o("i", { class: "oi oi-globe text-primary me-2" }), o("span", { class: "text-muted small text-uppercase" }, "Lat")], -1), o("div", $e, _(r(v(n).geometry.coordinates[1])), 1)])]),
				o("div", et, [o("div", tt, [h[1] ||= o("div", { class: "d-flex align-items-center mb-1" }, [o("i", { class: "oi oi-globe text-primary me-2" }), o("span", { class: "text-muted small text-uppercase" }, "Lng")], -1), o("div", nt, _(r(v(n).geometry.coordinates[0])), 1)])]),
				v(n).properties.ogisNav.heading === null ? i("", !0) : (p(), a("div", rt, [o("div", it, [o("div", at, [o("div", ot, [l(Ke, {
					class: "text-warning",
					width: "34",
					height: "34",
					fill: "currentColor",
					name: "position-heading"
				}), h[2] ||= o("span", { class: "text-muted small text-uppercase" }, "Heading", -1)]), o("div", st, [o("span", ct, _(f(v(n).properties.ogisNav.heading)), 1), o("span", lt, _(m(v(n).properties.ogisNav.heading)), 1)])])])])),
				v(n).properties.ogisNav.speed === null ? i("", !0) : (p(), a("div", ut, [o("div", dt, [h[3] ||= o("div", { class: "d-flex align-items-center mb-1" }, [o("i", { class: "oi oi-speedometer2 text-success me-2" }), o("span", { class: "text-muted small text-uppercase" }, "Speed")], -1), o("div", ft, _(u(v(n).properties.ogisNav.speed)), 1)])])),
				v(n).properties.ogisNav.altitude === null ? i("", !0) : (p(), a("div", pt, [o("div", mt, [h[4] ||= o("div", { class: "d-flex align-items-center mb-1" }, [o("i", { class: "oi oi-graph-down text-info me-2" }), o("span", { class: "text-muted small text-uppercase" }, "Alt")], -1), o("div", ht, _(d(v(n).properties.ogisNav.altitude)), 1)])]))
			])])) : (p(), a("div", gt, [
				h[5] ||= o("i", { class: "ph-map-pin mb-2 fs-2 d-block" }, null, -1),
				h[6] ||= c(" Location unavailable.", -1),
				h[7] ||= o("br", null, null, -1),
				h[8] ||= c("Press the ", -1),
				l(Ke, {
					class: "ms-auto",
					width: "32",
					height: "32",
					fill: "currentColor",
					name: "position"
				}),
				h[9] ||= c(" button to enable location tracking. ", -1)
			]))]),
			h[13] ||= o("div", { class: "sidebar-section sidebar-section-body p-3 border-top mt-auto" }, [o("p", { class: "mb-2" }, " Use your device location and compass to see where you are, anywhere in the world. "), o("p", { class: "mb-0" }, [
				c("Thanks "),
				o("em", null, "Open Source"),
				c("!")
			])], -1),
			o("div", _t, [o("h6", vt, [h[10] ||= c(" Attribution ", -1), l(Ke, {
				class: "ms-auto text-danger",
				width: "32",
				height: "32",
				fill: "currentColor",
				name: "heart"
			})]), h[11] ||= s("<div class=\"d-flex flex-column gap-3\"><div class=\"d-flex align-items-center\"><span class=\"badge bg-warning bg-opacity-10 text-warning rounded-pill me-2\">Rendering</span><a href=\"https://github.com/OpenGIS/Waymark-JS\" target=\"_blank\" class=\"text-body small ms-auto text-decoration-underline\"> Waymark JS </a> \xA0/\xA0 <a href=\"https://maplibre.org/\" target=\"_blank\" class=\"text-body small ms-auto text-decoration-underline\"> MapLibre GL JS </a></div><div class=\"d-flex align-items-center\"><span class=\"badge bg-primary bg-opacity-10 text-primary rounded-pill me-2\">Vector Tiles</span><a href=\"https://openfreemap.org\" target=\"_blank\" class=\"text-body small ms-auto text-decoration-underline\"> OpenFreeMap </a></div><div class=\"d-flex align-items-center\"><span class=\"badge bg-info bg-opacity-10 text-info rounded-pill me-2\">Tile Schema</span><a href=\"https://www.openmaptiles.org/\" target=\"_blank\" class=\"text-body small ms-auto text-decoration-underline\"> © OpenMapTiles </a></div><div class=\"d-flex align-items-center\"><span class=\"badge bg-danger bg-opacity-10 text-danger rounded-pill me-2\">Data</span><a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" class=\"text-body small ms-auto text-decoration-underline\"> © OpenStreetMap contributors </a></div></div>", 1)])
		], 64));
	}
}, bt = h(window.innerWidth), N = h(bt.value >= 992), xt = h(!1), St = h(!1), Ct = h(!1), wt = h(null), Tt = h(null), Et = () => {
	let e = t(() => bt.value >= 992), n = t(() => bt.value >= 768 && bt.value < 992), r = t(() => bt.value < 768);
	window.addEventListener("resize", () => {
		bt.value = window.innerWidth, e.value ? N.value = !0 : N.value && !xt.value && (N.value = !1);
	});
	let i = () => {
		N.value = !N.value, N.value && !e.value ? xt.value = !0 : xt.value = !1;
	}, a = () => {
		N.value = !1, e.value || (xt.value = !1);
	}, o = (e) => {
		xt.value = e;
	}, s = (t, n) => {
		wt.value = t, n && (Tt.value = u(n)), St.value = !0, Ct.value = !0, N.value && !e.value && (N.value = !1), xt.value = !1;
	};
	return {
		width: bt,
		isNavVisible: N,
		isNavExpanded: xt,
		isPanelVisible: St,
		isPanelExpanded: Ct,
		activePanelId: wt,
		activePanelComponent: Tt,
		isDesktop: e,
		isTablet: n,
		isMobile: r,
		toggleNav: i,
		closeNav: a,
		setNavExpanded: o,
		openPanel: s,
		togglePanel: (t, n) => {
			if (N.value && !e.value) {
				s(t, n);
				return;
			}
			wt.value === t && St.value ? Ct.value ? (St.value = !1, wt.value = null) : Ct.value = !0 : s(t, n);
		},
		closePanel: () => {
			St.value = !1;
		},
		togglePanelExpanded: () => {
			Ct.value = !Ct.value;
		},
		setPanelExpanded: (e) => {
			Ct.value = e;
		}
	};
}, Dt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ot = { class: "navbar navbar-dark bg-primary" }, kt = { class: "container-fluid" }, At = { class: "start" }, jt = { class: "end nav" }, Mt = { class: "nav-item mx-1" }, Nt = /* @__PURE__ */ Dt({
	__name: "top",
	setup(e) {
		let { togglePanel: t } = Et();
		return (e, n) => (p(), a("nav", Ot, [o("div", kt, [
			o("div", At, [o("button", {
				type: "button",
				class: "navbar-toggler border-0",
				onClick: n[0] ||= (e) => v(t)("locate", yt)
			}, [l(Ke, {
				width: "48",
				height: "48",
				fill: "currentColor",
				name: "sidebar-info"
			})])]),
			n[1] ||= o("ul", { class: "middle nav" }, [o("li", { class: "nav-item ms-1" })], -1),
			o("ul", jt, [o("li", Mt, [l(qe)])])
		])]));
	}
}, [["__scopeId", "data-v-dd3450b9"]]), Pt = { class: "offcanvas-body p-0" }, Ft = /* @__PURE__ */ Dt({
	__name: "panel",
	setup(t) {
		let { activePanelId: n, activePanelComponent: s, closePanel: c, isPanelVisible: l, isDesktop: u } = Et(), f = h(null);
		return (t, n) => (p(), a(e, null, [o("div", {
			class: d(["offcanvas offcanvas-start", { show: v(l) }]),
			tabindex: "-1",
			id: "side-panel",
			ref_key: "panelRef",
			ref: f,
			"aria-labelledby": "offcanvasLabel",
			"data-bs-scroll": "true",
			"data-bs-backdrop": "false"
		}, [o("div", Pt, [v(s) ? (p(), r(g(v(s)), { key: 0 })) : i("", !0)])], 2), v(l) && !v(u) ? (p(), a("div", {
			key: 0,
			class: "offcanvas-backdrop fade show",
			onClick: n[0] ||= (e) => v(c)()
		})) : i("", !0)], 64));
	}
}, [["__scopeId", "data-v-7063a7ce"]]), It = ["innerHTML"], Lt = {
	key: 0,
	id: "top"
}, Rt = {
	id: "content",
	class: "page-content"
}, zt = {
	__name: "App",
	props: {
		debug: {
			type: Boolean,
			default: !1
		},
		mapOptions: {
			type: Object,
			default: () => ({})
		}
	},
	setup(t) {
		let n = t, { setInstance: r } = ze(), { closeNav: s, togglePanelExpanded: c, isNavVisible: u, isPanelVisible: d, isPanelExpanded: m, isDesktop: g, isMobile: _ } = Et(), y = () => {
			u.value && !g.value && s(), _.value && d.value && m.value && c();
		}, b = h(!1);
		return f(() => {
			x({
				debug: n.debug,
				id: "waymark",
				mapOptions: {
					attributionControl: !1,
					...n.mapOptions
				},
				onLoad: (e) => {
					r(e), b.value = !0;
				}
			});
		}), (t, n) => (p(), a(e, null, [
			o("div", {
				style: { display: "none" },
				innerHTML: v(w)
			}, null, 8, It),
			b.value ? (p(), a("div", Lt, [l(Nt)])) : i("", !0),
			o("div", Rt, [l(Ft)]),
			o("div", {
				id: "waymark",
				onClick: y
			})
		], 64));
	}
}, P = "bottom", F = "right", I = "left", Bt = "auto", Vt = [
	"top",
	P,
	F,
	I
], Ht = "start", Ut = "clippingParents", Wt = "viewport", Gt = "popper", Kt = "reference", qt = /* @__PURE__ */ Vt.reduce(function(e, t) {
	return e.concat([t + "-" + Ht, t + "-end"]);
}, []), Jt = /* @__PURE__ */ [].concat(Vt, [Bt]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Ht,
		t + "-end"
	]);
}, []), Yt = "beforeRead", Xt = "read", Zt = "afterRead", Qt = "beforeMain", $t = "main", en = "afterMain", tn = "beforeWrite", nn = "write", rn = "afterWrite", an = [
	Yt,
	Xt,
	Zt,
	Qt,
	$t,
	en,
	tn,
	nn,
	rn
];
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function L(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function R(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function on(e) {
	return e instanceof R(e).Element || e instanceof Element;
}
function z(e) {
	return e instanceof R(e).HTMLElement || e instanceof HTMLElement;
}
function sn(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof R(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function cn(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!z(i) || !L(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function ln(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(e) {
			var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!z(r) || !L(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var un = {
	name: "applyStyles",
	enabled: !0,
	phase: "write",
	fn: cn,
	effect: ln,
	requires: ["computeStyles"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function B(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/math.js
var dn = Math.max, fn = Math.min, pn = Math.round;
//#endregion
//#region node_modules/@popperjs/core/lib/utils/userAgent.js
function mn() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function hn() {
	return !/^((?!chrome|android).)*safari/i.test(mn());
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function gn(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && z(e) && (i = e.offsetWidth > 0 && pn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && pn(r.height) / e.offsetHeight || 1);
	var o = (on(e) ? R(e) : window).visualViewport, s = !hn() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c,
		x: c,
		y: l
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function _n(e) {
	var t = gn(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/contains.js
function vn(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && sn(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function V(e) {
	return R(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function yn(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(L(e)) >= 0;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function H(e) {
	return ((on(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function bn(e) {
	return L(e) === "html" ? e : e.assignedSlot || e.parentNode || (sn(e) ? e.host : null) || H(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function xn(e) {
	return !z(e) || V(e).position === "fixed" ? null : e.offsetParent;
}
function Sn(e) {
	var t = /firefox/i.test(mn());
	if (/Trident/i.test(mn()) && z(e) && V(e).position === "fixed") return null;
	var n = bn(e);
	for (sn(n) && (n = n.host); z(n) && ["html", "body"].indexOf(L(n)) < 0;) {
		var r = V(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Cn(e) {
	for (var t = R(e), n = xn(e); n && yn(n) && V(n).position === "static";) n = xn(n);
	return n && (L(n) === "html" || L(n) === "body" && V(n).position === "static") ? t : n || Sn(e) || t;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function wn(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/within.js
function Tn(e, t, n) {
	return dn(e, fn(t, n));
}
function En(e, t, n) {
	var r = Tn(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Dn() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function On(e) {
	return Object.assign({}, Dn(), e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function kn(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/arrow.js
var An = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, On(typeof e == "number" ? kn(e, Vt) : e);
};
function jn(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = B(n.placement), c = wn(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = An(i.padding, n), d = _n(a), f = c === "y" ? "top" : I, p = c === "y" ? P : F, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Cn(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Tn(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Mn(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || vn(t.elements.popper, r) && (t.elements.arrow = r));
}
var Nn = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: jn,
	effect: Mn,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getVariation.js
function Pn(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Fn = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function In(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: pn(n * i) / i || 0,
		y: pn(r * i) / i || 0
	};
}
function Ln(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = I, b = "top", x = window;
	if (l) {
		var S = Cn(n), C = "clientHeight", w = "clientWidth";
		if (S === R(n) && (S = H(n), V(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = P;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = F;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Fn), O = u === !0 ? In({
		x: p,
		y: h
	}, R(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Rn(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: B(t.placement),
		variation: Pn(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ln(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ln(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var zn = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Rn,
	data: {}
}, Bn = { passive: !0 };
function Vn(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = R(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Bn);
	}), s && c.addEventListener("resize", n.update, Bn), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Bn);
		}), s && c.removeEventListener("resize", n.update, Bn);
	};
}
var Hn = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Vn,
	data: {}
}, Un = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Wn(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return Un[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var Gn = {
	start: "end",
	end: "start"
};
function Kn(e) {
	return e.replace(/start|end/g, function(e) {
		return Gn[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function qn(e) {
	var t = R(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function Jn(e) {
	return gn(H(e)).left + qn(e).scrollLeft;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function Yn(e, t) {
	var n = R(e), r = H(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = hn();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + Jn(e),
		y: c
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function Xn(e) {
	var t = H(e), n = qn(e), r = e.ownerDocument?.body, i = dn(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = dn(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + Jn(e), s = -n.scrollTop;
	return V(r || t).direction === "rtl" && (o += dn(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function Zn(e) {
	var t = V(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Qn(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(L(e)) >= 0 ? e.ownerDocument.body : z(e) && Zn(e) ? e : Qn(bn(e));
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function $n(e, t) {
	t === void 0 && (t = []);
	var n = Qn(e), r = n === e.ownerDocument?.body, i = R(n), a = r ? [i].concat(i.visualViewport || [], Zn(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat($n(bn(a)));
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function er(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function tr(e, t) {
	var n = gn(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function nr(e, t, n) {
	return t === "viewport" ? er(Yn(e, n)) : on(t) ? tr(t, n) : er(Xn(H(e)));
}
function rr(e) {
	var t = $n(bn(e)), n = ["absolute", "fixed"].indexOf(V(e).position) >= 0 && z(e) ? Cn(e) : e;
	return on(n) ? t.filter(function(e) {
		return on(e) && vn(e, n) && L(e) !== "body";
	}) : [];
}
function ir(e, t, n, r) {
	var i = t === "clippingParents" ? rr(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = nr(e, n, r);
		return t.top = dn(i.top, t.top), t.right = fn(i.right, t.right), t.bottom = fn(i.bottom, t.bottom), t.left = dn(i.left, t.left), t;
	}, nr(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/computeOffsets.js
function ar(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? B(r) : null, a = r ? Pn(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case P:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case F:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case I:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? wn(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case Ht:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end":
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
			default:
		}
	}
	return c;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/detectOverflow.js
function or(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? Ut : s, l = n.rootBoundary, u = l === void 0 ? Wt : l, d = n.elementContext, f = d === void 0 ? Gt : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = On(typeof g == "number" ? kn(g, Vt) : g), v = f === "popper" ? Kt : Gt, y = e.rects.popper, b = e.elements[m ? v : f], x = ir(on(b) ? b : b.contextElement || H(e.elements.popper), c, u, o), S = gn(e.elements.reference), C = ar({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = er(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
		top: x.top - T.top + _.top,
		bottom: T.bottom - x.bottom + _.bottom,
		left: x.left - T.left + _.left,
		right: T.right - x.right + _.right
	}, D = e.modifiersData.offset;
	if (f === "popper" && D) {
		var O = D[i];
		Object.keys(E).forEach(function(e) {
			var t = ["right", "bottom"].indexOf(e) >= 0 ? 1 : -1, n = ["top", "bottom"].indexOf(e) >= 0 ? "y" : "x";
			E[e] += O[n] * t;
		});
	}
	return E;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function sr(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? Jt : c, u = Pn(r), d = u ? s ? qt : qt.filter(function(e) {
		return Pn(e) === u;
	}) : Vt, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = or(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[B(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/flip.js
function cr(e) {
	if (B(e) === "auto") return [];
	var t = Wn(e);
	return [
		Kn(e),
		t,
		Kn(t)
	];
}
function lr(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = B(g) === g, v = c || (_ || !m ? [Wn(g)] : cr(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(B(n) === "auto" ? sr(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = B(E), O = Pn(E) === Ht, k = ["top", P].indexOf(D) >= 0, ee = k ? "width" : "height", A = or(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = k ? O ? F : I : O ? P : "top";
			b[ee] > x[ee] && (j = Wn(j));
			var te = Wn(j), ne = [];
			if (a && ne.push(A[D] <= 0), s && ne.push(A[j] <= 0, A[te] <= 0), ne.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, ne);
		}
		if (C) for (var re = m ? 3 : 1, ie = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, ae = re; ae > 0 && ie(ae) !== "break"; ae--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var ur = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: lr,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/hide.js
function dr(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function fr(e) {
	return [
		"top",
		F,
		P,
		I
	].some(function(t) {
		return e[t] >= 0;
	});
}
function pr(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = or(t, { elementContext: "reference" }), s = or(t, { altBoundary: !0 }), c = dr(o, r), l = dr(s, i, a), u = fr(c), d = fr(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var mr = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: pr
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/offset.js
function hr(e, t, n) {
	var r = B(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function gr(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Jt.reduce(function(e, n) {
		return e[n] = hr(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var _r = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: gr
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function vr(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = ar({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var yr = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: vr,
	data: {}
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getAltAxis.js
function br(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function xr(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = or(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = B(t.placement), v = Pn(t.placement), y = !v, b = wn(_), x = br(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var k = b === "y" ? "top" : I, ee = b === "y" ? P : F, A = b === "y" ? "height" : "width", j = S[b], te = j + g[k], ne = j - g[ee], re = p ? -w[A] / 2 : 0, ie = v === "start" ? C[A] : w[A], ae = v === "start" ? -w[A] : -C[A], oe = t.elements.arrow, se = p && oe ? _n(oe) : {
				width: 0,
				height: 0
			}, ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Dn(), le = ce[k], ue = ce[ee], de = Tn(0, C[A], se[A]), fe = y ? C[A] / 2 - re - de - le - E.mainAxis : ie - de - le - E.mainAxis, pe = y ? -C[A] / 2 + re + de + ue + E.mainAxis : ae + de + ue + E.mainAxis, me = t.elements.arrow && Cn(t.elements.arrow), he = me ? b === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, ge = D?.[b] ?? 0, _e = j + fe - ge - he, ve = j + pe - ge, ye = Tn(p ? fn(te, _e) : te, j, p ? dn(ne, ve) : ne);
			S[b] = ye, O[b] = ye - j;
		}
		if (s) {
			var be = b === "x" ? "top" : I, xe = b === "x" ? P : F, Se = S[x], Ce = x === "y" ? "height" : "width", we = Se + g[be], Te = Se - g[xe], Ee = ["top", I].indexOf(_) !== -1, De = D?.[x] ?? 0, Oe = Ee ? we : Se - C[Ce] - w[Ce] - De + E.altAxis, ke = Ee ? Se + C[Ce] + w[Ce] - De - E.altAxis : Te, Ae = p && Ee ? En(Oe, Se, ke) : Tn(p ? Oe : we, Se, p ? ke : Te);
			S[x] = Ae, O[x] = Ae - Se;
		}
		t.modifiersData[r] = O;
	}
}
var Sr = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: xr,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Cr(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function wr(e) {
	return e === R(e) || !z(e) ? qn(e) : Cr(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Tr(e) {
	var t = e.getBoundingClientRect(), n = pn(t.width) / e.offsetWidth || 1, r = pn(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Er(e, t, n) {
	n === void 0 && (n = !1);
	var r = z(t), i = z(t) && Tr(t), a = H(t), o = gn(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((L(t) !== "body" || Zn(a)) && (s = wr(t)), z(t) ? (c = gn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Jn(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Dr(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function Or(e) {
	var t = Dr(e);
	return an.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/debounce.js
function kr(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/mergeByName.js
function Ar(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/createPopper.js
var jr = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Mr() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Nr(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? jr : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, jr, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: on(e) ? $n(e) : e.contextElement ? $n(e.contextElement) : [],
					popper: $n(t)
				};
				var s = Or(Ar([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Mr(t, n)) {
						i.rects = {
							reference: Er(t, Cn(n), i.options.strategy === "fixed"),
							popper: _n(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: kr(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Mr(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
var Pr = /* @__PURE__ */ Nr(), Fr = /* @__PURE__ */ Nr({ defaultModifiers: [
	Hn,
	yr,
	zn,
	un
] }), Ir = /* @__PURE__ */ Nr({ defaultModifiers: [
	Hn,
	yr,
	zn,
	un,
	_r,
	ur,
	Sr,
	Nn,
	mr
] }), Lr = /* @__PURE__ */ C({
	afterMain: () => en,
	afterRead: () => Zt,
	afterWrite: () => rn,
	applyStyles: () => un,
	arrow: () => Nn,
	auto: () => Bt,
	basePlacements: () => Vt,
	beforeMain: () => Qt,
	beforeRead: () => Yt,
	beforeWrite: () => tn,
	bottom: () => P,
	clippingParents: () => Ut,
	computeStyles: () => zn,
	createPopper: () => Ir,
	createPopperBase: () => Pr,
	createPopperLite: () => Fr,
	detectOverflow: () => or,
	end: () => "end",
	eventListeners: () => Hn,
	flip: () => ur,
	hide: () => mr,
	left: () => I,
	main: () => $t,
	modifierPhases: () => an,
	offset: () => _r,
	placements: () => Jt,
	popper: () => Gt,
	popperGenerator: () => Nr,
	popperOffsets: () => yr,
	preventOverflow: () => Sr,
	read: () => Xt,
	reference: () => Kt,
	right: () => F,
	start: () => Ht,
	top: () => "top",
	variationPlacements: () => qt,
	viewport: () => Wt,
	write: () => nn
}), U = /* @__PURE__ */ new Map(), Rr = {
	set(e, t, n) {
		U.has(e) || U.set(e, /* @__PURE__ */ new Map());
		let r = U.get(e);
		if (!r.has(t) && r.size !== 0) {
			console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);
			return;
		}
		r.set(t, n);
	},
	get(e, t) {
		return U.has(e) && U.get(e).get(t) || null;
	},
	remove(e, t) {
		if (!U.has(e)) return;
		let n = U.get(e);
		n.delete(t), n.size === 0 && U.delete(e);
	}
}, zr = 1e6, Br = 1e3, Vr = "transitionend", Hr = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), e), Ur = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), Wr = (e) => {
	do
		e += Math.floor(Math.random() * zr);
	while (document.getElementById(e));
	return e;
}, Gr = (e) => {
	if (!e) return 0;
	let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
	return !Number.parseFloat(t) && !Number.parseFloat(n) ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * Br);
}, Kr = (e) => {
	e.dispatchEvent(new Event(Vr));
}, W = (e) => !e || typeof e != "object" ? !1 : (e.jquery !== void 0 && (e = e[0]), e.nodeType !== void 0), qr = (e) => W(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Hr(e)) : null, Jr = (e) => {
	if (!W(e) || e.getClientRects().length === 0) return !1;
	let t = getComputedStyle(e).getPropertyValue("visibility") === "visible", n = e.closest("details:not([open])");
	if (!n) return t;
	if (n !== e) {
		let t = e.closest("summary");
		if (t && t.parentNode !== n || t === null) return !1;
	}
	return t;
}, Yr = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : e.disabled === void 0 ? e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false" : e.disabled, Xr = (e) => {
	if (!document.documentElement.attachShadow) return null;
	if (typeof e.getRootNode == "function") {
		let t = e.getRootNode();
		return t instanceof ShadowRoot ? t : null;
	}
	return e instanceof ShadowRoot ? e : e.parentNode ? Xr(e.parentNode) : null;
}, Zr = () => {}, Qr = (e) => {
	e.offsetHeight;
}, $r = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, ei = [], ti = (e) => {
	document.readyState === "loading" ? (ei.length || document.addEventListener("DOMContentLoaded", () => {
		for (let e of ei) e();
	}), ei.push(e)) : e();
}, G = () => document.documentElement.dir === "rtl", K = (e) => {
	ti(() => {
		let t = $r();
		/* istanbul ignore if */
		if (t) {
			let n = e.NAME, r = t.fn[n];
			t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
		}
	});
}, q = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, ni = (e, t, n = !0) => {
	if (!n) {
		q(e);
		return;
	}
	let r = Gr(t) + 5, i = !1, a = ({ target: n }) => {
		n === t && (i = !0, t.removeEventListener(Vr, a), q(e));
	};
	t.addEventListener(Vr, a), setTimeout(() => {
		i || Kr(t);
	}, r);
}, ri = (e, t, n, r) => {
	let i = e.length, a = e.indexOf(t);
	return a === -1 ? !n && r ? e[i - 1] : e[0] : (a += n ? 1 : -1, r && (a = (a + i) % i), e[Math.max(0, Math.min(a, i - 1))]);
}, ii = /[^.]*(?=\..*)\.|.*/, ai = /\..*/, oi = /::\d+$/, si = {}, ci = 1, li = {
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, ui = new Set(/* @__PURE__ */ "click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll".split("."));
function di(e, t) {
	return t && `${t}::${ci++}` || e.uidEvent || ci++;
}
function fi(e) {
	let t = di(e);
	return e.uidEvent = t, si[t] = si[t] || {}, si[t];
}
function pi(e, t) {
	return function n(r) {
		return xi(r, { delegateTarget: e }), n.oneOff && J.off(e, r.type, t), t.apply(e, [r]);
	};
}
function mi(e, t, n) {
	return function r(i) {
		let a = e.querySelectorAll(t);
		for (let { target: o } = i; o && o !== this; o = o.parentNode) for (let s of a) if (s === o) return xi(i, { delegateTarget: o }), r.oneOff && J.off(e, i.type, t, n), n.apply(o, [i]);
	};
}
function hi(e, t, n = null) {
	return Object.values(e).find((e) => e.callable === t && e.delegationSelector === n);
}
function gi(e, t, n) {
	let r = typeof t == "string", i = r ? n : t || n, a = bi(e);
	return ui.has(a) || (a = e), [
		r,
		i,
		a
	];
}
function _i(e, t, n, r, i) {
	if (typeof t != "string" || !e) return;
	let [a, o, s] = gi(t, n, r);
	t in li && (o = ((e) => function(t) {
		if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
	})(o));
	let c = fi(e), l = c[s] || (c[s] = {}), u = hi(l, o, a ? n : null);
	if (u) {
		u.oneOff = u.oneOff && i;
		return;
	}
	let d = di(o, t.replace(ii, "")), f = a ? mi(e, n, o) : pi(e, o);
	f.delegationSelector = a ? n : null, f.callable = o, f.oneOff = i, f.uidEvent = d, l[d] = f, e.addEventListener(s, f, a);
}
function vi(e, t, n, r, i) {
	let a = hi(t[n], r, i);
	a && (e.removeEventListener(n, a, !!i), delete t[n][a.uidEvent]);
}
function yi(e, t, n, r) {
	let i = t[n] || {};
	for (let [a, o] of Object.entries(i)) a.includes(r) && vi(e, t, n, o.callable, o.delegationSelector);
}
function bi(e) {
	return e = e.replace(ai, ""), li[e] || e;
}
var J = {
	on(e, t, n, r) {
		_i(e, t, n, r, !1);
	},
	one(e, t, n, r) {
		_i(e, t, n, r, !0);
	},
	off(e, t, n, r) {
		if (typeof t != "string" || !e) return;
		let [i, a, o] = gi(t, n, r), s = o !== t, c = fi(e), l = c[o] || {}, u = t.startsWith(".");
		if (a !== void 0) {
			if (!Object.keys(l).length) return;
			vi(e, c, o, a, i ? n : null);
			return;
		}
		if (u) for (let n of Object.keys(c)) yi(e, c, n, t.slice(1));
		for (let [n, r] of Object.entries(l)) {
			let i = n.replace(oi, "");
			(!s || t.includes(i)) && vi(e, c, o, r.callable, r.delegationSelector);
		}
	},
	trigger(e, t, n) {
		if (typeof t != "string" || !e) return null;
		let r = $r(), i = t !== bi(t), a = null, o = !0, s = !0, c = !1;
		i && r && (a = r.Event(t, n), r(e).trigger(a), o = !a.isPropagationStopped(), s = !a.isImmediatePropagationStopped(), c = a.isDefaultPrevented());
		let l = xi(new Event(t, {
			bubbles: o,
			cancelable: !0
		}), n);
		return c && l.preventDefault(), s && e.dispatchEvent(l), l.defaultPrevented && a && a.preventDefault(), l;
	}
};
function xi(e, t = {}) {
	for (let [n, r] of Object.entries(t)) try {
		e[n] = r;
	} catch {
		Object.defineProperty(e, n, {
			configurable: !0,
			get() {
				return r;
			}
		});
	}
	return e;
}
function Si(e) {
	if (e === "true") return !0;
	if (e === "false") return !1;
	if (e === Number(e).toString()) return Number(e);
	if (e === "" || e === "null") return null;
	if (typeof e != "string") return e;
	try {
		return JSON.parse(decodeURIComponent(e));
	} catch {
		return e;
	}
}
function Ci(e) {
	return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
var Y = {
	setDataAttribute(e, t, n) {
		e.setAttribute(`data-bs-${Ci(t)}`, n);
	},
	removeDataAttribute(e, t) {
		e.removeAttribute(`data-bs-${Ci(t)}`);
	},
	getDataAttributes(e) {
		if (!e) return {};
		let t = {}, n = Object.keys(e.dataset).filter((e) => e.startsWith("bs") && !e.startsWith("bsConfig"));
		for (let r of n) {
			let n = r.replace(/^bs/, "");
			n = n.charAt(0).toLowerCase() + n.slice(1), t[n] = Si(e.dataset[r]);
		}
		return t;
	},
	getDataAttribute(e, t) {
		return Si(e.getAttribute(`data-bs-${Ci(t)}`));
	}
}, wi = class {
	static get Default() {
		return {};
	}
	static get DefaultType() {
		return {};
	}
	static get NAME() {
		throw Error("You have to implement the static method \"NAME\", for each component!");
	}
	_getConfig(e) {
		return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
	}
	_configAfterMerge(e) {
		return e;
	}
	_mergeConfigObj(e, t) {
		let n = W(t) ? Y.getDataAttribute(t, "config") : {};
		return {
			...this.constructor.Default,
			...typeof n == "object" ? n : {},
			...W(t) ? Y.getDataAttributes(t) : {},
			...typeof e == "object" ? e : {}
		};
	}
	_typeCheckConfig(e, t = this.constructor.DefaultType) {
		for (let [n, r] of Object.entries(t)) {
			let t = e[n], i = W(t) ? "element" : Ur(t);
			if (!new RegExp(r).test(i)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`);
		}
	}
}, Ti = "5.3.8", X = class extends wi {
	constructor(e, t) {
		super(), e = qr(e), e && (this._element = e, this._config = this._getConfig(t), Rr.set(this._element, this.constructor.DATA_KEY, this));
	}
	dispose() {
		Rr.remove(this._element, this.constructor.DATA_KEY), J.off(this._element, this.constructor.EVENT_KEY);
		for (let e of Object.getOwnPropertyNames(this)) this[e] = null;
	}
	_queueCallback(e, t, n = !0) {
		ni(e, t, n);
	}
	_getConfig(e) {
		return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
	}
	static getInstance(e) {
		return Rr.get(qr(e), this.DATA_KEY);
	}
	static getOrCreateInstance(e, t = {}) {
		return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
	}
	static get VERSION() {
		return Ti;
	}
	static get DATA_KEY() {
		return `bs.${this.NAME}`;
	}
	static get EVENT_KEY() {
		return `.${this.DATA_KEY}`;
	}
	static eventName(e) {
		return `${e}${this.EVENT_KEY}`;
	}
}, Ei = (e) => {
	let t = e.getAttribute("data-bs-target");
	if (!t || t === "#") {
		let n = e.getAttribute("href");
		if (!n || !n.includes("#") && !n.startsWith(".")) return null;
		n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
	}
	return t ? t.split(",").map((e) => Hr(e)).join(",") : null;
}, Z = {
	find(e, t = document.documentElement) {
		return [].concat(...Element.prototype.querySelectorAll.call(t, e));
	},
	findOne(e, t = document.documentElement) {
		return Element.prototype.querySelector.call(t, e);
	},
	children(e, t) {
		return [].concat(...e.children).filter((e) => e.matches(t));
	},
	parents(e, t) {
		let n = [], r = e.parentNode.closest(t);
		for (; r;) n.push(r), r = r.parentNode.closest(t);
		return n;
	},
	prev(e, t) {
		let n = e.previousElementSibling;
		for (; n;) {
			if (n.matches(t)) return [n];
			n = n.previousElementSibling;
		}
		return [];
	},
	next(e, t) {
		let n = e.nextElementSibling;
		for (; n;) {
			if (n.matches(t)) return [n];
			n = n.nextElementSibling;
		}
		return [];
	},
	focusableChildren(e) {
		let t = [
			"a",
			"button",
			"input",
			"textarea",
			"select",
			"details",
			"[tabindex]",
			"[contenteditable=\"true\"]"
		].map((e) => `${e}:not([tabindex^="-"])`).join(",");
		return this.find(t, e).filter((e) => !Yr(e) && Jr(e));
	},
	getSelectorFromElement(e) {
		let t = Ei(e);
		return t && Z.findOne(t) ? t : null;
	},
	getElementFromSelector(e) {
		let t = Ei(e);
		return t ? Z.findOne(t) : null;
	},
	getMultipleElementsFromSelector(e) {
		let t = Ei(e);
		return t ? Z.find(t) : [];
	}
}, Di = (e, t = "hide") => {
	let n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
	J.on(document, n, `[data-bs-dismiss="${r}"]`, function(n) {
		if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Yr(this)) return;
		let i = Z.getElementFromSelector(this) || this.closest(`.${r}`);
		e.getOrCreateInstance(i)[t]();
	});
}, Oi = "alert", ki = ".bs.alert", Ai = `close${ki}`, ji = `closed${ki}`, Mi = "fade", Ni = "show", Pi = class e extends X {
	static get NAME() {
		return Oi;
	}
	close() {
		if (J.trigger(this._element, Ai).defaultPrevented) return;
		this._element.classList.remove(Ni);
		let e = this._element.classList.contains(Mi);
		this._queueCallback(() => this._destroyElement(), this._element, e);
	}
	_destroyElement() {
		this._element.remove(), J.trigger(this._element, ji), this.dispose();
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this);
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t](this);
			}
		});
	}
};
Di(Pi, "close"), K(Pi);
var Fi = "button", Ii = ".bs.button", Li = ".data-api", Ri = "active", zi = "[data-bs-toggle=\"button\"]", Bi = `click${Ii}${Li}`, Vi = class e extends X {
	static get NAME() {
		return Fi;
	}
	toggle() {
		this._element.setAttribute("aria-pressed", this._element.classList.toggle(Ri));
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this);
			t === "toggle" && n[t]();
		});
	}
};
J.on(document, Bi, zi, (e) => {
	e.preventDefault();
	let t = e.target.closest(zi);
	Vi.getOrCreateInstance(t).toggle();
}), K(Vi);
var Hi = "swipe", Ui = ".bs.swipe", Wi = `touchstart${Ui}`, Gi = `touchmove${Ui}`, Ki = `touchend${Ui}`, qi = `pointerdown${Ui}`, Ji = `pointerup${Ui}`, Yi = "touch", Xi = "pen", Zi = "pointer-event", Qi = 40, $i = {
	endCallback: null,
	leftCallback: null,
	rightCallback: null
}, ea = {
	endCallback: "(function|null)",
	leftCallback: "(function|null)",
	rightCallback: "(function|null)"
}, ta = class e extends wi {
	constructor(t, n) {
		super(), this._element = t, !(!t || !e.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
	}
	static get Default() {
		return $i;
	}
	static get DefaultType() {
		return ea;
	}
	static get NAME() {
		return Hi;
	}
	dispose() {
		J.off(this._element, Ui);
	}
	_start(e) {
		if (!this._supportPointerEvents) {
			this._deltaX = e.touches[0].clientX;
			return;
		}
		this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
	}
	_end(e) {
		this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), q(this._config.endCallback);
	}
	_move(e) {
		this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
	}
	_handleSwipe() {
		let e = Math.abs(this._deltaX);
		if (e <= Qi) return;
		let t = e / this._deltaX;
		this._deltaX = 0, t && q(t > 0 ? this._config.rightCallback : this._config.leftCallback);
	}
	_initEvents() {
		this._supportPointerEvents ? (J.on(this._element, qi, (e) => this._start(e)), J.on(this._element, Ji, (e) => this._end(e)), this._element.classList.add(Zi)) : (J.on(this._element, Wi, (e) => this._start(e)), J.on(this._element, Gi, (e) => this._move(e)), J.on(this._element, Ki, (e) => this._end(e)));
	}
	_eventIsPointerPenTouch(e) {
		return this._supportPointerEvents && (e.pointerType === Xi || e.pointerType === Yi);
	}
	static isSupported() {
		return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
	}
}, na = "carousel", ra = ".bs.carousel", ia = ".data-api", aa = "ArrowLeft", oa = "ArrowRight", sa = 500, ca = "next", la = "prev", ua = "left", da = "right", fa = `slide${ra}`, pa = `slid${ra}`, ma = `keydown${ra}`, ha = `mouseenter${ra}`, ga = `mouseleave${ra}`, _a = `dragstart${ra}`, va = `load${ra}${ia}`, ya = `click${ra}${ia}`, ba = "carousel", xa = "active", Sa = "slide", Ca = "carousel-item-end", wa = "carousel-item-start", Ta = "carousel-item-next", Ea = "carousel-item-prev", Da = ".active", Oa = ".carousel-item", ka = Da + Oa, Aa = ".carousel-item img", ja = ".carousel-indicators", Ma = "[data-bs-slide], [data-bs-slide-to]", Na = "[data-bs-ride=\"carousel\"]", Pa = {
	[aa]: da,
	[oa]: ua
}, Fa = {
	interval: 5e3,
	keyboard: !0,
	pause: "hover",
	ride: !1,
	touch: !0,
	wrap: !0
}, Ia = {
	interval: "(number|boolean)",
	keyboard: "boolean",
	pause: "(string|boolean)",
	ride: "(boolean|string)",
	touch: "boolean",
	wrap: "boolean"
}, La = class e extends X {
	constructor(e, t) {
		super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Z.findOne(ja, this._element), this._addEventListeners(), this._config.ride === ba && this.cycle();
	}
	static get Default() {
		return Fa;
	}
	static get DefaultType() {
		return Ia;
	}
	static get NAME() {
		return na;
	}
	next() {
		this._slide(ca);
	}
	nextWhenVisible() {
		!document.hidden && Jr(this._element) && this.next();
	}
	prev() {
		this._slide(la);
	}
	pause() {
		this._isSliding && Kr(this._element), this._clearInterval();
	}
	cycle() {
		this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
	}
	_maybeEnableCycle() {
		if (this._config.ride) {
			if (this._isSliding) {
				J.one(this._element, pa, () => this.cycle());
				return;
			}
			this.cycle();
		}
	}
	to(e) {
		let t = this._getItems();
		if (e > t.length - 1 || e < 0) return;
		if (this._isSliding) {
			J.one(this._element, pa, () => this.to(e));
			return;
		}
		let n = this._getItemIndex(this._getActive());
		if (n === e) return;
		let r = e > n ? ca : la;
		this._slide(r, t[e]);
	}
	dispose() {
		this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
	}
	_configAfterMerge(e) {
		return e.defaultInterval = e.interval, e;
	}
	_addEventListeners() {
		this._config.keyboard && J.on(this._element, ma, (e) => this._keydown(e)), this._config.pause === "hover" && (J.on(this._element, ha, () => this.pause()), J.on(this._element, ga, () => this._maybeEnableCycle())), this._config.touch && ta.isSupported() && this._addTouchEventListeners();
	}
	_addTouchEventListeners() {
		for (let e of Z.find(Aa, this._element)) J.on(e, _a, (e) => e.preventDefault());
		this._swipeHelper = new ta(this._element, {
			leftCallback: () => this._slide(this._directionToOrder(ua)),
			rightCallback: () => this._slide(this._directionToOrder(da)),
			endCallback: () => {
				this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), sa + this._config.interval));
			}
		});
	}
	_keydown(e) {
		if (/input|textarea/i.test(e.target.tagName)) return;
		let t = Pa[e.key];
		t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
	}
	_getItemIndex(e) {
		return this._getItems().indexOf(e);
	}
	_setActiveIndicatorElement(e) {
		if (!this._indicatorsElement) return;
		let t = Z.findOne(Da, this._indicatorsElement);
		t.classList.remove(xa), t.removeAttribute("aria-current");
		let n = Z.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
		n && (n.classList.add(xa), n.setAttribute("aria-current", "true"));
	}
	_updateInterval() {
		let e = this._activeElement || this._getActive();
		if (!e) return;
		let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
		this._config.interval = t || this._config.defaultInterval;
	}
	_slide(e, t = null) {
		if (this._isSliding) return;
		let n = this._getActive(), r = e === ca, i = t || ri(this._getItems(), n, r, this._config.wrap);
		if (i === n) return;
		let a = this._getItemIndex(i), o = (t) => J.trigger(this._element, t, {
			relatedTarget: i,
			direction: this._orderToDirection(e),
			from: this._getItemIndex(n),
			to: a
		});
		if (o(fa).defaultPrevented || !n || !i) return;
		let s = !!this._interval;
		this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(a), this._activeElement = i;
		let c = r ? wa : Ca, l = r ? Ta : Ea;
		i.classList.add(l), Qr(i), n.classList.add(c), i.classList.add(c), this._queueCallback(() => {
			i.classList.remove(c, l), i.classList.add(xa), n.classList.remove(xa, l, c), this._isSliding = !1, o(pa);
		}, n, this._isAnimated()), s && this.cycle();
	}
	_isAnimated() {
		return this._element.classList.contains(Sa);
	}
	_getActive() {
		return Z.findOne(ka, this._element);
	}
	_getItems() {
		return Z.find(Oa, this._element);
	}
	_clearInterval() {
		this._interval &&= (clearInterval(this._interval), null);
	}
	_directionToOrder(e) {
		return G() ? e === ua ? la : ca : e === ua ? ca : la;
	}
	_orderToDirection(e) {
		return G() ? e === la ? ua : da : e === la ? da : ua;
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "number") {
				n.to(t);
				return;
			}
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
};
J.on(document, ya, Ma, function(e) {
	let t = Z.getElementFromSelector(this);
	if (!t || !t.classList.contains(ba)) return;
	e.preventDefault();
	let n = La.getOrCreateInstance(t), r = this.getAttribute("data-bs-slide-to");
	if (r) {
		n.to(r), n._maybeEnableCycle();
		return;
	}
	if (Y.getDataAttribute(this, "slide") === "next") {
		n.next(), n._maybeEnableCycle();
		return;
	}
	n.prev(), n._maybeEnableCycle();
}), J.on(window, va, () => {
	let e = Z.find(Na);
	for (let t of e) La.getOrCreateInstance(t);
}), K(La);
var Ra = "collapse", za = ".bs.collapse", Ba = ".data-api", Va = `show${za}`, Ha = `shown${za}`, Ua = `hide${za}`, Wa = `hidden${za}`, Ga = `click${za}${Ba}`, Ka = "show", qa = "collapse", Ja = "collapsing", Ya = "collapsed", Xa = `:scope .${qa} .${qa}`, Za = "collapse-horizontal", Qa = "width", $a = "height", eo = ".collapse.show, .collapse.collapsing", to = "[data-bs-toggle=\"collapse\"]", no = {
	parent: null,
	toggle: !0
}, ro = {
	parent: "(null|element)",
	toggle: "boolean"
}, io = class e extends X {
	constructor(e, t) {
		super(e, t), this._isTransitioning = !1, this._triggerArray = [];
		let n = Z.find(to);
		for (let e of n) {
			let t = Z.getSelectorFromElement(e), n = Z.find(t).filter((e) => e === this._element);
			t !== null && n.length && this._triggerArray.push(e);
		}
		this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
	}
	static get Default() {
		return no;
	}
	static get DefaultType() {
		return ro;
	}
	static get NAME() {
		return Ra;
	}
	toggle() {
		this._isShown() ? this.hide() : this.show();
	}
	show() {
		if (this._isTransitioning || this._isShown()) return;
		let t = [];
		if (this._config.parent && (t = this._getFirstLevelChildren(eo).filter((e) => e !== this._element).map((t) => e.getOrCreateInstance(t, { toggle: !1 }))), t.length && t[0]._isTransitioning || J.trigger(this._element, Va).defaultPrevented) return;
		for (let e of t) e.hide();
		let n = this._getDimension();
		this._element.classList.remove(qa), this._element.classList.add(Ja), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
		let r = () => {
			this._isTransitioning = !1, this._element.classList.remove(Ja), this._element.classList.add(qa, Ka), this._element.style[n] = "", J.trigger(this._element, Ha);
		}, i = `scroll${n[0].toUpperCase() + n.slice(1)}`;
		this._queueCallback(r, this._element, !0), this._element.style[n] = `${this._element[i]}px`;
	}
	hide() {
		if (this._isTransitioning || !this._isShown() || J.trigger(this._element, Ua).defaultPrevented) return;
		let e = this._getDimension();
		this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Qr(this._element), this._element.classList.add(Ja), this._element.classList.remove(qa, Ka);
		for (let e of this._triggerArray) {
			let t = Z.getElementFromSelector(e);
			t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
		}
		this._isTransitioning = !0;
		let t = () => {
			this._isTransitioning = !1, this._element.classList.remove(Ja), this._element.classList.add(qa), J.trigger(this._element, Wa);
		};
		this._element.style[e] = "", this._queueCallback(t, this._element, !0);
	}
	_isShown(e = this._element) {
		return e.classList.contains(Ka);
	}
	_configAfterMerge(e) {
		return e.toggle = !!e.toggle, e.parent = qr(e.parent), e;
	}
	_getDimension() {
		return this._element.classList.contains(Za) ? Qa : $a;
	}
	_initializeChildren() {
		if (!this._config.parent) return;
		let e = this._getFirstLevelChildren(to);
		for (let t of e) {
			let e = Z.getElementFromSelector(t);
			e && this._addAriaAndCollapsedClass([t], this._isShown(e));
		}
	}
	_getFirstLevelChildren(e) {
		let t = Z.find(Xa, this._config.parent);
		return Z.find(e, this._config.parent).filter((e) => !t.includes(e));
	}
	_addAriaAndCollapsedClass(e, t) {
		if (e.length) for (let n of e) n.classList.toggle(Ya, !t), n.setAttribute("aria-expanded", t);
	}
	static jQueryInterface(t) {
		let n = {};
		return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
			let r = e.getOrCreateInstance(this, n);
			if (typeof t == "string") {
				if (r[t] === void 0) throw TypeError(`No method named "${t}"`);
				r[t]();
			}
		});
	}
};
J.on(document, Ga, to, function(e) {
	(e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
	for (let e of Z.getMultipleElementsFromSelector(this)) io.getOrCreateInstance(e, { toggle: !1 }).toggle();
}), K(io);
var ao = "dropdown", oo = ".bs.dropdown", so = ".data-api", co = "Escape", lo = "Tab", uo = "ArrowUp", fo = "ArrowDown", po = 2, mo = `hide${oo}`, ho = `hidden${oo}`, go = `show${oo}`, _o = `shown${oo}`, vo = `click${oo}${so}`, yo = `keydown${oo}${so}`, bo = `keyup${oo}${so}`, xo = "show", So = "dropup", Co = "dropend", wo = "dropstart", To = "dropup-center", Eo = "dropdown-center", Do = "[data-bs-toggle=\"dropdown\"]:not(.disabled):not(:disabled)", Oo = `${Do}.${xo}`, ko = ".dropdown-menu", Ao = ".navbar", jo = ".navbar-nav", Mo = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", No = G() ? "top-end" : "top-start", Po = G() ? "top-start" : "top-end", Fo = G() ? "bottom-end" : "bottom-start", Io = G() ? "bottom-start" : "bottom-end", Lo = G() ? "left-start" : "right-start", Ro = G() ? "right-start" : "left-start", zo = "top", Bo = "bottom", Vo = {
	autoClose: !0,
	boundary: "clippingParents",
	display: "dynamic",
	offset: [0, 2],
	popperConfig: null,
	reference: "toggle"
}, Ho = {
	autoClose: "(boolean|string)",
	boundary: "(string|element)",
	display: "string",
	offset: "(array|string|function)",
	popperConfig: "(null|object|function)",
	reference: "(string|element|object)"
}, Uo = class e extends X {
	constructor(e, t) {
		super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = Z.next(this._element, ko)[0] || Z.prev(this._element, ko)[0] || Z.findOne(ko, this._parent), this._inNavbar = this._detectNavbar();
	}
	static get Default() {
		return Vo;
	}
	static get DefaultType() {
		return Ho;
	}
	static get NAME() {
		return ao;
	}
	toggle() {
		return this._isShown() ? this.hide() : this.show();
	}
	show() {
		if (Yr(this._element) || this._isShown()) return;
		let e = { relatedTarget: this._element };
		if (!J.trigger(this._element, go, e).defaultPrevented) {
			if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(jo)) for (let e of [].concat(...document.body.children)) J.on(e, "mouseover", Zr);
			this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(xo), this._element.classList.add(xo), J.trigger(this._element, _o, e);
		}
	}
	hide() {
		if (Yr(this._element) || !this._isShown()) return;
		let e = { relatedTarget: this._element };
		this._completeHide(e);
	}
	dispose() {
		this._popper && this._popper.destroy(), super.dispose();
	}
	update() {
		this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
	}
	_completeHide(e) {
		if (!J.trigger(this._element, mo, e).defaultPrevented) {
			if ("ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) J.off(e, "mouseover", Zr);
			this._popper && this._popper.destroy(), this._menu.classList.remove(xo), this._element.classList.remove(xo), this._element.setAttribute("aria-expanded", "false"), Y.removeDataAttribute(this._menu, "popper"), J.trigger(this._element, ho, e);
		}
	}
	_getConfig(e) {
		if (e = super._getConfig(e), typeof e.reference == "object" && !W(e.reference) && typeof e.reference.getBoundingClientRect != "function") throw TypeError(`${ao.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
		return e;
	}
	_createPopper() {
		if (Lr === void 0) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
		let e = this._element;
		this._config.reference === "parent" ? e = this._parent : W(this._config.reference) ? e = qr(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
		let t = this._getPopperConfig();
		this._popper = Ir(e, this._menu, t);
	}
	_isShown() {
		return this._menu.classList.contains(xo);
	}
	_getPlacement() {
		let e = this._parent;
		if (e.classList.contains(Co)) return Lo;
		if (e.classList.contains(wo)) return Ro;
		if (e.classList.contains(To)) return zo;
		if (e.classList.contains(Eo)) return Bo;
		let t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
		return e.classList.contains(So) ? t ? Po : No : t ? Io : Fo;
	}
	_detectNavbar() {
		return this._element.closest(Ao) !== null;
	}
	_getOffset() {
		let { offset: e } = this._config;
		return typeof e == "string" ? e.split(",").map((e) => Number.parseInt(e, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
	}
	_getPopperConfig() {
		let e = {
			placement: this._getPlacement(),
			modifiers: [{
				name: "preventOverflow",
				options: { boundary: this._config.boundary }
			}, {
				name: "offset",
				options: { offset: this._getOffset() }
			}]
		};
		return (this._inNavbar || this._config.display === "static") && (Y.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
			name: "applyStyles",
			enabled: !1
		}]), {
			...e,
			...q(this._config.popperConfig, [void 0, e])
		};
	}
	_selectMenuItem({ key: e, target: t }) {
		let n = Z.find(Mo, this._menu).filter((e) => Jr(e));
		n.length && ri(n, t, e === fo, !n.includes(t)).focus();
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0) throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
	static clearMenus(t) {
		if (t.button === po || t.type === "keyup" && t.key !== lo) return;
		let n = Z.find(Oo);
		for (let r of n) {
			let n = e.getInstance(r);
			if (!n || n._config.autoClose === !1) continue;
			let i = t.composedPath(), a = i.includes(n._menu);
			if (i.includes(n._element) || n._config.autoClose === "inside" && !a || n._config.autoClose === "outside" && a || n._menu.contains(t.target) && (t.type === "keyup" && t.key === lo || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
			let o = { relatedTarget: n._element };
			t.type === "click" && (o.clickEvent = t), n._completeHide(o);
		}
	}
	static dataApiKeydownHandler(t) {
		let n = /input|textarea/i.test(t.target.tagName), r = t.key === co, i = [uo, fo].includes(t.key);
		if (!i && !r || n && !r) return;
		t.preventDefault();
		let a = this.matches(Do) ? this : Z.prev(this, Do)[0] || Z.next(this, Do)[0] || Z.findOne(Do, t.delegateTarget.parentNode), o = e.getOrCreateInstance(a);
		if (i) {
			t.stopPropagation(), o.show(), o._selectMenuItem(t);
			return;
		}
		o._isShown() && (t.stopPropagation(), o.hide(), a.focus());
	}
};
J.on(document, yo, Do, Uo.dataApiKeydownHandler), J.on(document, yo, ko, Uo.dataApiKeydownHandler), J.on(document, vo, Uo.clearMenus), J.on(document, bo, Uo.clearMenus), J.on(document, vo, Do, function(e) {
	e.preventDefault(), Uo.getOrCreateInstance(this).toggle();
}), K(Uo);
var Wo = "backdrop", Go = "fade", Ko = "show", qo = `mousedown.bs.${Wo}`, Jo = {
	className: "modal-backdrop",
	clickCallback: null,
	isAnimated: !1,
	isVisible: !0,
	rootElement: "body"
}, Yo = {
	className: "string",
	clickCallback: "(function|null)",
	isAnimated: "boolean",
	isVisible: "boolean",
	rootElement: "(element|string)"
}, Xo = class extends wi {
	constructor(e) {
		super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
	}
	static get Default() {
		return Jo;
	}
	static get DefaultType() {
		return Yo;
	}
	static get NAME() {
		return Wo;
	}
	show(e) {
		if (!this._config.isVisible) {
			q(e);
			return;
		}
		this._append();
		let t = this._getElement();
		this._config.isAnimated && Qr(t), t.classList.add(Ko), this._emulateAnimation(() => {
			q(e);
		});
	}
	hide(e) {
		if (!this._config.isVisible) {
			q(e);
			return;
		}
		this._getElement().classList.remove(Ko), this._emulateAnimation(() => {
			this.dispose(), q(e);
		});
	}
	dispose() {
		this._isAppended &&= (J.off(this._element, qo), this._element.remove(), !1);
	}
	_getElement() {
		if (!this._element) {
			let e = document.createElement("div");
			e.className = this._config.className, this._config.isAnimated && e.classList.add(Go), this._element = e;
		}
		return this._element;
	}
	_configAfterMerge(e) {
		return e.rootElement = qr(e.rootElement), e;
	}
	_append() {
		if (this._isAppended) return;
		let e = this._getElement();
		this._config.rootElement.append(e), J.on(e, qo, () => {
			q(this._config.clickCallback);
		}), this._isAppended = !0;
	}
	_emulateAnimation(e) {
		ni(e, this._getElement(), this._config.isAnimated);
	}
}, Zo = "focustrap", Qo = ".bs.focustrap", $o = `focusin${Qo}`, es = `keydown.tab${Qo}`, ts = "Tab", ns = "forward", rs = "backward", is = {
	autofocus: !0,
	trapElement: null
}, as = {
	autofocus: "boolean",
	trapElement: "element"
}, os = class extends wi {
	constructor(e) {
		super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
	}
	static get Default() {
		return is;
	}
	static get DefaultType() {
		return as;
	}
	static get NAME() {
		return Zo;
	}
	activate() {
		this._isActive ||= (this._config.autofocus && this._config.trapElement.focus(), J.off(document, Qo), J.on(document, $o, (e) => this._handleFocusin(e)), J.on(document, es, (e) => this._handleKeydown(e)), !0);
	}
	deactivate() {
		this._isActive && (this._isActive = !1, J.off(document, Qo));
	}
	_handleFocusin(e) {
		let { trapElement: t } = this._config;
		if (e.target === document || e.target === t || t.contains(e.target)) return;
		let n = Z.focusableChildren(t);
		n.length === 0 ? t.focus() : this._lastTabNavDirection === rs ? n[n.length - 1].focus() : n[0].focus();
	}
	_handleKeydown(e) {
		e.key === ts && (this._lastTabNavDirection = e.shiftKey ? rs : ns);
	}
}, ss = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cs = ".sticky-top", ls = "padding-right", us = "margin-right", ds = class {
	constructor() {
		this._element = document.body;
	}
	getWidth() {
		let e = document.documentElement.clientWidth;
		return Math.abs(window.innerWidth - e);
	}
	hide() {
		let e = this.getWidth();
		this._disableOverFlow(), this._setElementAttributes(this._element, ls, (t) => t + e), this._setElementAttributes(ss, ls, (t) => t + e), this._setElementAttributes(cs, us, (t) => t - e);
	}
	reset() {
		this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ls), this._resetElementAttributes(ss, ls), this._resetElementAttributes(cs, us);
	}
	isOverflowing() {
		return this.getWidth() > 0;
	}
	_disableOverFlow() {
		this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
	}
	_setElementAttributes(e, t, n) {
		let r = this.getWidth();
		this._applyManipulationCallback(e, (e) => {
			if (e !== this._element && window.innerWidth > e.clientWidth + r) return;
			this._saveInitialAttribute(e, t);
			let i = window.getComputedStyle(e).getPropertyValue(t);
			e.style.setProperty(t, `${n(Number.parseFloat(i))}px`);
		});
	}
	_saveInitialAttribute(e, t) {
		let n = e.style.getPropertyValue(t);
		n && Y.setDataAttribute(e, t, n);
	}
	_resetElementAttributes(e, t) {
		this._applyManipulationCallback(e, (e) => {
			let n = Y.getDataAttribute(e, t);
			if (n === null) {
				e.style.removeProperty(t);
				return;
			}
			Y.removeDataAttribute(e, t), e.style.setProperty(t, n);
		});
	}
	_applyManipulationCallback(e, t) {
		if (W(e)) {
			t(e);
			return;
		}
		for (let n of Z.find(e, this._element)) t(n);
	}
}, fs = "modal", Q = ".bs.modal", ps = ".data-api", ms = "Escape", hs = `hide${Q}`, gs = `hidePrevented${Q}`, _s = `hidden${Q}`, vs = `show${Q}`, ys = `shown${Q}`, bs = `resize${Q}`, xs = `click.dismiss${Q}`, Ss = `mousedown.dismiss${Q}`, Cs = `keydown.dismiss${Q}`, ws = `click${Q}${ps}`, Ts = "modal-open", Es = "fade", Ds = "show", Os = "modal-static", ks = ".modal.show", As = ".modal-dialog", js = ".modal-body", Ms = "[data-bs-toggle=\"modal\"]", Ns = {
	backdrop: !0,
	focus: !0,
	keyboard: !0
}, Ps = {
	backdrop: "(boolean|string)",
	focus: "boolean",
	keyboard: "boolean"
}, Fs = class e extends X {
	constructor(e, t) {
		super(e, t), this._dialog = Z.findOne(As, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new ds(), this._addEventListeners();
	}
	static get Default() {
		return Ns;
	}
	static get DefaultType() {
		return Ps;
	}
	static get NAME() {
		return fs;
	}
	toggle(e) {
		return this._isShown ? this.hide() : this.show(e);
	}
	show(e) {
		this._isShown || this._isTransitioning || J.trigger(this._element, vs, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ts), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
	}
	hide() {
		!this._isShown || this._isTransitioning || J.trigger(this._element, hs).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ds), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
	}
	dispose() {
		J.off(window, Q), J.off(this._dialog, Q), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
	}
	handleUpdate() {
		this._adjustDialog();
	}
	_initializeBackDrop() {
		return new Xo({
			isVisible: !!this._config.backdrop,
			isAnimated: this._isAnimated()
		});
	}
	_initializeFocusTrap() {
		return new os({ trapElement: this._element });
	}
	_showElement(e) {
		document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
		let t = Z.findOne(js, this._dialog);
		t && (t.scrollTop = 0), Qr(this._element), this._element.classList.add(Ds), this._queueCallback(() => {
			this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, J.trigger(this._element, ys, { relatedTarget: e });
		}, this._dialog, this._isAnimated());
	}
	_addEventListeners() {
		J.on(this._element, Cs, (e) => {
			if (e.key === ms) {
				if (this._config.keyboard) {
					this.hide();
					return;
				}
				this._triggerBackdropTransition();
			}
		}), J.on(window, bs, () => {
			this._isShown && !this._isTransitioning && this._adjustDialog();
		}), J.on(this._element, Ss, (e) => {
			J.one(this._element, xs, (t) => {
				if (!(this._element !== e.target || this._element !== t.target)) {
					if (this._config.backdrop === "static") {
						this._triggerBackdropTransition();
						return;
					}
					this._config.backdrop && this.hide();
				}
			});
		});
	}
	_hideModal() {
		this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
			document.body.classList.remove(Ts), this._resetAdjustments(), this._scrollBar.reset(), J.trigger(this._element, _s);
		});
	}
	_isAnimated() {
		return this._element.classList.contains(Es);
	}
	_triggerBackdropTransition() {
		if (J.trigger(this._element, gs).defaultPrevented) return;
		let e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._element.style.overflowY;
		t === "hidden" || this._element.classList.contains(Os) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Os), this._queueCallback(() => {
			this._element.classList.remove(Os), this._queueCallback(() => {
				this._element.style.overflowY = t;
			}, this._dialog);
		}, this._dialog), this._element.focus());
	}
	_adjustDialog() {
		let e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), n = t > 0;
		if (n && !e) {
			let e = G() ? "paddingLeft" : "paddingRight";
			this._element.style[e] = `${t}px`;
		}
		if (!n && e) {
			let e = G() ? "paddingRight" : "paddingLeft";
			this._element.style[e] = `${t}px`;
		}
	}
	_resetAdjustments() {
		this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
	}
	static jQueryInterface(t, n) {
		return this.each(function() {
			let r = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (r[t] === void 0) throw TypeError(`No method named "${t}"`);
				r[t](n);
			}
		});
	}
};
J.on(document, ws, Ms, function(e) {
	let t = Z.getElementFromSelector(this);
	["A", "AREA"].includes(this.tagName) && e.preventDefault(), J.one(t, vs, (e) => {
		e.defaultPrevented || J.one(t, _s, () => {
			Jr(this) && this.focus();
		});
	});
	let n = Z.findOne(ks);
	n && Fs.getInstance(n).hide(), Fs.getOrCreateInstance(t).toggle(this);
}), Di(Fs), K(Fs);
var Is = "offcanvas", $ = ".bs.offcanvas", Ls = ".data-api", Rs = `load${$}${Ls}`, zs = "Escape", Bs = "show", Vs = "showing", Hs = "hiding", Us = "offcanvas-backdrop", Ws = ".offcanvas.show", Gs = `show${$}`, Ks = `shown${$}`, qs = `hide${$}`, Js = `hidePrevented${$}`, Ys = `hidden${$}`, Xs = `resize${$}`, Zs = `click${$}${Ls}`, Qs = `keydown.dismiss${$}`, $s = "[data-bs-toggle=\"offcanvas\"]", ec = {
	backdrop: !0,
	keyboard: !0,
	scroll: !1
}, tc = {
	backdrop: "(boolean|string)",
	keyboard: "boolean",
	scroll: "boolean"
}, nc = class e extends X {
	constructor(e, t) {
		super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
	}
	static get Default() {
		return ec;
	}
	static get DefaultType() {
		return tc;
	}
	static get NAME() {
		return Is;
	}
	toggle(e) {
		return this._isShown ? this.hide() : this.show(e);
	}
	show(e) {
		this._isShown || J.trigger(this._element, Gs, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new ds().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Vs), this._queueCallback(() => {
			(!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Bs), this._element.classList.remove(Vs), J.trigger(this._element, Ks, { relatedTarget: e });
		}, this._element, !0));
	}
	hide() {
		!this._isShown || J.trigger(this._element, qs).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Hs), this._backdrop.hide(), this._queueCallback(() => {
			this._element.classList.remove(Bs, Hs), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new ds().reset(), J.trigger(this._element, Ys);
		}, this._element, !0));
	}
	dispose() {
		this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
	}
	_initializeBackDrop() {
		let e = () => {
			if (this._config.backdrop === "static") {
				J.trigger(this._element, Js);
				return;
			}
			this.hide();
		}, t = !!this._config.backdrop;
		return new Xo({
			className: Us,
			isVisible: t,
			isAnimated: !0,
			rootElement: this._element.parentNode,
			clickCallback: t ? e : null
		});
	}
	_initializeFocusTrap() {
		return new os({ trapElement: this._element });
	}
	_addEventListeners() {
		J.on(this._element, Qs, (e) => {
			if (e.key === zs) {
				if (this._config.keyboard) {
					this.hide();
					return;
				}
				J.trigger(this._element, Js);
			}
		});
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t](this);
			}
		});
	}
};
J.on(document, Zs, $s, function(e) {
	let t = Z.getElementFromSelector(this);
	if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Yr(this)) return;
	J.one(t, Ys, () => {
		Jr(this) && this.focus();
	});
	let n = Z.findOne(Ws);
	n && n !== t && nc.getInstance(n).hide(), nc.getOrCreateInstance(t).toggle(this);
}), J.on(window, Rs, () => {
	for (let e of Z.find(Ws)) nc.getOrCreateInstance(e).show();
}), J.on(window, Xs, () => {
	for (let e of Z.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(e).position !== "fixed" && nc.getOrCreateInstance(e).hide();
}), Di(nc), K(nc);
var rc = /^aria-[\w-]*$/i, ic = {
	"*": [
		"class",
		"dir",
		"id",
		"lang",
		"role",
		rc
	],
	a: [
		"target",
		"href",
		"title",
		"rel"
	],
	area: [],
	b: [],
	br: [],
	col: [],
	code: [],
	dd: [],
	div: [],
	dl: [],
	dt: [],
	em: [],
	hr: [],
	h1: [],
	h2: [],
	h3: [],
	h4: [],
	h5: [],
	h6: [],
	i: [],
	img: [
		"src",
		"srcset",
		"alt",
		"title",
		"width",
		"height"
	],
	li: [],
	ol: [],
	p: [],
	pre: [],
	s: [],
	small: [],
	span: [],
	sub: [],
	sup: [],
	strong: [],
	u: [],
	ul: []
}, ac = new Set([
	"background",
	"cite",
	"href",
	"itemtype",
	"longdesc",
	"poster",
	"src",
	"xlink:href"
]), oc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, sc = (e, t) => {
	let n = e.nodeName.toLowerCase();
	return t.includes(n) ? ac.has(n) ? !!oc.test(e.nodeValue) : !0 : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
};
function cc(e, t, n) {
	if (!e.length) return e;
	if (n && typeof n == "function") return n(e);
	let r = new window.DOMParser().parseFromString(e, "text/html"), i = [].concat(...r.body.querySelectorAll("*"));
	for (let e of i) {
		let n = e.nodeName.toLowerCase();
		if (!Object.keys(t).includes(n)) {
			e.remove();
			continue;
		}
		let r = [].concat(...e.attributes), i = [].concat(t["*"] || [], t[n] || []);
		for (let t of r) sc(t, i) || e.removeAttribute(t.nodeName);
	}
	return r.body.innerHTML;
}
var lc = "TemplateFactory", uc = {
	allowList: ic,
	content: {},
	extraClass: "",
	html: !1,
	sanitize: !0,
	sanitizeFn: null,
	template: "<div></div>"
}, dc = {
	allowList: "object",
	content: "object",
	extraClass: "(string|function)",
	html: "boolean",
	sanitize: "boolean",
	sanitizeFn: "(null|function)",
	template: "string"
}, fc = {
	entry: "(string|element|function|null)",
	selector: "(string|element)"
}, pc = class extends wi {
	constructor(e) {
		super(), this._config = this._getConfig(e);
	}
	static get Default() {
		return uc;
	}
	static get DefaultType() {
		return dc;
	}
	static get NAME() {
		return lc;
	}
	getContent() {
		return Object.values(this._config.content).map((e) => this._resolvePossibleFunction(e)).filter(Boolean);
	}
	hasContent() {
		return this.getContent().length > 0;
	}
	changeContent(e) {
		return this._checkContent(e), this._config.content = {
			...this._config.content,
			...e
		}, this;
	}
	toHtml() {
		let e = document.createElement("div");
		e.innerHTML = this._maybeSanitize(this._config.template);
		for (let [t, n] of Object.entries(this._config.content)) this._setContent(e, n, t);
		let t = e.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
		return n && t.classList.add(...n.split(" ")), t;
	}
	_typeCheckConfig(e) {
		super._typeCheckConfig(e), this._checkContent(e.content);
	}
	_checkContent(e) {
		for (let [t, n] of Object.entries(e)) super._typeCheckConfig({
			selector: t,
			entry: n
		}, fc);
	}
	_setContent(e, t, n) {
		let r = Z.findOne(n, e);
		if (r) {
			if (t = this._resolvePossibleFunction(t), !t) {
				r.remove();
				return;
			}
			if (W(t)) {
				this._putElementInTemplate(qr(t), r);
				return;
			}
			if (this._config.html) {
				r.innerHTML = this._maybeSanitize(t);
				return;
			}
			r.textContent = t;
		}
	}
	_maybeSanitize(e) {
		return this._config.sanitize ? cc(e, this._config.allowList, this._config.sanitizeFn) : e;
	}
	_resolvePossibleFunction(e) {
		return q(e, [void 0, this]);
	}
	_putElementInTemplate(e, t) {
		if (this._config.html) {
			t.innerHTML = "", t.append(e);
			return;
		}
		t.textContent = e.textContent;
	}
}, mc = "tooltip", hc = new Set([
	"sanitize",
	"allowList",
	"sanitizeFn"
]), gc = "fade", _c = "modal", vc = "show", yc = ".tooltip-inner", bc = `.${_c}`, xc = "hide.bs.modal", Sc = "hover", Cc = "focus", wc = "click", Tc = "manual", Ec = "hide", Dc = "hidden", Oc = "show", kc = "shown", Ac = "inserted", jc = "click", Mc = "focusin", Nc = "focusout", Pc = "mouseenter", Fc = "mouseleave", Ic = {
	AUTO: "auto",
	TOP: "top",
	RIGHT: G() ? "left" : "right",
	BOTTOM: "bottom",
	LEFT: G() ? "right" : "left"
}, Lc = {
	allowList: ic,
	animation: !0,
	boundary: "clippingParents",
	container: !1,
	customClass: "",
	delay: 0,
	fallbackPlacements: [
		"top",
		"right",
		"bottom",
		"left"
	],
	html: !1,
	offset: [0, 6],
	placement: "top",
	popperConfig: null,
	sanitize: !0,
	sanitizeFn: null,
	selector: !1,
	template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
	title: "",
	trigger: "hover focus"
}, Rc = {
	allowList: "object",
	animation: "boolean",
	boundary: "(string|element)",
	container: "(string|element|boolean)",
	customClass: "(string|function)",
	delay: "(number|object)",
	fallbackPlacements: "array",
	html: "boolean",
	offset: "(array|string|function)",
	placement: "(string|function)",
	popperConfig: "(null|object|function)",
	sanitize: "boolean",
	sanitizeFn: "(null|function)",
	selector: "(string|boolean)",
	template: "string",
	title: "(string|element|function)",
	trigger: "string"
}, zc = class e extends X {
	constructor(e, t) {
		if (Lr === void 0) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
		super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
	}
	static get Default() {
		return Lc;
	}
	static get DefaultType() {
		return Rc;
	}
	static get NAME() {
		return mc;
	}
	enable() {
		this._isEnabled = !0;
	}
	disable() {
		this._isEnabled = !1;
	}
	toggleEnabled() {
		this._isEnabled = !this._isEnabled;
	}
	toggle() {
		if (this._isEnabled) {
			if (this._isShown()) {
				this._leave();
				return;
			}
			this._enter();
		}
	}
	dispose() {
		clearTimeout(this._timeout), J.off(this._element.closest(bc), xc, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
	}
	show() {
		if (this._element.style.display === "none") throw Error("Please use show on visible elements");
		if (!(this._isWithContent() && this._isEnabled)) return;
		let e = J.trigger(this._element, this.constructor.eventName(Oc)), t = (Xr(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
		if (e.defaultPrevented || !t) return;
		this._disposePopper();
		let n = this._getTipElement();
		this._element.setAttribute("aria-describedby", n.getAttribute("id"));
		let { container: r } = this._config;
		if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(n), J.trigger(this._element, this.constructor.eventName(Ac))), this._popper = this._createPopper(n), n.classList.add(vc), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) J.on(e, "mouseover", Zr);
		this._queueCallback(() => {
			J.trigger(this._element, this.constructor.eventName(kc)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
		}, this.tip, this._isAnimated());
	}
	hide() {
		if (!(!this._isShown() || J.trigger(this._element, this.constructor.eventName(Ec)).defaultPrevented)) {
			if (this._getTipElement().classList.remove(vc), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) J.off(e, "mouseover", Zr);
			this._activeTrigger[wc] = !1, this._activeTrigger[Cc] = !1, this._activeTrigger[Sc] = !1, this._isHovered = null, this._queueCallback(() => {
				this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), J.trigger(this._element, this.constructor.eventName(Dc)));
			}, this.tip, this._isAnimated());
		}
	}
	update() {
		this._popper && this._popper.update();
	}
	_isWithContent() {
		return !!this._getTitle();
	}
	_getTipElement() {
		return this.tip ||= this._createTipElement(this._newContent || this._getContentForTemplate()), this.tip;
	}
	_createTipElement(e) {
		let t = this._getTemplateFactory(e).toHtml();
		if (!t) return null;
		t.classList.remove(gc, vc), t.classList.add(`bs-${this.constructor.NAME}-auto`);
		let n = Wr(this.constructor.NAME).toString();
		return t.setAttribute("id", n), this._isAnimated() && t.classList.add(gc), t;
	}
	setContent(e) {
		this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
	}
	_getTemplateFactory(e) {
		return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new pc({
			...this._config,
			content: e,
			extraClass: this._resolvePossibleFunction(this._config.customClass)
		}), this._templateFactory;
	}
	_getContentForTemplate() {
		return { [yc]: this._getTitle() };
	}
	_getTitle() {
		return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
	}
	_initializeOnDelegatedTarget(e) {
		return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
	}
	_isAnimated() {
		return this._config.animation || this.tip && this.tip.classList.contains(gc);
	}
	_isShown() {
		return this.tip && this.tip.classList.contains(vc);
	}
	_createPopper(e) {
		let t = Ic[q(this._config.placement, [
			this,
			e,
			this._element
		]).toUpperCase()];
		return Ir(this._element, e, this._getPopperConfig(t));
	}
	_getOffset() {
		let { offset: e } = this._config;
		return typeof e == "string" ? e.split(",").map((e) => Number.parseInt(e, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
	}
	_resolvePossibleFunction(e) {
		return q(e, [this._element, this._element]);
	}
	_getPopperConfig(e) {
		let t = {
			placement: e,
			modifiers: [
				{
					name: "flip",
					options: { fallbackPlacements: this._config.fallbackPlacements }
				},
				{
					name: "offset",
					options: { offset: this._getOffset() }
				},
				{
					name: "preventOverflow",
					options: { boundary: this._config.boundary }
				},
				{
					name: "arrow",
					options: { element: `.${this.constructor.NAME}-arrow` }
				},
				{
					name: "preSetPlacement",
					enabled: !0,
					phase: "beforeMain",
					fn: (e) => {
						this._getTipElement().setAttribute("data-popper-placement", e.state.placement);
					}
				}
			]
		};
		return {
			...t,
			...q(this._config.popperConfig, [void 0, t])
		};
	}
	_setListeners() {
		let e = this._config.trigger.split(" ");
		for (let t of e) if (t === "click") J.on(this._element, this.constructor.eventName(jc), this._config.selector, (e) => {
			let t = this._initializeOnDelegatedTarget(e);
			t._activeTrigger[wc] = !(t._isShown() && t._activeTrigger[wc]), t.toggle();
		});
		else if (t !== Tc) {
			let e = t === Sc ? this.constructor.eventName(Pc) : this.constructor.eventName(Mc), n = t === Sc ? this.constructor.eventName(Fc) : this.constructor.eventName(Nc);
			J.on(this._element, e, this._config.selector, (e) => {
				let t = this._initializeOnDelegatedTarget(e);
				t._activeTrigger[e.type === "focusin" ? Cc : Sc] = !0, t._enter();
			}), J.on(this._element, n, this._config.selector, (e) => {
				let t = this._initializeOnDelegatedTarget(e);
				t._activeTrigger[e.type === "focusout" ? Cc : Sc] = t._element.contains(e.relatedTarget), t._leave();
			});
		}
		this._hideModalHandler = () => {
			this._element && this.hide();
		}, J.on(this._element.closest(bc), xc, this._hideModalHandler);
	}
	_fixTitle() {
		let e = this._element.getAttribute("title");
		e && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"));
	}
	_enter() {
		if (this._isShown() || this._isHovered) {
			this._isHovered = !0;
			return;
		}
		this._isHovered = !0, this._setTimeout(() => {
			this._isHovered && this.show();
		}, this._config.delay.show);
	}
	_leave() {
		this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
			this._isHovered || this.hide();
		}, this._config.delay.hide));
	}
	_setTimeout(e, t) {
		clearTimeout(this._timeout), this._timeout = setTimeout(e, t);
	}
	_isWithActiveTrigger() {
		return Object.values(this._activeTrigger).includes(!0);
	}
	_getConfig(e) {
		let t = Y.getDataAttributes(this._element);
		for (let e of Object.keys(t)) hc.has(e) && delete t[e];
		return e = {
			...t,
			...typeof e == "object" && e ? e : {}
		}, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
	}
	_configAfterMerge(e) {
		return e.container = e.container === !1 ? document.body : qr(e.container), typeof e.delay == "number" && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
	}
	_getDelegateConfig() {
		let e = {};
		for (let [t, n] of Object.entries(this._config)) this.constructor.Default[t] !== n && (e[t] = n);
		return e.selector = !1, e.trigger = "manual", e;
	}
	_disposePopper() {
		this._popper &&= (this._popper.destroy(), null), this.tip &&= (this.tip.remove(), null);
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0) throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
};
K(zc);
var Bc = "popover", Vc = ".popover-header", Hc = ".popover-body", Uc = {
	...zc.Default,
	content: "",
	offset: [0, 8],
	placement: "right",
	template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>",
	trigger: "click"
}, Wc = {
	...zc.DefaultType,
	content: "(null|string|element|function)"
};
K(class e extends zc {
	static get Default() {
		return Uc;
	}
	static get DefaultType() {
		return Wc;
	}
	static get NAME() {
		return Bc;
	}
	_isWithContent() {
		return this._getTitle() || this._getContent();
	}
	_getContentForTemplate() {
		return {
			[Vc]: this._getTitle(),
			[Hc]: this._getContent()
		};
	}
	_getContent() {
		return this._resolvePossibleFunction(this._config.content);
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0) throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
});
var Gc = "scrollspy", Kc = ".bs.scrollspy", qc = ".data-api", Jc = `activate${Kc}`, Yc = `click${Kc}`, Xc = `load${Kc}${qc}`, Zc = "dropdown-item", Qc = "active", $c = "[data-bs-spy=\"scroll\"]", el = "[href]", tl = ".nav, .list-group", nl = ".nav-link", rl = `${nl}, .nav-item > ${nl}, .list-group-item`, il = ".dropdown", al = ".dropdown-toggle", ol = {
	offset: null,
	rootMargin: "0px 0px -25%",
	smoothScroll: !1,
	target: null,
	threshold: [
		.1,
		.5,
		1
	]
}, sl = {
	offset: "(number|null)",
	rootMargin: "string",
	smoothScroll: "boolean",
	target: "element",
	threshold: "array"
}, cl = class e extends X {
	constructor(e, t) {
		super(e, t), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
			visibleEntryTop: 0,
			parentScrollTop: 0
		}, this.refresh();
	}
	static get Default() {
		return ol;
	}
	static get DefaultType() {
		return sl;
	}
	static get NAME() {
		return Gc;
	}
	refresh() {
		this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
		for (let e of this._observableSections.values()) this._observer.observe(e);
	}
	dispose() {
		this._observer.disconnect(), super.dispose();
	}
	_configAfterMerge(e) {
		return e.target = qr(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((e) => Number.parseFloat(e))), e;
	}
	_maybeEnableSmoothScroll() {
		this._config.smoothScroll && (J.off(this._config.target, Yc), J.on(this._config.target, Yc, el, (e) => {
			let t = this._observableSections.get(e.target.hash);
			if (t) {
				e.preventDefault();
				let n = this._rootElement || window, r = t.offsetTop - this._element.offsetTop;
				if (n.scrollTo) {
					n.scrollTo({
						top: r,
						behavior: "smooth"
					});
					return;
				}
				n.scrollTop = r;
			}
		}));
	}
	_getNewObserver() {
		let e = {
			root: this._rootElement,
			threshold: this._config.threshold,
			rootMargin: this._config.rootMargin
		};
		return new IntersectionObserver((e) => this._observerCallback(e), e);
	}
	_observerCallback(e) {
		let t = (e) => this._targetLinks.get(`#${e.target.id}`), n = (e) => {
			this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e));
		}, r = (this._rootElement || document.documentElement).scrollTop, i = r >= this._previousScrollData.parentScrollTop;
		this._previousScrollData.parentScrollTop = r;
		for (let a of e) {
			if (!a.isIntersecting) {
				this._activeTarget = null, this._clearActiveClass(t(a));
				continue;
			}
			let e = a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
			if (i && e) {
				if (n(a), !r) return;
				continue;
			}
			!i && !e && n(a);
		}
	}
	_initializeTargetsAndObservables() {
		this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
		let e = Z.find(el, this._config.target);
		for (let t of e) {
			if (!t.hash || Yr(t)) continue;
			let e = Z.findOne(decodeURI(t.hash), this._element);
			Jr(e) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, e));
		}
	}
	_process(e) {
		this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(Qc), this._activateParents(e), J.trigger(this._element, Jc, { relatedTarget: e }));
	}
	_activateParents(e) {
		if (e.classList.contains(Zc)) {
			Z.findOne(al, e.closest(il)).classList.add(Qc);
			return;
		}
		for (let t of Z.parents(e, tl)) for (let e of Z.prev(t, rl)) e.classList.add(Qc);
	}
	_clearActiveClass(e) {
		e.classList.remove(Qc);
		let t = Z.find(`${el}.${Qc}`, e);
		for (let e of t) e.classList.remove(Qc);
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
};
J.on(window, Xc, () => {
	for (let e of Z.find($c)) cl.getOrCreateInstance(e);
}), K(cl);
var ll = "tab", ul = ".bs.tab", dl = `hide${ul}`, fl = `hidden${ul}`, pl = `show${ul}`, ml = `shown${ul}`, hl = `click${ul}`, gl = `keydown${ul}`, _l = `load${ul}`, vl = "ArrowLeft", yl = "ArrowRight", bl = "ArrowUp", xl = "ArrowDown", Sl = "Home", Cl = "End", wl = "active", Tl = "fade", El = "show", Dl = "dropdown", Ol = ".dropdown-toggle", kl = ".dropdown-menu", Al = `:not(${Ol})`, jl = ".list-group, .nav, [role=\"tablist\"]", Ml = ".nav-item, .list-group-item", Nl = `.nav-link${Al}, .list-group-item${Al}, [role="tab"]${Al}`, Pl = "[data-bs-toggle=\"tab\"], [data-bs-toggle=\"pill\"], [data-bs-toggle=\"list\"]", Fl = `${Nl}, ${Pl}`, Il = `.${wl}[data-bs-toggle="tab"], .${wl}[data-bs-toggle="pill"], .${wl}[data-bs-toggle="list"]`, Ll = class e extends X {
	constructor(e) {
		super(e), this._parent = this._element.closest(jl), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), J.on(this._element, gl, (e) => this._keydown(e)));
	}
	static get NAME() {
		return ll;
	}
	show() {
		let e = this._element;
		if (this._elemIsActive(e)) return;
		let t = this._getActiveElem(), n = t ? J.trigger(t, dl, { relatedTarget: e }) : null;
		J.trigger(e, pl, { relatedTarget: t }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
	}
	_activate(e, t) {
		e && (e.classList.add(wl), this._activate(Z.getElementFromSelector(e)), this._queueCallback(() => {
			if (e.getAttribute("role") !== "tab") {
				e.classList.add(El);
				return;
			}
			e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), J.trigger(e, ml, { relatedTarget: t });
		}, e, e.classList.contains(Tl)));
	}
	_deactivate(e, t) {
		e && (e.classList.remove(wl), e.blur(), this._deactivate(Z.getElementFromSelector(e)), this._queueCallback(() => {
			if (e.getAttribute("role") !== "tab") {
				e.classList.remove(El);
				return;
			}
			e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), J.trigger(e, fl, { relatedTarget: t });
		}, e, e.classList.contains(Tl)));
	}
	_keydown(t) {
		if (![
			vl,
			yl,
			bl,
			xl,
			Sl,
			Cl
		].includes(t.key)) return;
		t.stopPropagation(), t.preventDefault();
		let n = this._getChildren().filter((e) => !Yr(e)), r;
		if ([Sl, Cl].includes(t.key)) r = n[t.key === Sl ? 0 : n.length - 1];
		else {
			let e = [yl, xl].includes(t.key);
			r = ri(n, t.target, e, !0);
		}
		r && (r.focus({ preventScroll: !0 }), e.getOrCreateInstance(r).show());
	}
	_getChildren() {
		return Z.find(Fl, this._parent);
	}
	_getActiveElem() {
		return this._getChildren().find((e) => this._elemIsActive(e)) || null;
	}
	_setInitialAttributes(e, t) {
		this._setAttributeIfNotExists(e, "role", "tablist");
		for (let e of t) this._setInitialAttributesOnChild(e);
	}
	_setInitialAttributesOnChild(e) {
		e = this._getInnerElement(e);
		let t = this._elemIsActive(e), n = this._getOuterElement(e);
		e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
	}
	_setInitialAttributesOnTargetPanel(e) {
		let t = Z.getElementFromSelector(e);
		t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
	}
	_toggleDropDown(e, t) {
		let n = this._getOuterElement(e);
		if (!n.classList.contains(Dl)) return;
		let r = (e, r) => {
			let i = Z.findOne(e, n);
			i && i.classList.toggle(r, t);
		};
		r(Ol, wl), r(kl, El), n.setAttribute("aria-expanded", t);
	}
	_setAttributeIfNotExists(e, t, n) {
		e.hasAttribute(t) || e.setAttribute(t, n);
	}
	_elemIsActive(e) {
		return e.classList.contains(wl);
	}
	_getInnerElement(e) {
		return e.matches(Fl) ? e : Z.findOne(Fl, e);
	}
	_getOuterElement(e) {
		return e.closest(Ml) || e;
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this);
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
};
J.on(document, hl, Pl, function(e) {
	["A", "AREA"].includes(this.tagName) && e.preventDefault(), !Yr(this) && Ll.getOrCreateInstance(this).show();
}), J.on(window, _l, () => {
	for (let e of Z.find(Il)) Ll.getOrCreateInstance(e);
}), K(Ll);
var Rl = "toast", zl = ".bs.toast", Bl = `mouseover${zl}`, Vl = `mouseout${zl}`, Hl = `focusin${zl}`, Ul = `focusout${zl}`, Wl = `hide${zl}`, Gl = `hidden${zl}`, Kl = `show${zl}`, ql = `shown${zl}`, Jl = "fade", Yl = "hide", Xl = "show", Zl = "showing", Ql = {
	animation: "boolean",
	autohide: "boolean",
	delay: "number"
}, $l = {
	animation: !0,
	autohide: !0,
	delay: 5e3
}, eu = class e extends X {
	constructor(e, t) {
		super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
	}
	static get Default() {
		return $l;
	}
	static get DefaultType() {
		return Ql;
	}
	static get NAME() {
		return Rl;
	}
	show() {
		J.trigger(this._element, Kl).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add(Jl), this._element.classList.remove(Yl), Qr(this._element), this._element.classList.add(Xl, Zl), this._queueCallback(() => {
			this._element.classList.remove(Zl), J.trigger(this._element, ql), this._maybeScheduleHide();
		}, this._element, this._config.animation));
	}
	hide() {
		!this.isShown() || J.trigger(this._element, Wl).defaultPrevented || (this._element.classList.add(Zl), this._queueCallback(() => {
			this._element.classList.add(Yl), this._element.classList.remove(Zl, Xl), J.trigger(this._element, Gl);
		}, this._element, this._config.animation));
	}
	dispose() {
		this._clearTimeout(), this.isShown() && this._element.classList.remove(Xl), super.dispose();
	}
	isShown() {
		return this._element.classList.contains(Xl);
	}
	_maybeScheduleHide() {
		this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
			this.hide();
		}, this._config.delay)));
	}
	_onInteraction(e, t) {
		switch (e.type) {
			case "mouseover":
			case "mouseout":
				this._hasMouseInteraction = t;
				break;
			case "focusin":
			case "focusout":
				this._hasKeyboardInteraction = t;
				break;
		}
		if (t) {
			this._clearTimeout();
			return;
		}
		let n = e.relatedTarget;
		this._element === n || this._element.contains(n) || this._maybeScheduleHide();
	}
	_setListeners() {
		J.on(this._element, Bl, (e) => this._onInteraction(e, !0)), J.on(this._element, Vl, (e) => this._onInteraction(e, !1)), J.on(this._element, Hl, (e) => this._onInteraction(e, !0)), J.on(this._element, Ul, (e) => this._onInteraction(e, !1));
	}
	_clearTimeout() {
		clearTimeout(this._timeout), this._timeout = null;
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0) throw TypeError(`No method named "${t}"`);
				n[t](this);
			}
		});
	}
};
Di(eu), K(eu);
//#endregion
//#region src/index.js
var tu = { init({ el: e = "#app", debug: t = !1, mapOptions: r = {} } = {}) {
	let i = n(zt, {
		debug: t,
		mapOptions: r
	});
	return i.mount(e), i;
} };
//#endregion
export { tu as default };
